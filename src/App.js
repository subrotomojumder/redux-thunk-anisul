import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <h2 className='text-2xl mt-10'>This is my counter app</h2>
      <Counter></Counter>
      <Todos></Todos>
    </div>
  );
}

export default App;
