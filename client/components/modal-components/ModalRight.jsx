import React, { Component, useState } from 'react';
import ModalRightButton from './ModalRightButton.jsx';
import ModalRightGraph from './ModalRightGraph.jsx';

function ModalRight ({ userStats, setModalShow, setEntryData, setShowEntry}) {

  return (
      <div className="modalRight">
        <ModalRightButton setModalShow={setModalShow}/>
        <ModalRightGraph analyses={userStats.analyses} setEntryData={setEntryData} setShowEntry={setShowEntry}/>
      </div>
  )
}

export default ModalRight;