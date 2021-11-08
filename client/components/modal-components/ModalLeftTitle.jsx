import React, { Component, useState } from 'react';

function ModalLeftTitle ( {name} ) {
  return (
      <div className="modalLeftTitle">
        {`${name}'s summary`}
      </div>
  )
}

export default ModalLeftTitle;