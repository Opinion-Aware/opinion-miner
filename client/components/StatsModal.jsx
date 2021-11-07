import React, { Component, useState } from 'react';
import ModalRight from './modal-components/ModalRight.jsx';
import ModalCenter from './modal-components/ModalCenter.jsx';
import ModalLeft from './modal-components/ModalLeft.jsx';


function StatsModal () {
   //const [name, setName] = useState();
  // const handleHide = () => setModalShow(false);

  return (
      <div>
        <ModalLeft/>
        <ModalCenter/>
        <ModalRight/>
        <h1> You are in Modal </h1>
      </div>
  )
}

export default StatsModal;