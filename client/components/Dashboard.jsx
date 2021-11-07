import React, { Component, useState }from 'react';

import StatsModal from './StatsModal.jsx';


function Dashboard () {
  const [modalShow, setModalShow] = useState(false);
  const handleShow = () => setModalShow(true);
  
  return (
      <div>
        <h1> You are in Dashboard </h1>
        <button variant="primary" onClick={handleShow} >
            Launch Modal
        </button>
        <StatsModal/>
      </div>
  )
}

export default Dashboard;