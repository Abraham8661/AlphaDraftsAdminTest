(function () {
    "use strict";

    /* Instruction analyzer area chart */
    var options = {
        series: [{
            name: "Instruction Analyzer",
            data: [100, 200, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300] // 12 values for 12 months
        }],
        chart: {
            type: 'area',
            height: 320,
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
        },
        subtitle: {
            text: 'Usage Count',
            align: 'left'
        },
        grid: {
            borderColor: '#f2f5f7',
        },
        title: {
            text: 'Tool Usage',
            align: 'left',
            style: {
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#8c9097'
            },
        },
        colors: ['#246cd9'],
        xaxis: {
            type: 'datetime',
            categories: [
                '2025-01-01', '2025-02-01', '2025-03-01', '2025-04-01', 
                '2025-05-01', '2025-06-01', '2025-07-01', '2025-08-01', 
                '2025-09-01', '2025-10-01', '2025-11-01', '2025-12-01'
            ],
            labels: {
                show: true,
                format: 'MMM', // Show only the month abbreviation
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: {
            opposite: true,
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        legend: {
            horizontalAlign: 'left'
        }
    };
    var chart = new ApexCharts(document.querySelector("#area-basic"), options);
    chart.render();

    /* Realtime feedback area chart */
    var options = {
        series: [{
            name: "Realtime Feedback",
            data: [100, 200, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300] // 12 values for 12 months
        }],
        chart: {
            type: 'area',
            height: 320,
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
        },
        subtitle: {
            text: 'Usage Count',
            align: 'left'
        },
        grid: {
            borderColor: '#f2f5f7',
        },
        title: {
            text: 'Tool Usage',
            align: 'left',
            style: {
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#8c9097'
            },
        },
        colors: ['#246cd9'],
        xaxis: {
            type: 'datetime',
            categories: [
                '2025-01-01', '2025-02-01', '2025-03-01', '2025-04-01', 
                '2025-05-01', '2025-06-01', '2025-07-01', '2025-08-01', 
                '2025-09-01', '2025-10-01', '2025-11-01', '2025-12-01'
            ],
            labels: {
                show: true,
                format: 'MMM', // Show only the month abbreviation
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: {
            opposite: true,
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        legend: {
            horizontalAlign: 'left'
        }
    };
    var chart = new ApexCharts(document.querySelector("#area-basic2"), options);
    chart.render();

    /* Citation assistant area chart */
    var options = {
        series: [{
            name: "Citation Assistant",
            data: [100, 200, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300] // 12 values for 12 months
        }],
        chart: {
            type: 'area',
            height: 320,
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
        },
        subtitle: {
            text: 'Usage Count',
            align: 'left'
        },
        grid: {
            borderColor: '#f2f5f7',
        },
        title: {
            text: 'Tool Usage',
            align: 'left',
            style: {
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#8c9097'
            },
        },
        colors: ['#246cd9'],
        xaxis: {
            type: 'datetime',
            categories: [
                '2025-01-01', '2025-02-01', '2025-03-01', '2025-04-01', 
                '2025-05-01', '2025-06-01', '2025-07-01', '2025-08-01', 
                '2025-09-01', '2025-10-01', '2025-11-01', '2025-12-01'
            ],
            labels: {
                show: true,
                format: 'MMM', // Show only the month abbreviation
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: {
            opposite: true,
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        legend: {
            horizontalAlign: 'left'
        }
    };
    var chart = new ApexCharts(document.querySelector("#area-basic3"), options);
    chart.render();

    /* Most used tool */
    var options = {
        series: [25, 50, 25],
        chart: {
            height: 300,
            type: 'pie',
        },
        colors: ["#246cd9", "#f5b849", "#49b6f5"],
        labels: ['Instruction Analyzer', 'Realtime Feedback', 'Citation Assistant'],
        legend: {
            position: "bottom"
        },
        dataLabels: {
            dropShadow: {
                enabled: false
            }
        },
    };
    var chart = new ApexCharts(document.querySelector("#pie-basic"), options);
    chart.render();

})();
