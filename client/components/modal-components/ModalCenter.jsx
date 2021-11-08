import React, { Component, useState } from 'react';
import ModalCenterScore from './ModalCenterScore.jsx';

function ModalCenter ({ userStats }) {
   //const [name, setName] = useState();
  return (
      <div className="modalCenter">
        <ModalCenterScore score={"8.2"}/>
        {/* // TODO: Uncomment after backend endpoint incorporated  */}
        {/* <ModalCenterScore score={userStats.averageScore}/> */}
      </div>
  )
}

export default ModalCenter;