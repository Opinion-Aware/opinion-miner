import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
} 
    render() {
      console.log(this.state)
      let renderContent;
      if (this.state.loginData !== undefined) {
        renderContent = <Dashboard/>;
      } else {
        renderContent = <Login/>;
      }
      return (
          <div>
            {renderContent}
            {/* <Switch>
              <Route path="/" component={Login} exact />
              <Route path="/dashboard" component={Dashboard} exact />
            </Switch> */}
          </div>
          
      )
    }
}

export default App;