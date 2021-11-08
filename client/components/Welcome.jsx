import React from 'react';
import ButtonStats from './ButtonStats.jsx'

function Welcome ({name, getStats}) {
  return (
    <div className="welcome">
      <h1>Hi, {name}</h1>
      <ButtonStats getStats={getStats}/>
    </div>
  )
}

export default Welcome