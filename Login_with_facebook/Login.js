import React, { Component } from 'react';
import firebase from '../../config/Firebase';

const provider = new firebase.auth.FacebookAuthProvider();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
        isUser: false,
    }
  }
  
  componentWillMount(){
    this.authListener()
  }
  
  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("User us here");
        console.log('user***',user);
        this.setState({
          isUser:true,
        })
      }else{
        console.log("Please SignIn")
        history.replace('/login')
      }
    });
  }
  
   logOut() {
    firebase.auth().signOut();
    this.setState({
      isUser: false,
    })
    console.log("log OUt")
  }
   login() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
    // var provider = new firebase.auth.FacebookAuthProvider();
    // firebase.auth().signInWithPopup(provider).then(function (result) {
      var token = result.credential.accessToken;
    //   history.push('/')
    // this.props.history.push('/contect');
    })

      .catch(function (error) {
       console.log(error);
      });
  }
  
  render() {
 
    const { isUser } = this.state;
    console.log(isUser);
    
    return (
      <div className="App">
        
        { isUser  ?
         <button onClick={this.logOut.bind(this)}> Logout </button>
          // this.props.history.push('/')
         :
         ( <button onClick={this.login.bind(this)}>Login from Facebook  </button>) }
        <h1> facebook FbAuthentication </h1>
      </div>
    );
  }
}

export default Login;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
