import React, { Component, useState } from 'react';
import ModalCenterSelectedText from './ModalCenterSelectedText.jsx';
import ModalCenterSelectedImage from './ModalCenterSelectedImage.jsx';

function ModalCenter ({ userStats, showEntry, entryData}) {

  return (
      <div className="modalCenter">
        <ModalCenterSelectedImage showEntry={showEntry} entryData={entryData}/>
        <ModalCenterSelectedText showEntry={showEntry} entryData={entryData}/>
      </div>
  )
}

export default ModalCenter;