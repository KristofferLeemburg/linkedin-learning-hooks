import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FaStar } from "react-icons/fa"

const createArray = (length) => [
  ...Array(length)
];

function Star({selected = false}){
  return <FaStar color={selected ? "red" : "gray"} />
}
function StarRating({totalStars}){
  return createArray(totalStars).map((n,i) => (
    <Star key={i} />
  )) 
}
function App() {
return <StarRating totalStars={10} />;
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

