import React, { Component, useState } from 'react';

import ModalWrapper from './modal-components/ModalWrapper.jsx';
import { Modal } from '@mui/material';





const StatsModal = ({ modalShow, setModalShow }) => {
   //const [modalShow, setModalShow] = useState(false);

    return (
      <>
      { modalShow ? <ModalWrapper modalShow={modalShow}/> : null }
      </>
      )
  }

export default StatsModal;