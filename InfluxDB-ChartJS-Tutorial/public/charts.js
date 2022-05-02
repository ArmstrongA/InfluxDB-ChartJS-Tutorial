
async function tryChart() {
    await getChartData()

    // Line Plot
    const lineChart = new Chart(
        document.getElementById('lineChart').getContext('2d'), {
        type: 'line',
        data: {
            datasets: [{
                label: 'Bitcoin Price',
                backgroundColor: 'blue',
                borderColor: 'rgb(255, 99, 132)',
                data: lineBarData
            }]
        },
        options: {
            plugins: {
                title: {
                  display: true,
                  text: 'Hourly Bitcoin price (in USD) Time series Line plot',
                  font: {
                    size: 16
                  }
                },
                legend: {
                display: false
              },
            },
            backgroundColor: 'rgba(16,44,139, 0.3)',
            mantainAspectRatio: false,
            responsive: false
    }
}
);

    // Scatter Plot
    const scatterChart = new Chart(
        document.getElementById('scatterChart').getContext('2d'), {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Bitcoin Price',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'blue',
                data: scatterData,
                pointRadius: 5
            }]
        },

        options: {
            plugins: {
                title: {
                  display: true,
                  text: 'Hourly Bitcoin price (in USD) Time series scatter plot',
                  font: {
                    size: 16
                  }
                },
                legend: {
                display: false
              },
            },
        
            backgroundColor: 'rgba(16,44,139, 0.3)',
            mantainAspectRatio: false,
            responsive: false
    }
    }
    );

}
tryChart()

// Fetch Data from API

async function getChartData() {
    const API_URL = 'http://127.0.0.1:8080/charts';
    const response = await fetch(API_URL)
    const result = await response.json()
    scatterData = result.scatterData
    lineBarData = result.lineBarData

}
