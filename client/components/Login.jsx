import React, { Component, useState } from 'react';
import FacebookLogin from 'react-facebook-login';


class Login extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(      
      <div className="loginBox">
      <FacebookLogin
        appId="177160351206924" //appId For non test version ="2982133178693704" 
        autoLoad={true}
        fields="name,email,picture"
        callback={(resp) => this.props.setLoginData(resp)} 
      />
    </div>)
  }
}

  export default Login