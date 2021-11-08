import React, { Component, useState } from 'react';
import ModalCenterScore from './ModalCenterScore.jsx';

function ModalCenter ({ name, userStats }) {
   //const [name, setName] = useState();
  return (
      <div className="modalCenter">
        <ModalCenterScore/>
      </div>
  )
}

export default ModalCenter;