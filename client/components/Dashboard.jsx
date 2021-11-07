import React, { Component, useState }from 'react';

import StatsModal from './StatsModal.jsx';
import { Modal } from '@mui/material';


function Dashboard () {
  const [modalShow, setModalShow] = useState(false);
  const openModal = () => {
    setModalShow(prev => !prev);
  }
  return (
      <div>
        <h1> You are in Dashboard </h1>
        <button onClick={openModal} >
            Launch Modal
        </button>
        <StatsModal modalShow={modalShow} setModalShow={setModalShow}/>
      </div>
  )
}

export default Dashboard;