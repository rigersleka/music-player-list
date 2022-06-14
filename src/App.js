import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddMusic from "./components/AddMusic";
import MusicsList from "./components/MusicsList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/musics" className="navbar-brand">
          rLeka
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/musics"} className="nav-link">
            Musics
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <h2>Add a Song</h2>
        <Switch>
          <Route exact path={["/", "/musics"]} component={MusicsList} />
          <Route exact path="/add" component={AddMusic} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
