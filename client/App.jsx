import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
        }
    }

    // Function Binds
    this.setLoginData = this.setLoginData.bind(this);
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
        });
    } else console.log("Must Sign In");
  }

  render() {
    console.log('Current State ',this.state)
    let renderContent;
    if (this.state.user.isLoggedIn) {
      renderContent = <Dashboard/>;
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