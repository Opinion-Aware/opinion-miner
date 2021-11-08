import React, { Component } from 'react';
import PostScroll from './PostScroll';




export class PostContainer extends Component {
    constructor(props) {
        super(props)

        // sample data 
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

    render() {
        return (
            // overflow-y: scroll inside of style
            <div>
                <PostScroll tweets={this.tweets} />
            </div>
        )
    }
}

export default PostContainer;
