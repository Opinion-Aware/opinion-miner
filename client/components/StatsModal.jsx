import React, { Component, useState } from 'react';

import ModalWrapper from './modal-components/ModalWrapper.jsx';


const StatsModal = ({ name, userStats, modalShow, setModalShow }) => {

    return (
      <>
      { modalShow ? <ModalWrapper name={name} userStats={userStats} setModalShow={setModalShow}/> : null }
      </>
      )
  }

export default StatsModal;