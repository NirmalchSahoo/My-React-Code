import './App.css';

import ClassClick from './components/ClassClick';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet';
import Inline from './components/Inline';
import Message from './components/Message';
import NameList from './components/NameList';
import ParentComponent from './components/ParentComponent';
import Styles from './components/Styles';
import UserGreeting from './components/UserGreeting';
import Welcome from './components/Welcome';
import Form from './components/Form';
// import { Greet } from './components/Greet';
// import './components/myStyle.css';
import styles from './components/myStyle.module.css';
import Lifecycle from './components/Lifecycle';
import UpdateLifecycleA from './components/UpdateLifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureCompo from './components/PureCompo';
import ParentCompo from './components/ParentCompo';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import ForwardRefsParentInput from './components/ForwardRefsParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterRendorProps from './components/CounterRendorProps';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider value={'Nirmal'}>
        <ComponentC></ComponentC>
      </UserProvider>
      {/* // using rendor props */}
      {/* <CounterRendorProps
        render={(count, incrementCount) => (
          <ClickCounterTwo
            count={count}
            incrementCount={incrementCount}
          ></ClickCounterTwo>
        )}
      ></CounterRendorProps> */}
      {/* // using direct function */}
      {/* <CounterRendorProps>
        {(count, incrementCount) => (
          <ClickCounterTwo
            count={count}
            incrementCount={incrementCount}
          ></ClickCounterTwo>
        )}
      </CounterRendorProps> */}
      {/* <CounterRendorProps
        render={(count, incrementCount) => (
          <HoverCounterTwo
            count={count}
            incrementCount={incrementCount}
          ></HoverCounterTwo>
        )}
      ></CounterRendorProps> */}
      {/* <CounterRendorProps>
        {(count, incrementCount) => (
          <HoverCounterTwo
            count={count}
            incrementCount={incrementCount}
          ></HoverCounterTwo>
        )}
      </CounterRendorProps> */}
      {/* <ClickCounterTwo></ClickCounterTwo>
      <HoverCounterTwo></HoverCounterTwo> */}
      {/* <User name="Nirmal"></User> */}
      {/* <User name={() => 'Nirmal'}></User> */}
      {/* <User render={(isLoggedIn) => (isLoggedIn ? 'Nirmal' : 'Guest')}></User> */}
      {/* <ClickCounter name="Nirmal"></ClickCounter> */}
      {/* <HoverCounter></HoverCounter> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
      </ErrorBoundary> */}
      {/* <PortalDemo></PortalDemo> */}
      {/* <ForwardRefsParentInput></ForwardRefsParentInput> */}
      {/* <FocusInput></FocusInput> */}
      {/* <RefsDemo></RefsDemo> */}
      {/* <ParentCompo></ParentCompo> */}
      {/* <Table></Table> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <UpdateLifecycleA></UpdateLifecycleA> */}
      {/* <Lifecycle></Lifecycle> */}
      {/* <Form></Form> */}
      {/* <NameList></NameList> */}
      {/* <Styles primary={true}></Styles> */}
      {/* <Inline></Inline>
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Nirmal" heroName="Bat man">
        <p>This is children props</p>
      </Greet>
      <Greet name="Bimal" heroName="Iron man">
        <button>Active</button>
      </Greet>
      <Greet name="Komal" heroName="Wonder woman"></Greet> */}
      {/*

      
      <Welcome name="Komal" heroName="Wonder woman"></Welcome>
      <Welcome name="Komal" heroName="Wonder woman"></Welcome>
      <Welcome name="Komal" heroName="Wonder woman"></Welcome> */}
      {/* <MyGreet></MyGreet> */}
      {/* <FunctionClick></FunctionClick>
      <ClassClick></ClassClick> */}
      {/* <EventBind></EventBind> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreeting></UserGreeting> */}
    </div>
  );
}

export default App;
