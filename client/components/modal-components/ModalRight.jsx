import React, { Component, useState } from 'react';
import ModalRightButton from './ModalRightButton.jsx';
import ModalRightGraph from './ModalRightGraph.jsx';

function ModalRight ({ userStats, setModalShow }) {

  return (
      <div className="modalRight">
        <ModalRightButton setModalShow={setModalShow}/>
        <ModalRightGraph analyses={[]}/>
        {/* //TODO Uncommend after backend endpoint is added
        <ModalRightGraph analyses={userStats.analyses}/> */}
      </div>
  )
}

export default ModalRight;