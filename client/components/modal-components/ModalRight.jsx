import React, { Component, useState } from 'react';
import ModalRightButton from './ModalRightButton.jsx';
import ModalRightGraph from './ModalRightGraph.jsx';

function ModalRight ({ name, userStats, setModalShow }) {
  //const [name, setName] = useState();
  // const handleHide = () => setModalShow(false);

  return (
      <div className="modalRight">
        <ModalRightButton setModalShow={setModalShow}/>
        <ModalRightGraph/>
      </div>
  )
}

export default ModalRight;