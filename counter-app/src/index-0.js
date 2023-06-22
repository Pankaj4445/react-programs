import React, { useState} from 'react';
import ReactDOM from 'react-dom/client';

// function myfunction(){
//   console.log(Math.random());
  
// }

function Button(){
  // let counter = 0;
  // return <button onClick={myfunction}>{counter}</button>
  // return <button onClick={ () => console.log(Math.random() ) }>{counter}</button>
  // const setCounter = () => {
  //   counter = counter + 1;
  //   console.log(counter);
  // }

  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter+1);
  }
  console.log('render')
  return <button onClick={handleClick}>{counter}</button>
}

function Display(){
  return <div>...</div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<Button />
<Display />
</>  
  
);
