import logo from './logo.svg';
import React from 'react';
import './App.css';
import ComponentC from './components/ComponentC';
import FunctionalComponentC from './components/FunctionalComponentC';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    // <div className="App">
    //   <UserContext.Provider value={'Nirmal'}>
    //     <ChannelContext.Provider value={'Sahoo'}>
    //       <ComponentC></ComponentC>
    //     </ChannelContext.Provider>
    //   </UserContext.Provider>
    // </div>
    <div className="App">
      <UserContext.Provider value={'Nirmal'}>
        <ChannelContext.Provider value={'Sahoo'}>
          <FunctionalComponentC></FunctionalComponentC>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
