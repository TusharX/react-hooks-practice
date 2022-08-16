import './App.css';
import CounterWithClasses from './Components/CounterWithClasses';
import CounterWithHooks from './Components/CounterWithHooks';
import HooksArray from './Components/HooksArray';
import ClassCounterTitle from './Components/ClassCounterTitle';
import HookCounterTitle from './Components/HookCounterTitle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>React Hooks Practice</h2>
        {/* <CounterWithClasses /> */}
        {/* <CounterWithHooks /> */}
        {/* <HooksArray /> */}
        {/* <ClassCounterTitle /> */}
        <HookCounterTitle />
      </header>
    </div>
  );
}

export default App;
