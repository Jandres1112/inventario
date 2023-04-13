import logo from './logo.svg';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
  );
}

export default App;*/
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {estadoview} from './componentes/estado/estadoview';
import {Inventarioview} from './componentes/inventarios/Inventarioview';
import {marcaview} from './componentes/Marca/marcaview';
import {tipoview} from './componentes/tipos/tipoview';
import { Headers } from './componentes/ui/Headers';
import {usuarioview} from './componentes/usuarios/usuarioview';
import { InventarioUpdate } from './componentes/inventarios/InventarioUpdate';



const App = () => {
    return  <Router>
      <Headers/>
      <Switch>
        <Route exact path='/estado' component={estadoview} />
        <Route exact path='/' component={Inventarioview}/>
        <Route exact path='/Marca' component={marcaview}/>
        <Route  exact path='/tipos' component={tipoview} />
        <Route exact path='/usuarios' component={usuarioview}/>
        <Route exact path='/inventarios/edit/:id}' component={InventarioUpdate}></Route>
        <Redirect to='/' />
      </Switch>

    </Router>
    
}

export {
    App
}
