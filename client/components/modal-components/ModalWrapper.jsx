import React, { Component, useState } from 'react';
import ModalRight from './ModalRight.jsx';
import ModalCenter from './ModalCenter.jsx';
import ModalLeft from './ModalLeft.jsx';

function ModalWrapper ({ name, userStats, setModalShow }) {
 
  return (
      <div className="modal-main">
        <ModalLeft name={name} userStats={userStats}/>
        <ModalCenter name={name} userStats={userStats}/>
        <ModalRight name={name} userStats={userStats} setModalShow={setModalShow}/>
      </div>
  )
}

export default ModalWrapper;