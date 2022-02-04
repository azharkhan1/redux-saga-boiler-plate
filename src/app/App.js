import React from "react";
import {useSelector , useDispatch } from 'react-redux';
import {TODO} from "./actions/actionTypes"
function App() {
  const dispatch = useDispatch();

  const addTodo = ()=>{
    dispatch({
      type:TODO.REQUEST,
      payload:{
        data:"test"
      }
    })
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={()=>addTodo()}>test action</button>
      <h2>yes</h2>
    </div>
  );
}

export default App;
