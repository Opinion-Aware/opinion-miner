import React from 'react';

function PostAnalysis({ postSentiment }) {
  const modifiedhashtag = []
  postSentiment.data.hashtags.forEach(el => {
    modifiedhashtag.push(`#${el} `)
  })

  // helper fucntion to format like count 
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  let scoreColor = '#996666'
  if (postSentiment.data.sentiment_score > 5) scoreColor = '#92acb4'

  return (
    // console.log(postSentiment.data.hashtags)
    <div className="postAnalysis">
      <div className='post-analysis-img'></div>
      <img src={postSentiment.data.media_url} />
      <p><b>kimkardashian</b> {postSentiment.data.caption}</p>
      <p>❤️ <b>{numberWithCommas(postSentiment.data.likes_count)}</b></p>
      <p>Hashtags: <b>{modifiedhashtag}</b></p>
      <b style={{ color: scoreColor }}><p style={{ fontWeight: '900' }}>Your Score: {postSentiment.data.sentiment_score} out of 10</p></b>
      <p>Summary: {postSentiment.data.analysis_description}</p>
    </div>
  )
}

export default PostAnalysis