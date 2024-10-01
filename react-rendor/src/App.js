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
import ParentThree from './components/IncorrectOptimization/ParentThree';
import ParentFour from './components/IncorrectOptimization/ParentFour';
import { Contextparent } from './components/Context/Contextparent';

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
      {/* <ParentTwo></ParentTwo> */}
      {/* <ParentThree></ParentThree> */}
      {/* <ParentFour></ParentFour> */}
      <Contextparent></Contextparent>
    </div>
  );
}

export default App;
