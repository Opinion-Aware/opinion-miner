import React, { Component } from 'react'


// loop over props.tweets
// forEach item of list render the MUI list item
// display vals for message and username.. or what ever data we wish to render 

export class PostScroll extends Component {
    render() {
        return (
            <div id='postScroll'>
                {this.tweets.message.map(message => <SinglePost/>)}
                
            </div>
        )
    }
}

export default PostScroll;
