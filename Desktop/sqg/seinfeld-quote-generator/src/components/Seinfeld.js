import React, { Component } from 'react'
import $ from 'jquery'
import SeinfeldQuote from './SeinfeldQuote'
export default class Seinfeld extends Component {
    constructor(props){
        super(props)
        this.state = {
            quotes:null
        }
    }

    componentDidMount(){
        $.ajax({
            url:"https://seinfeld-quotes.herokuapp.com/quotes",
            dataType:"JSON",
            method: "GET"
        }).then((res) =>{
           this.setState({quotes:Object.values(res.quotes)})
        })
    }

    render() {
        let quotes;
        
        
        if (this.state.quotes){
            console.log(this.state.quotes)
             quotes = this.state.quotes.map(quote=>{
                return (
                <ul>
                    <li>{quote.quote}</li>
                    <li>{quote.author}</li>
                </ul>
                )
            })
        }else{
            return null;
        }
        console.log(quotes)
        return (
        <div className="quote-container">
            <div className="quotes">

            {quotes}
            </div>
            
            </div>
        )
        
    }
}



