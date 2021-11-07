import React, { Component, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';

class ModalRightGraph extends Component {
  constructor(props) {
    super(props);
  }
  //const [name, setName] = useState();
  // const handleHide = () => setModalShow(false);
  
  render() {
    const graphInfo = {
      labels: [1, 2, 3, 4, 5, 6],
      datasets: [
        {
          label: '',
          fill: true,
          lineTension: 0.1,
          pointRadius: 0,
          backgroundColor: '#FF5050',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 0,
          data: [1, 2, 3, 4, 5, 6],
        }
      ]
    }
    return (
      <div className='modalRightGraph'>
        <Bar
        data={graphInfo}
        options={{
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
              labels: {boxWidth: 0, boxHeight: 0, color: '#FF5050'},
              title: {display: false}
          }
        }}
        />
      </div>
    )
  }
}

export default ModalRightGraph;