import React, { Component, useState } from 'react';
import FacebookLogin from 'react-facebook-login';







  function Login() {
    const responseFacebook = (response) => {
      if (response) {
        console.log('this is response', response);
        setAllValues( prevValues => {
          return { ...prevValues,
            accessToken: response.accessToken, // Very Long String. Ex: EAAChIFvNTgwBADXBXnaNy8k9pRU8T24YUX1JPneU294hJRkxlrU7XSza......
            email: response.email, // String
            id: response.id, // String. Matches "userID". Ex: 10225541006659528
            name: response.name, // String. Ex: Anna Falvello Tomas
            picture: response.picture.data, // Ex: {height: 50, is_silhouette: false, width: 50, url: "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10225541006659528&height=50&width=50&ext=1638900794&hash=AeRkKZJZU6DY0Kw0WHc"}
            userId: response.userId, // String. Matches "id". Ex: 10225541006659528
            isLoggedIn: true
          }
        });
      }
    }
    const [allValues, setAllValues] = useState({   
      accessToken: undefined,
      email: '',
      id: '',
      name: '',
      picture: {},
      userId: '',
      isLoggedIn: false,
      })

    return (
      <div>
        <h1> You are in Login </h1>
        <FacebookLogin
          appId="177160351206924" //appId For non test version ="2982133178693704" 
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook} />
      </div>
    );
  }



  export default Login