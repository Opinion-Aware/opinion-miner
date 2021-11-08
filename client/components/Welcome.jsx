import React from 'react';
import ButtonStats from './ButtonStats.jsx'

function Welcome ({name, userStats, openModal}) {
  return (
    <div className="welcome">
      <h1>Hi, {name}</h1>
      <ButtonStats openModal={openModal}/>
    </div>
  )
}

export default Welcome