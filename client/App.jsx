import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';



class App extends Component {
    render() {
        return (
            <div>
              <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/dashboard" component={Dashboard} exact />
              </Switch>
            </div>
            
        )
    }
}

export default App;