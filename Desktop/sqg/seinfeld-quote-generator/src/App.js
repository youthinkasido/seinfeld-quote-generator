
import  React from 'react'

import './App.css';
import Seinfeld from './components/Seinfeld';
class App extends React.Component{
  
  render(){
    return (
      <div className="App">
        <Seinfeld/>
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
