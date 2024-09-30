import React, { useReducer } from 'react';
import './App.css';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import Componentc from './components/Componentc';

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        Count - {count}
        {/* <Counter1></Counter1> */}
        {/* <Counter2></Counter2> */}
        {/* <Counter3></Counter3> */}
        <ComponentA></ComponentA>
        <ComponentB></ComponentB>
        <Componentc></Componentc>
      </div>
    </CountContext.Provider>
  );
}

export default App;
