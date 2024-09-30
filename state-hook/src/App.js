import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterWithArray from './components/HookCounterWithArray';
import ClassCounterOne from './components/ClassCounterOne';
import UseEffectHookOne from './components/UseEffectHookOne';
import ClassCounterTwo from './components/ClassCounterTwo';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalCounter from './components/IntervalCounter';
import IntervalHookCounter from './components/IntervalHookCounter';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter></ClassCounter> */}
      {/* <HookCounter></HookCounter> */}
      {/* <HookCounterTwo></HookCounterTwo> */}
      {/* <HookCounterThree></HookCounterThree> */}
      {/* <HookCounterWithArray> </HookCounterWithArray> */}
      {/* <ClassCounterOne></ClassCounterOne> */}
      {/* <UseEffectHookOne></UseEffectHookOne> */}
      {/* <ClassCounterTwo></ClassCounterTwo> */}
      {/* <ClassMouse></ClassMouse> */}
      {/* <HookMouse></HookMouse> */}
      {/* <MouseContainer></MouseContainer> */}
      <IntervalCounter></IntervalCounter>
      <IntervalHookCounter someprop="Hello world"></IntervalHookCounter>
    </div>
  );
}

export default App;
