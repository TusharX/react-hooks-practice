import './App.css';
import React from 'react';
import CounterWithClasses from './Components/CounterWithClasses';
import CounterWithHooks from './Components/CounterWithHooks';
import HooksArray from './Components/HooksArray';
import ClassCounterTitle from './Components/ClassCounterTitle';
import HookCounterTitle from './Components/HookCounterTitle';
import ClassMouse from './Components/ClassMouse';
import HookMouseContainer from './Components/HookMouseContainer';
import ClassIntervalTimer from './Components/ClassIntervalTimer';
import HooksIntervalTimer from './Components/HooksIntervalTimer';
import DataFetching from './Components/DataFetching';
import User from './Components/Context/User';
import UserUseContext from './Components/Context/UserUseContext';
import CounterOneUseReducer from './Components/Context/CounterOneUseR';
import Container from './Components/ContextUseReducer/Container';
import DataFetchOne from './Components/UseReducerFetching/DataFetchOne';
import DataFetchUseReducer from './Components/UseReducerFetching/DataFetchUseReducer';
import Parent from './Components/UseCallback/Parent';


export const UserContext = React.createContext();

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h2>React Hooks Practice</h2>
        {/* <CounterWithClasses /> */}
        {/* <CounterWithHooks /> */}
        {/* <HooksArray /> */}
        {/* <ClassCounterTitle /> */}
        {/* <HookCounterTitle /> */}
        {/* <ClassMouse /> */}
        {/* <HookMouseContainer /> */}
        {/* <ClassIntervalTimer /> */}
        {/* <HooksIntervalTimer /> */}
        {/* <DataFetching /> */}
        {/* <UserContext.Provider value="Tushar">
          <User />
          <UserUseContext/>
        </UserContext.Provider> */}

        {/* <CounterOneUseReducer/> */}

        {/* <Container /> */}
        {/* <DataFetchOne /> */}
        {/* <DataFetchUseReducer /> */}

        <Parent />
      </header>
    </div>
  );
}

export default App;
