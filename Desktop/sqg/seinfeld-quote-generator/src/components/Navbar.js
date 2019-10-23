import React, {Component} from 'react';
import './Navbar.css';
export default class Navbar extends Component {
  render () {
    return (
      <div className="nav-bar-container">
        <ul className="nav-bar">

          <img src="http://tny.im/jNM/" />
          <p>
            {/* Seinfeld is an American television sitcom that originally aired on NBC from July 5, 1989, to May 14, 1998. It lasted nine seasons, and is now in syndication. It was created by Larry David and Jerry Seinfeld, the latter starring as a fictionalized version... */}
          </p>

          <li><a href="#">Home</a></li>
          <li><a href="#">Quotes</a></li>
          <li><a href="#">Purchase</a></li>
        </ul>
      </div>
    );
  }
}
