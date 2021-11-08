import React from 'react';


function PostAnalysis ({postSentiment}) {
  return (
    <div className="postAnalysis">
      <p>{postSentiment.data.sentiment_score}</p>
      <p>{postSentiment.data.analysis_description}</p>
    </div>
  )
}

export default PostAnalysis