import React, { Component, useState } from 'react';
import ModalLeftStringSummary from './ModalLeftStringSummary';
import ModalLeftTitle from './ModalLeftTitle';


function ModalLeft () {
   //const [name, setName] = useState();
  // const handleHide = () => setModalShow(false);

  return (
      <div>
        <ModalLeftTitle/>
        <ModalLeftStringSummary/>
      </div>
  )
}

export default ModalLeft;