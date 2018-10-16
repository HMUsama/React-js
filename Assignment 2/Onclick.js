import React from "react";


class Onclick3 extends React.Component{
    constructor(){
        super();
        this.state={
            counter:0
        }
    }
    incrimentCounter(){
        // console.log('this',this);
        this.setState({
            counter:this.state.counter + 1
        })
    }

    render(){
        return(
            <div style={{backgroundColor:"#17d1b2"}}>
            <h1>onClick= &#123;this.myFunc.bind(this)&#125;)</h1>

            <button onClick={this.incrimentCounter.bind(this)}>Add+</button>
            <span style={{fontSize:"50px"}}>{this.state.counter}</span>
            </div>
           )   
        }
}
export default Onclick3;
