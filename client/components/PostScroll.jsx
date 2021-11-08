import React, { Component } from 'react';
import SinglePost from './SinglePost.jsx';


// loop over props.tweets
// forEach item of list render the MUI list item
// display vals for message and username.. or what ever data we wish to render 

export class PostScroll extends Component {
  constructor(props) {
    super(props)
  }
 
  render() {
    const singlePostArr = [];
    for (let i = 0; i < this.props.userPosts.length; i++) {
      console.log(this.props.userPosts[i].id)
      singlePostArr.push(
        <SinglePost
          key={i}
          postInfo={this.props.userPosts[i]}
          post_id={this.props.userPosts[i].id}
          getPostSentiment={this.props.getPostSentiment}
        />
      )
    }
      return (
        <div id='postScroll'>
          {/* {this.tweets.message.map(message => <SinglePost/>)} */}
          {singlePostArr}
        </div>
      )
  }
}

export default PostScroll;
