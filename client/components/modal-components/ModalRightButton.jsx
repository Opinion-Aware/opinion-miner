import React, { Component, useState } from 'react';

function ModalRightButton ({setModalShow}) {
  //const [name, setName] = useState();
  // const handleHide = () => setModalShow(false);

  return (
    <button id="closeModal" onClick={() => setModalShow()}> X </button>
  )
}

export default ModalRightButton;