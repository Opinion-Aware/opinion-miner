import React, { Component } from 'react';
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
      userStatistics: [], // Information for summary modal
      postSentiment: {}, // Single object
      postSentimentRender: false, // Tells the dashboard whether we have a sentiment analysis to render
      modalShow: false,
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
    this.setModalShow = this.setModalShow.bind(this);
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
      this.setState({ postSentiment, postSentimentRender })
    })
    .catch(function (error) {
      console.error(error);
    });
  }

  setModalShow () {
    console.log(this.state)
    console.log("settingmodal")
    const modalShow = !this.state.modalShow;
    this.setState({modalShow});
  }

  // TODO:  Stretch: Format method to pass in user id
  getStatistics() {
    fetch('http://localhost:3000/sentiment/summary') 
    .then(res => res.text())
    .then(res => {
      res = JSON.parse(res)
      console.log('userstats',res)
      const userStatistics = res;
      this.setState({ userStatistics }, this.setModalShow)
    })
    .catch(function (error) {
      console.error(error);
    });
  }


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
    let renderContent;
    if (this.state.user.isLoggedIn) {   //({ name, userStats , getPosts })
      renderContent = <Dashboard
        // TODO STRETCH: UPDATE WITH LINE BELOW TO USE OAUTH USER NAME
        name={"kim k"} // Stretch: name={this.state.user.name} 
        userStats={this.state.userStatistics} 
        userPosts={this.state.userPosts} 
        getPosts={this.getPosts}
        postSentiment={this.state.postSentiment}
        getPostSentiment={this.getPostSentiment}
        postSentimentRender={this.state.postSentimentRender}
        getStats={this.getStatistics}
        setModalShow={this.setModalShow}
        modalShow={this.state.modalShow}
      />;
    } else {
      renderContent = <Login setLoginData={this.setLoginData}/>;
    }
    return (
        <div className="app">
          {renderContent}
        </div>
        
    )
    }
}

export default App;