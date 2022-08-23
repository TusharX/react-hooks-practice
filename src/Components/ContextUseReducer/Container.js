import React, { useReducer } from 'react';
import ComponentA from './ComponentA';
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

const initialState = 0;

const reducer = (state, action) => {

  switch(action){

    case "Increment":
      return state + 1;

    case "Decrement":
      return state -1;

    case "Reset":
      return initialState;

    default:
      return state;
  }
}

export const CounterContext = React.createContext();

function Container() {


  const [ count , dispatch  ] = useReducer(reducer, initialState);
  

  return (
    <div>
      <p>Context and UseReducer Combined</p>
      <CounterContext.Provider value={{ counter : count, dispatchCount : dispatch }}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CounterContext.Provider>
    </div>
  )
}

export default Container;