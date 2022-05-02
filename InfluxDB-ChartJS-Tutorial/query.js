const { InfluxDB } = require('@influxdata/influxdb-client');

// You can generate a Token from the "Tokens Tab" in the UI

const token = process.env.INFLUX_TOKEN
const org = process.env.INFLUX_ORG

const client = new InfluxDB({ url: process.env.INFLUX_URL, token: token })

const queryApi = client.getQueryApi(org)

const query = `
from(bucket: "bitcoin-bucket")
|> range(start: -12h, stop: now())
|> filter(fn: (r) => r["_measurement"] == "coindesk")
|> filter(fn: (r) => r["_field"] == "price")
|> filter(fn: (r) => r["code"] == "USD")
|> filter(fn: (r) => r["crypto"] == "bitcoin")
|> filter(fn: (r) => r["description"] == "United States Dollar")
|> filter(fn: (r) => r["symbol"] == "&#36;")`

const influxConnect = async () => {
    const scatterData = [];
    const lineBarData = [];
    await queryApi
        .collectRows(query /*, you can specify a row mapper as a second arg */)
        .then(data => {
            data.forEach((x) => {
                scatterData.push({ x: new Date(x._time).getHours(), y: x._value });
                lineBarData.push({ x: x._time, y: x._value })
            })
            //console.log('\nCollect ROWS SUCCESS')
        })
        .catch(error => {
            console.error(error)
            console.log('\nCollect ROWS ERROR')
        })
    return ({ scatterData, lineBarData })

}

module.exports = influxConnect
