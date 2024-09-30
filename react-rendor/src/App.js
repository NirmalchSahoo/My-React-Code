import logo from './logo.svg';
import './App.css';
import UseState from './components/UseState/UseState';
import UseReducer from './components/UseReducer/UseReducer';
import { ObjectUseState } from './components/ImmutableState/ObjectUseState';
import { ArrayUseState } from './components/ImmutableState/ArrayUseState';
import Parent from './components/ParentChild/Parent';
import ParentOne from './components/Optimization/ParentOne';
import { ChildOne } from './components/Optimization/ChildOne';
import { GrandParent } from './components/Optimization/GrandParent';
import ParentTwo from './components/Optimization/ParentTwo';

function App() {
  return (
    <div className="App">
      {/* <UseState></UseState> */}
      {/* <UseReducer></UseReducer> */}
      {/* <ObjectUseState></ObjectUseState> */}
      {/* <ArrayUseState></ArrayUseState> */}
      {/* <Parent></Parent> */}
      {/* <ParentOne>
        <ChildOne></ChildOne>
      </ParentOne> */}
      {/* <GrandParent></GrandParent> */}
      <ParentTwo></ParentTwo>
    </div>
  );
}

export default App;
