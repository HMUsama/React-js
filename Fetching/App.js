import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";
const PARAM_PAGE = "page=";

class App extends Component {
  constructor() {
    super();
    this.state = {
        data: [],
        text: '',
        searchedKeywords: [],
        pageNum: 0,
        pageination: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
    this.flag = false;
  }

  search() {
    let { text, pageNum, searchedKeywords } = this.state;
    !!searchedKeywords.length ? searchedKeywords.map((datata) => {
      
          this.setState({
             
          })
    }) :
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${text}&&${PARAM_PAGE}${pageNum}`)
      .then(data => data.json())
      .then(res => {
        searchedKeywords.push({
          text: res.hits
        })
        this.setState({
          data: res.hits,
          searchedKeywords
        })
      })

  }
  // componentDidMount() {
  //   document.addEventListener('scroll', event => {
  //     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.flag) {
  //       console.log(this.fetchMore())
  //       this.flag = true;
  //        this.fetchMore()  
  //     }
  // });
  // }

  fetchMore(index) {
    let { text, pageNum, data } = this.state;
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${text}&&${PARAM_PAGE}${index}`) //for infinite scroll write ++pageNum after PARAM_PAGE in fetch URL
      .then(data => data.json())
      .then(res => {
        // let updatedData = [...data, ...res.hits];
        this.setState({
        data: res.hits,// for infinite scroll write updatedData
        pageNum
      }, ()=>{
        this.flag = false
      })
      
    })
  }

  render() {
    const { data, pageination, text } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br /><br />

        <input type="text" onChange={(e) => {
          this.setState({
            text: e.target.value
          })
        }} placeholder="Search Here" value={text} />

        <button onClick={_ => this.search()}>Search</button>
        <div>
          <ul>
            {
              data.map(result => {
                return <li>{result.title}</li>
              }) 
            }       
          </ul>
          {!!data.length && pageination.map((number, index) => {
            return <button onClick={() => this.fetchMore(index)}>{number}</button>
          })
          }
        </div>
      </div>
    );
  }
}

export default App;
