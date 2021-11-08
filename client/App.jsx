
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        accessToken: undefined,
        email: '',
        id: '',
        name: '',
        picture: {},
        userId: '',
        isLoggedIn: false,
        },
      userPosts : [], // Array of objects
      userStatistics: [],  //TODO Decide on format
      postSentiment: {}, // Single object
      postSentimentRender: false, // Tells the dashboard whether we have a sentiment analysis to render
    }

  // TODO Comment out this example of post Sentiment Object
  //   {
  //     "post_id": "2",
  //     "media_url": "instagram image url",
  //     "hashtags": [
  //         "love",
  //         "mom",
  //         "birthday"
  //     ],
  //     "username": "kimkardashian",
  //     "caption": "Happy Birthday Mommy!!!! @krisjenner, you are ultimate goals! You are my hero! You are my life! Thank you for being the most non-judgmental loving human being I’ve ever met. You take care of us all so selflessly. Words can’t describe my love for you!!!!!!!!! OMG I love you so much mom!!!",
  //     "sentiment_score": 9.5,
  //     "sentiment_magnitude": 9.600000381469727,
  //     "post_date": "2021-11-05T21:11:30.000Z",
  //     "analysis_date": "Sun Nov 07 2021 19:04:31 GMT-0500 (Eastern Standard Time)",
  //     "analysis_description": "This is where Text description of how the post was received based on sentiment analysis score would be stored"
  // }

    // Function Binds
    this.setLoginData = this.setLoginData.bind(this);
    this.getUserPosts = this.getUserPosts.bind(this);
    this.getPostSentiment = this.getPostSentiment.bind(this);
    this.getStatistics = this.getStatistics.bind(this);
  }

  getUserPosts() {
    fetch('http://localhost:3000/carousel')
    .then(res => res.text())
    .then(res => {
      res = JSON.parse(res)
      const userPosts = res;
      this.setState({ userPosts })
    })
    .catch(function (error) {
      console.error(error);
    });
  }
  
  getPostSentiment(postID) {
    const getSentimentRequest = {
      method: 'POST',
      url: 'http://localhost:3000/sentiment',
      params: {postID: `${postID}`}
    }
    axios.request(getSentimentRequest)
    .then(res => {
      const postSentiment = res;
      const postSentimentRender = true;
      console.log('received post sentiment', res)
      this.setState({ postSentiment, postSentimentRender })
    })
    .catch(function (error) {
      console.error(error);
    });
  }

  // TODO: Format method to pass in user id
  getStatistics() {
    fetch('http://localhost:3000/sentiment/summary') 
    .then(res => res.text())
    .then(res => {
      res = JSON.parse(res)
      const userStatistics = res;
      this.setState({ userStatistics })
    })
    .catch(function (error) {
      console.error(error);
    });
  }
//   const summaryObject = {
//     summaryText: emptyDescription, 
//     averageScore: 0, 
//     analyses: []
// }


  setLoginData(response) {
    if (response !== undefined) {
      this.setState({
        ... this.state,
          user: {
            accessToken: response.accessToken, // Very Long String. Ex: EAAChIFvNTgwBADXBXnaNy8k9pRU8T24YUX1JPneU294hJRkxlrU7XSza...
            email: response.email, // String
            id: response.id, // String. Matches "userID". Ex: 10225541006659528
            name: response.name, // String. Ex: Anna Falvello Tomas
            picture: response.picture.data, // Ex: {height: 50, is_silhouette: false, width: 50, url: "https://platform-lookaside.fbsbx.com/..."}
            isLoggedIn: true
          }
        }, this.getUserPosts);
    } else console.log("Must Sign In");
  }

  render() {
    console.log('Current State ',this.state)
    let renderContent;
    if (this.state.user.isLoggedIn) {   //({ name, userStats , getPosts })
      renderContent = <Dashboard
        name={this.state.user.name} 
        userStats={this.state.userStats} 
        userPosts={this.state.userPosts} 
        getPosts={this.getPosts}
        postSentiment={this.state.postSentiment}
        getPostSentiment={this.getPostSentiment}
        postSentimentRender={this.state.postSentimentRender}
      />;
    } else {
      renderContent = <Login setLoginData={this.setLoginData}/>;
    }
    return (
        <div className="app">
          {renderContent}
          {/* 
          Syntax for alternative option with react router:
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/dashboard" component={Dashboard} exact />
          </Switch> */}
        </div>
        
    )
    }
}

export default App;