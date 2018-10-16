import React from "react";


class Onclick1 extends React.Component{
myfunc(){
    console.log('onClick={this.myfunc} <=Run Function');
}

    render(){
        return(
            <div style={{backgroundColor:"lightgray"}}>
            <h1>onClick=&#123;this.myFunc&#125;</h1>
            <h2>{this.myfunc.h1}</h2>
            <button onClick={this.myfunc}>Click Me</button>
            </div>
        )
    }
}

export default Onclick1;
