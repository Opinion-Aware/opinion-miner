import React, { Component, useState } from 'react';
import ModalLeftStringSummary from './ModalLeftStringSummary.jsx';
import ModalLeftTitle from './ModalLeftTitle.jsx';


function ModalLeft ({ name, userStats }) {
   //const [name, setName] = useState();
  // const handleHide = () => setModalShow(false);

  return (
      <div className="modalLeft">
        <ModalLeftTitle name={name}/>
        {/* // TODO: Uncomment after endpoint merged */}
        <ModalLeftStringSummary summaryText={["Your users love posts that did this and that, in particular your post about something.", "On the other hand, they showed indifference towards these others.", "Lastly, the least liked posts covered topics such as this and those."]}/>
        {/* <ModalLeftStringSummary summaryText={userStats.summaryText}/> */}
      </div>
  )
}

export default ModalLeft;