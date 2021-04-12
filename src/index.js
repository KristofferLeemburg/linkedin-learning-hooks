import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const [, , third] = ["Irene","Kristoffer","Piet"]

console.log(third)


ReactDOM.render(
  <React.StrictMode>
    <App name="hooks"/>
  </React.StrictMode>,
  document.getElementById('root')
);

