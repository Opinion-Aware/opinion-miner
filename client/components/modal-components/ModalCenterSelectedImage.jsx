import React, { Component, useState } from 'react';

function ModalCenterSelectedImage ( {showEntry, entryData} ) {
  const featuredData = [];
  if (showEntry) {
    featuredData.push(<img src={entryData.media_url}/>)
  }
  return (
    <div className="selectedImage"> 
      {featuredData}
    </div>
  )
}

export default ModalCenterSelectedImage;