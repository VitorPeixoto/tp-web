import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Cabecalho from 'components/Cabecalho';
import Categorias from 'components/Categorias';
import './index.css';
import context from './context';
import { Context } from '../../withContext';

function App() {
  return (
    <Context.Provider value={context}>
      <div className="App">
        <Cabecalho />
        <Router>
          <Switch>
            <Route path="/">
              <Categorias />
            </Route>
          </Switch>
        </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
