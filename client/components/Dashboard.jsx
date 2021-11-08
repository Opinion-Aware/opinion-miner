import React, { Component, useState }from 'react';

import StatsModal from './StatsModal.jsx';
import { Modal } from '@mui/material';


function Dashboard ({ name, userStats , userPosts, getPosts }) {
  const [modalShow, setModalShow] = useState(false);
  const openModal = () => {
    setModalShow(prev => !prev);
  }

  return (
      <div>
        <h1> {JSON.stringify(userPosts)} </h1>
        <button onClick={openModal} >
            Launch Modal
        </button>
        <StatsModal name={name} userStats={userStats} modalShow={modalShow} setModalShow={setModalShow}/>
      </div>
  )
}

export default Dashboard;