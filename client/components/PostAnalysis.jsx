import React from 'react';


function PostAnalysis({ postSentiment }) {
  const modifiedhashtag = []
  postSentiment.data.hashtags.forEach(el => {
    modifiedhashtag.push(`#${el} `)
  })

  return (
    // console.log(postSentiment.data.hashtags)
    <div className="postAnalysis">
      <img className='post-analysis-img' src={postSentiment.data.media_url} />
      <p>Post Description: {postSentiment.data.caption}</p>
      <p>Hashtags: {modifiedhashtag}</p>
      <p>Your Score: {postSentiment.data.sentiment_score}</p>
      <p>Analysis Summary: {postSentiment.data.analysis_description}</p>
    </div>
  )
}

export default PostAnalysis