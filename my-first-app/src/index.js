import React from 'react';
import ReactDOM from 'react-dom/client';

// function Hello(){
//   const username = "Pankaj"
//   return <h1>Hello React APP {username} {40+5} {Math.random()}</h1>;

// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Hello />
    
// );

const root1 = document.getElementById('root1');
const root2 = ReactDOM.createRoot(document.getElementById('root2'));

setInterval(() => {
  root1.innerHTML = `
    <div>
      <h1>Hello JS</h1>
      <input />
      <pre>${new Date().toLocaleTimeString()}</pre>
    </div>`;

  root2.render(
    <div>
      <h1>Hello JS</h1>
      <input />
      <pre>{new Date().toLocaleTimeString()}</pre>
    </div>
  );
}, 1000);

