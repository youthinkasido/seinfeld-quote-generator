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
    let quotes;

    if (this.state.quotes) {
      quotes = this.state.quotes.map (quote => {
        return (
          <div className="quote">
            <ul className="quote-content">
              <li>
                {quote.quote.length < 100
                  ? <img
                      className="thumb-nail"
                      src="https://www.tvinsider.com/wp-content/uploads/2015/07/Seinfeld-Kramer.jpg"
                    />
                  : null}

              </li>
              <li>
                {quote.quote.length < 100 ? `Author:` + quote.author : null}
              </li>
              <li className="quote-text">
                {quote.quote.length < 100 ? quote.quote : null}
              </li>
              {quote.quote.length < 100 ? `Season:` + quote.season : null}
              <li>
                {quote.quote.length < 100 ? `Episode:` + quote.episode : null}
              </li>
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
