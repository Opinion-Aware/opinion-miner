import React, { Component, useState } from 'react';
import ModalLeftStringSummary from './ModalLeftStringSummary.jsx';
import ModalLeftTitle from './ModalLeftTitle.jsx';


function ModalLeft ({ name, userStats }) {
   //const [name, setName] = useState();
  // const handleHide = () => setModalShow(false);

  return (
      <div className="modalLeft">
        <ModalLeftTitle/>
        <ModalLeftStringSummary/>
      </div>
  )
}

export default ModalLeft;