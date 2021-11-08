import React, { Component, useState } from 'react';

function ModalCenterScore ( {score} ) {
  return (
      <div className="summaryScore"> {`Average score:`} </div>
      // <div className="summaryScore" fontSize="50px"> {`${score} / 10`}</div>
  )
}

export default ModalCenterScore;