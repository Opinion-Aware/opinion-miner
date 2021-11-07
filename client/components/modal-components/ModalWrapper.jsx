import React, { Component, useState } from 'react';
import ModalRight from './ModalRight.jsx';
import ModalCenter from './ModalCenter.jsx';
import ModalLeft from './ModalLeft.jsx';

function ModalWrapper () {
   //const [name, setName] = useState();
  return (
      <div className="modal-main">
        <ModalLeft/>
        <ModalCenter/>
        <ModalRight/>
      </div>
  )
}

export default ModalWrapper;