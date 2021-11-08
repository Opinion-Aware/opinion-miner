import React, { Component, useState } from 'react';

function ModalLeftScore ( {score} ) {
  return (
    <div className="summaryScore"> {`Average score: ${(Math.round((score + Number.EPSILON) * 10))/10}  / 10`} </div>
  )
}

export default ModalLeftScore;