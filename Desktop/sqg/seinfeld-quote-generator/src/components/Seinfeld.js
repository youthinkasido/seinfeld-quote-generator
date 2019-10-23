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
        quote => quote.quote.length < 100 && quote.quote.length > 45
      );
      quotes = filteredQuotes.map (quote => {
        return (
          <div className="quotes">
            <ul className="quote-content">
              <div className="quote-text-container">
                <ul>

                  <li className="quote-text">
                    "{quote.quote}"{' '}
                  </li>

                  <ul className="quote-season-author-and-episode-container">
                    <li className="quote-author">
                      —{quote.author}
                    </li>
                    <li className="quote-season">
                      (Season {quote.season}
                    </li>
                    <li className="quote-episode">
                      , Episode {quote.episode})
                    </li>
                  </ul>
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
