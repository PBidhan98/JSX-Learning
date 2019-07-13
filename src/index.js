//For getting content to show on the screen
//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a react Component
const App = () => {
  const buttonText = 'Click Me';
  return (
    <div>
      <label className="label" htmlFor="name">Enter Name:</label>
      <input id="name" type="text"/>
      <button style={{backgroundColor:'blue', color:'white'}}>{buttonText}</button>
    </div>
  );
};

//Take the react Component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
