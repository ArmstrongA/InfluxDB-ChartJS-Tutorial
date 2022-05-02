const data = {
    '2010': 1.6,
    '2011': 3.2,
    '2012': 2.1,
    '2013': 1.5,
    '2014': 1.6,
    '2015': 0.1,
    '2016': 1.3,
    '2017': 2.1,
    '2018': 2.4,
    '2019': 1.8,
    '2020': 1.2,
    '2021': 4.7
    
};
const ctx = document.getElementById('mybarChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: Object.keys(data),
        datasets: [{
            label: 'US Inflation by Year',
            data: Object.values(data),
        }, ],
    },
    options: {
        plugins: {
            title: {
              display: true,
              text: 'US Annual Inflation Rate',
              font: {
                size: 16
              }
            },
          },
        backgroundColor: [
            'rgba(226,234,60, 0.3)',  // Bar 1
            'rgba(194,172,57, 0.3)',  // Bar 2
            'rgba(16,44,139, 0.3)',  // Bar 3
            'rgba(179,138,114, 0.3)',  // Bar 4
            'rgba(77,212,123, 0.3)', // Bar 5
            'rgba(156,167,20, 0.3)',  // Bar 6
            'rgba(166,2,136, 0.3)',  // Bar 7
            'rgba(70,123,116, 0.3)',  // Bar 8
            'rgba(54,185,183, 0.3)',  // Bar 9
            'rgba(154,251,39, 0.3)',  // Bar 10
            'rgba(155,12,8, 0.3)', // Bar 11
            'rgba(171,212,68, 0.3)'   // Bar 12
        ],
        borderWidth: 2,
        borderColor: 'black',
        mantainAspectRatio: false,
        responsive: false
    }
});