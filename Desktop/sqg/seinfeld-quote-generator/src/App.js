import React from 'react';
import './App.css';
import Seinfeld from './components/Seinfeld';
import Navbar from './components/Navbar';
class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Navbar />
        <Seinfeld />
      </div>
    );
  }
}

export default App;
