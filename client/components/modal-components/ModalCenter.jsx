import React, { Component, useState } from 'react';
import ModalCenterScore from './ModalLeftScore.jsx';
import ModalCenterSelectedEntry from './ModalCenterSelectedEntry.jsx';

function ModalCenter ({ userStats, showEntry, entryData}) {

  return (
      <div className="modalCenter">
        <ModalCenterSelectedEntry showEntry={showEntry} entryData={entryData}/>
      </div>
  )
}

export default ModalCenter;