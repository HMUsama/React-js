import React, { Component } from 'react';
import './App.css';
 

class App extends Component {
 constructor(){
  super();
  this.state={
    data:[
      {
      title:'Java Script',
      comments:5,
      date: new Date().toLocaleDateString(),
      isOpen:true,
      isFavourite:false
      },
      {
      title:'React Js',
      comments:4,
      date: new Date().toLocaleDateString(),
      isOpen:true,
      isFavourite:false
      },
      {
      title:'Type Script',
      comments:3,
      date: new Date().toLocaleDateString(),
      isOpen:true,
      isFavourite:false
      },
      {
      title:'Java Foundamentail',
      comments:2,
      date: new Date().toLocaleDateString(),
      isOpen:true,
      isFavourite:false
      },
      {
        title:'Mongo DB',
        comments:5,
        date: new Date().toLocaleDateString(),
        isOpen:true,
        isFavourite:false
      },
      ]
  }
}
fav(index){
  console.log(index);
  const { data } = this.state;
  
    data[index].isFavourite = !data[index].isFavourite;
    this.setState({
    data,
  })
}
open(index){
  const { isOpen } = this.state;

  this.setState({
    isOpen:false,
  })
}

render() {
const { data } = this.state;
    return (
      <div className="App">
          <ul>
            {data.map((item,index)=>{
              return <div className="list-div" key={`${item}${index}`} >
                      <i class="fas fa-heart" onClick={  ()=>{this.open(index)}  }></i>
                      <li className="list">{item.title}</li>
                      <li>{item.comments}</li>
                      <li>{item.date}</li>
                      <button onClick={  ()=>{this.fav(index)}  }> 
                      { data[index].isFavourite ? 'Favourite' : 'Un Favourite'}
                      </button>
                      <hr/>
              </div>
            })}
          </ul>
      </div>
    );
  }
}

export default App;


