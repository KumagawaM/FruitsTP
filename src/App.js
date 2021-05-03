
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

import { Home } from './Home'
import { Fruits } from './Fruits';
import {Panier} from "./Panier";
import React from "react";
import {initialStateAdd} from "./tools/environments";

function App() {

  const [basket, setBasket] = React.useState(initialStateAdd);

  const basketUpdate = (baskets) => {
    setBasket(baskets);
  }

  const basketReset = (baskets) => {
    setBasket(baskets);
  }


  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home"> TPasMûre </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home"> Home </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/nos-fruits"> Nos Fruits </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/panier"> Panier </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/nos-fruits">
          <Fruits onBasketUpdate={basketUpdate} result={basket}  />
        </Route>
        <Route exact path="/panier">
          <Panier onResetBasket={basketReset} result={basket} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
