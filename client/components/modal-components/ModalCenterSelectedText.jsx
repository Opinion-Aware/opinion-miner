import React, { Component, useState } from 'react';

function ModalCenterSelectedText ( {showEntry, entryData} ) {
  return (
    <div> 
      {entryData.caption}
    </div>
  )
}

export default ModalCenterSelectedText;