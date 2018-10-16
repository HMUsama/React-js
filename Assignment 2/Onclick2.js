import React from "react";


class Onclick2 extends React.Component{
    constructor() {
        super();
        this.state = {
          text:'I Love Saylani',
          condition:true
        }
      }
      updateTheState1() {
        this.setState({
          text: this.state.condition ? 'Saylani meri jaan!' : 'I Love Saylani',
          condition: !this.state.condition
        })
      }

    render() {
        return(
            <div style={{backgroundColor:"#25acce"}}>
            <h2 > onClick=&#123;() => this.myFunc() &#125;</h2>
            <button onClick={() => this.updateTheState1()}>Change State</button>
            <p> {this.state.text} </p>
   </div>
        )
    }
}
export default Onclick2;
