import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import MusicPlayerList from './components/MusicPlayerList';
import AddMusic from './components/AddMusic';

function App() {
  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <a href='/musics' className='navbar-brand'>
          rleka
        </a>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to={'/musics'} className='nav-link'>
              Music
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={'/add'} className='nav-link'>
              Add Music
            </Link>
          </li>
        </div>
      </nav>

      <div className='container mt-3'>
        <h2>Welcome to Music Player List</h2>
        <Switch>
          <Route exact path={['/', '/music']} component={MusicPlayerList} />
          <Route exact path='/add' component={AddMusic} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
