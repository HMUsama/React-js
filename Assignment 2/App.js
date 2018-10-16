
import React, { Component } from 'react';
import './App.css';
import Change from './component/Change';
import Onclick1 from './component/Onclick1';
import Onclick2 from './component/Onclick2';
import Onclick3 from './component/Onclick3';
class App extends Component {
  render() {
    return (
     <div>
          <Change/>
          <hr/>
          <Onclick1/>
          <hr/>
          <Onclick2/>
          <hr/>
          <Onclick3/>
     </div>
    )
  }
}
export default App;
