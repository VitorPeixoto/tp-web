import logo from './logo.svg';
import './index.css';
import context from './context';
import { Context } from '../../withContext';

function App() {
  return (
    <Context.Provider value={context}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/components/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Context.Provider>
  );
}

export default App;
