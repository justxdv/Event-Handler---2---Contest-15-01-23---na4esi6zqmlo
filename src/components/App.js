import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleClick = (event) =>{
    // use console.log
const id=event.targt.id;
    console.log("Button id is:-",id);
  }

  // do not remove the two buttons or change their id
  return (
    <div id="main">
      <button id="button-a" onClick={this.handleClick}>Button A</button>
      <button id="button-b" onClick={this.handleClick}>Button B</button>
    </div>
  )
}


export default App;
