import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';


const responseFacebook = (response) => {
  console.log(response);
}

  function Login() {
    return (
      <div>
        <h1> You are in Login </h1>
        <FacebookLogin
          appId="2982133178693704"
          autoLoad={true}
          fields="name,email,picture"
          //onClick={componentClicked}
          callback={responseFacebook} />
      </div>
    );
  }



  export default Login;