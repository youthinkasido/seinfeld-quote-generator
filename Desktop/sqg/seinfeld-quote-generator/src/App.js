import React from 'react';
import {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      quotes: ""
    }
  }

  componentDidMount(){
     $.ajax({
    url:"https://seinfeld-quotes.herokuapp.com/quotes",
    dataType: "JSON",
    method:"GET"
    }).then(function(res){
      this.setState({
        quotes: Object.values(res)
      }, ()=>{
        console.log(this.state)
      })
    })
  }


  render(){
    console.log(this.state)
    return (
      <div className="App">
        'hi'
      </div>
    )
  }
}

export default App;

 



// $.ajax({
//     url:"https://seinfeld-quotes.herokuapp.com/quotes",
//     dataType:"JSON",
//     method:"GET"
//     }).then(function(res){
//         console.log(res)
// });
