import React, { Component, useState } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';


class Login extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(      
      <div className="loginBox">
      oware
      <FacebookLogin 
        appId="177160351206924" //appId For non test version ="2982133178693704" 
        autoLoad={false}
        fields="name,email,picture"
        render={renderProps => (
          <button className="facebookButton" onClick={renderProps.onClick}>enter with facebook</button>
        )}
        callback={(resp) => this.props.setLoginData(resp)} 
      />
    </div>)
  }
}

  export default Login