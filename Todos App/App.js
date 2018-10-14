import React, { Component } from 'react';
import './App.css';
import Todo from './components/todo/Todo'
class App extends Component {

  render() {
      return (  
    <div className ="App">
           <header className="Header">
            <h1 className="App-title">Assignment # 3 </h1>  
           </header>
           <Todo/>
         </div>
    );
  }
}

export default App;

