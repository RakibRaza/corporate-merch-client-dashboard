import dynamic from 'next/dynamic';
import { Component } from 'react';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

class StatisticsChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [354, 182, 276, 284],
      options: {
        stroke: {
          width: 3
        },
        labels: ["Delivered", "In Route", "In Progress", "Canceled"],
        chart: {
          type: 'donut',
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          }
        }],
        legend: {
          show: false,
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            donut: {
              size: '80%',
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: '14px',
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 500,
                  color: "#696C80",
                  offsetY: 24,
                },
                value: {
                  show: true,
                  fontSize: '28px',
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 700,
                  color: "#2E2C34",
                  offsetY: -18,
                },
                total: {
                  show: true,
                  showAlways: true,
                  label: 'Total Shipment',
                  fontSize: '20px',
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 500,
                  color: '#2E2C34',
                }
              }
            }
          },
        },
        tooltip: {
          enabled: false,
        },
        colors: ['#20C9AC', '#FFA043', '#FA699D', '#EBEAED'],
        dataLabels: {
          enabled: false,
        },
      },
    };
  }
  render() {
    return (
      <div id="chart" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
        <Chart height={292} options={this.state.options} series={this.state.series} type="donut" />
      </div>
    );
  }
}

export default StatisticsChart;