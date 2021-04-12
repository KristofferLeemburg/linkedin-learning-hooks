import React, {useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const initialState ={
  message:"hii"
}

function reducer(state, action){
  switch(action.type){
    case "yell":
      return{
        message: `HEY! I JUST SAID ${state.message}`
      }
      case "whisper":
        return{
          message: `excuse me, I JUST SAID ${state.message}`
        }
  }
}

function App(){
  const [state, dispatch] = useReducer(
    reducer , 
    initialState
    )

 return( <>
<p>Message: {state.message}</p>
<button onClick={() => dispatch({ type: "yell"})}>Yell</button>
<button onClick={() => dispatch({ type: "whisper"})}>whisper</button>

</>)
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

