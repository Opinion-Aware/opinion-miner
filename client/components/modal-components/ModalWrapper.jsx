import React, { Component, useState } from 'react';
import ModalRight from './ModalRight.jsx';
import ModalCenter from './ModalCenter.jsx';
import ModalLeft from './ModalLeft.jsx';

function ModalWrapper ({ name, userStats, setModalShow }) {
  // Hook to show selected post information on center modal panel
  const [entryData, setEntryData] = useState({});
  const [showEntry, setShowEntry] = useState(false);

  return (
      <div className="modal-main">
        <ModalLeft name={name} userStats={userStats} />
        <ModalCenter userStats={userStats} showEntry={showEntry} entryData={entryData}/>
        <ModalRight userStats={userStats} setModalShow={setModalShow} setEntryData={setEntryData} setShowEntry={setShowEntry}/>
      </div>
  )
}

export default ModalWrapper;