import React, { Component, useState } from 'react';

function ModalCenterSelectedEntry ( {showEntry, entryData} ) {
  const featuredData = [];
  if (showEntry) {
    featuredData.push(<image src={entryData.media_url}/>)
    featuredData.push(entryData.caption)
  }
  return (
    <div className="selectedEntry"> {featuredData} </div>
  )
}

export default ModalCenterSelectedEntry;