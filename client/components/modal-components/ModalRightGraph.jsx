import { useEventCallback } from '@mui/material';
import React, { Component, useState } from 'react';
import { Line, Bar , Chart, chartRef} from 'react-chartjs-2';

class ModalRightGraph extends Component {
  constructor(props) {
    super(props);
    // this.props.setEntryData
    // this.props.setShowEntry
  }

  render() {
    // Filter only top three and bottom three posts from the array sent through this.props.analyses
    const analysesArr = [];
    const inputLength = this.props.analyses.length; 
    if (inputLength > 6) {
      for (let i = 0; i < 3; i++) {analysesArr.push(this.props.analyses[i])}
      for (let i = 3; i > 0; i--) {analysesArr.push(this.props.analyses[inputLength - i])}
    } else analysesArr = this.props.analyses;

    // Build out graph data based on analysesArr
    const values = [];
    const labels = [];
    const backgroundColors = [];
    for (let i = 0; i < analysesArr.length; i++) {
      values.push(analysesArr[i].sentiment_score);
      labels.push(analysesArr[i].hashtags)
      if (values[i] < 5) backgroundColors.push('#996666') // Red bar if score is under 5
      else backgroundColors.push('#92acb4') // Green bar otherwise
    }
    const graphInfo = {
      labels: labels,
      datasets: [
        {
          label: '',
          fill: true,
          lineTension: 0.1,
          pointRadius: 0,
          backgroundColor: backgroundColors, 
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 0,
          data: values,
        }
      ]
    }

    return (
      <div className='modalRightGraph'>
        <Bar
        key="bar"
        data={graphInfo}
        width={100}
	      height={90}
        options={{
          onClick: (e, activeEls, chart) => {
            const index = activeEls[0].index;
            this.props.setEntryData(analysesArr[index])
            this.props.setShowEntry(true)
          },
          plugins: {
            legend: {
              display: false,
              position: "right",
              align: "start",
              labels: {
                usePointStyle: true,
              },
            },
          },
        legend: {
            maxWidth: 0,
            labels: {boxWidth: 0, boxHeight: 0, color: '#92acb4'},
            title: {display: false}
        },
        }}
        />
      </div>
    )
  }
}

export default ModalRightGraph;