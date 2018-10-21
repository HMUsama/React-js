import React, { Component } from 'react';
import './App.css';
import firebase from './config/Firebase';
import CustumeRoutes from './navigation/Router';

// import { Link} from 'react-router-dom';



// Constant Variable Firebase
const provider = new firebase.auth.FacebookAuthProvider();

class App extends Component {
    constructor(props){
      super(props);
      this.state={
          isUser: false
      }
    }





//******componentWillMount

componentWillMount(){
  this.authListener()
}
//************    AuthListener

authListener() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // history.replace('/profile')
      console.log("****True-Auth-Listener-is-true****");
      console.log("****Login hai****");
      this.setState({
        isUser:true,
      })
    }
    else{
      console.log("Please SignIn");
      }
  });
}


//  ***********Login Function

login() {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var user = result.user;
    console.log("**** Login ka Function Start",user,"Login Ka Function End ****");
    console.log("Local Storage",user.displayName);
    
    // window.location.replace('./home');
  })
  .catch(function (error) {
    console.log('error',error);
    alert("Try Again");
   });
}



  render(){
    const { isUser } = this.state;
    console.log("Render User **",isUser);

    return(
      <div>
    {isUser===false ?   <div>
        <center>
            <h1>Meeting App </h1>
            <p>Login To Facebook And Go TO Dashbord</p>
            <button onClick={this.login.bind(this)}
            className="loginBtn loginBtn--facebook"
            >Login from Facebook  </button>
            </center>
        </div>:
        <div>
          <CustumeRoutes/>
        </div>
          // window.location.replace('./home')
        }
      </div>
    )
  }
}

export default App;
