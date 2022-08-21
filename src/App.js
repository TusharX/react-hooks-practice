import './App.css';
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
        <DataFetching />
      </header>
    </div>
  );
}

export default App;
