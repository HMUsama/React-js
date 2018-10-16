import React from "react";

class Change extends React.Component {
    constructor() {
      super();
      this.state = {
        text:'Hello Pakistan',
        condition:true
      }
    }
  
    updateTheState(y) {
      this.setState({
        text: this.state.condition ? 'Hello World' : 'Hello Pakistan',
        condition: !this.state.condition
      })
    } 

render() {
    return (
      <div style={{backgroundColor:"#2db536"}}>
        <h2 className="App-title">Chang Text</h2>
        <h2>{this.state.text}</h2>
        <button onClick={() => this.updateTheState()}>Change the State</button>
      </div>
    );
  }
}
export default Change;
