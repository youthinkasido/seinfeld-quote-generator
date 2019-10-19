import React, { Component } from 'react'

export default class SeinfeldQuote extends Component {
    constructor(props){
        super(props)
        this.state = {
            author: this.props.author
        }
    }
    render() {
        return (
            <div>
                {this.state.author}
            </div>
        )
    }
}
