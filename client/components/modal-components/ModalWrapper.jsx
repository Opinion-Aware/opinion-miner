import React, { Component, useState } from 'react';
import ModalRight from './ModalRight.jsx';
import ModalCenter from './ModalCenter.jsx';
import ModalLeft from './ModalLeft.jsx';

function ModalWrapper ({ name, userStats, setModalShow }) {

  return (
      <div className="modal-main">
        <ModalLeft name={name} userStats={JSON.stringify(userStats)}/>
        <ModalCenter userStats={userStats}/>
        <ModalRight userStats={userStats} setModalShow={setModalShow}/>
      </div>
  )
}

export default ModalWrapper;