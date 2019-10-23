import React, {Component} from 'react';
import $ from 'jquery';
import SeinfeldQuote from './SeinfeldQuote';
import './Seinfeld.css';
export default class Seinfeld extends Component {
  constructor (props) {
    super (props);
    this.state = {
      quotes: null,
    };
  }

  componentDidMount () {
    $.ajax ({
      url: 'https://seinfeld-quotes.herokuapp.com/quotes',
      dataType: 'JSON',
      method: 'GET',
    }).then (res => {
      this.setState ({quotes: Object.values (res.quotes)});
    });
  }

  render () {
    let filteredQuotes;
    let quotes;

    if (this.state.quotes) {
      filteredQuotes = this.state.quotes.filter (
        quote => quote.quote.length < 50
      );
      quotes = filteredQuotes.map (quote => {
        return (
          <div className="quotes">
            <ul className="quote-content">
              <div className="quote-text-container">
                <ul>
                  <li>
                    Author:{quote.author}
                  </li>
                  <li className="quote-text">
                    "{quote.quote}"{' '}
                  </li>
                  Season: {quote.season}

                  <li>
                    Episode: {quote.episode}
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        );
      });
    } else {
      return null;
    }
    console.log (quotes);
    return (
      <div className="quote-container">
        <div className="quotes">
          {quotes}
        </div>

      </div>
    );
  }
}
