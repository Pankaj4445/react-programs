import React, { useState} from 'react';
import ReactDOM from 'react-dom/client';



function Button(props){
 
  
  const handleClick = () => props.onIncrement();
  
  return <button onClick={handleClick}>+1</button>
}

function Display({message}){
    console.log(message)
  return <div>{message}</div>
}

function App(){
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => {
        setCounter(counter+1);
    }

    return (
        <>
            <Button onIncrement={incrementCounter}/>
            <Display message={counter} value="react" />
        </>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<App />
  
);
