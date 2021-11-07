import React, { Component } from 'react';
import PostScroll from './PostScroll';

constructor(props) {
    super(props);

    this.tweets = [

        {
            messageId: "1",
            message: "tweet 1",
            user: "Mark Dolan",
            date: "5 mins ago"
        },
        {
            messageId: "2",
            message: "tweet 2",
            user: "Mark Dolan",
            date: "10 mins ago"
        },
        {
            messageId: "3",
            message: "tweet 2",
            user: "Mark Dolan",
            date: "10 mins ago"
        }
    ];

}


export class PostContainer extends Component {
    render() {
        return (
            <div>
                <PostScroll tweets={this.tweets} />
            </div>
        )
    }
}

export default PostContainer;
