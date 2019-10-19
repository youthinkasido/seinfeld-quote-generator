import React, { Component } from 'react'
import $ from 'jquery'
import SeinfeldQuote from './SeinfeldQuote'
export default class Seinfeld extends Component {
    constructor(props){
        super(props)
        this.state = {
            quotes: ""
        }
    }

    componentDidMount(){
        $.ajax({
            url:"https://seinfeld-quotes.herokuapp.com/quotes",
            dataType:"JSON",
            method: "GET"
        }).then((res) =>{
            this.setState({quotes:res}, ()=>{
            })
        })
  
   
    }

    
    render() {
        if (this.state.quotes){
        this.setState({ quotes:Object.values(this.state.quotes.quotes)
        .forEach(quote=>{console.log(quote)})})
        }

        return (
            <div>
      {Object.values(this.state.quotes)}
            </div>
        )


    }
}



