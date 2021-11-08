import React, { Component, useState } from 'react';
import ModalLeftStringSummary from './ModalLeftStringSummary.jsx';
import ModalLeftTitle from './ModalLeftTitle.jsx';
import ModalLeftScore from './ModalLeftScore.jsx';


function ModalLeft ({ name, userStats }) {


  return (
      <div className="modalLeft">
        <ModalLeftTitle name={name}/>
        <ModalLeftScore score={userStats.averageScore}/>
        <ModalLeftStringSummary summaryText={userStats.summaryText}/>
      </div>
  )
}

export default ModalLeft;