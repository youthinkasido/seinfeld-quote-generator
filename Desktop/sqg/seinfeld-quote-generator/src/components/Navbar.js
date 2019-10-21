import React, {Component} from 'react';
import './Navbar.css';
export default class Navbar extends Component {
  render () {
    return (
      <div className="nav-container">
        <ul className="nav-bar">
          <li className="nav-item">Fan site</li>
          <li className="nav-item">Media</li>
          <li className="nav-item">Press</li>
          <li className="nav-item">About</li>
        </ul>
      </div>
    );
  }
}
