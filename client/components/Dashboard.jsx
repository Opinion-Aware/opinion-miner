import React, { Component, useState }from 'react';

import StatsModal from './StatsModal.jsx';
import { Modal } from '@mui/material';
import Welcome from './Welcome.jsx';
import PostAnalysis from './PostAnalysis.jsx';
import PostContainer from './PostContainer.jsx';


function Dashboard ({ name, userStats , userPosts, getPosts, postSentiment, getPostSentiment ,postSentimentRender}) {
  const [modalShow, setModalShow] = useState(false);
  const openModal = () => {
    setModalShow(prev => !prev);
  }

  return (
      <div className="dashboardContainer">
        <Welcome name={name} userStats={userStats} openModal={openModal}/>
        {postSentimentRender ? <PostAnalysis postSentiment={postSentiment}/> : null }
        <PostContainer userPosts={userPosts} getPostSentiment={getPostSentiment}/>
        <StatsModal name={name} userStats={userStats} modalShow={modalShow} setModalShow={setModalShow}/>
      </div>
  )
}

export default Dashboard;