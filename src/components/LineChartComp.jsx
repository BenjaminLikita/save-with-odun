import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as ChartJs} from "chart.js/auto" 


const LineChartComp = ({chartData, screenSize}) => {

  console.log(screenSize.winWidth);

  const options = {
    scales: {
      x: {
        // type: "Category",
        // labels: data.labels,
        title: {
          display: true,
          text: "Weeks saved so far",
          font: {
            size: screenSize.winWidth > 550 ? 15 : 10,
            weight: 500,
            family: "poppins"
          }
        },
        ticks: {
          font: {
            size: screenSize.winWidth > 550 ? 12 : 8 ,
            // size: 7,
            weight: 500,
            family: "poppins"
          }
        }
      },
      y: {
        title: {
          display: true,
          text: "Saved in Naira (₦)",
          font: {
            size: screenSize.winWidth > 550 ? 15 : 10,
            weight: 500,
            family: "poppins"
          }
        },
        beginAtZero: true,
        ticks: {
          font: {
            size: 12,
            weight: 500,
            family: "poppins"
          }
        }
      }
    },
    plugins: {
      title: {
        // display: true,
        text: "Savings Progression",
        color: "#329F38",
        font: {
          size: 25,
          weight: 600,
          family: "poppins",
        }
      },
      legend: {
        display: false,
      },
      // labels: {
      //   font: {
      //     size: 30
      //   }
      // }
    },
    // defaultFontSize: 20
  }

  return <Line data={chartData} options={options}/>
}

export default LineChartComp