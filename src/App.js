import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Hogwarts, Houses, Subjects, Shops } from './views';
import './App.css';

function App() {
  return (
    // Menggunakan React-Router untuk link ke halaman lain
    <Router>
        <header className="App-header">
        <ul className="no-bullets">
            <li><Link to="/" className="link">Hogwarts</Link></li>
            <li><Link to="/houses" className="link">Houses</Link></li>
            <li><Link to="/subjects" className="link">Subjects</Link></li>
            <li><Link to="/shops" className="link">Shops</Link></li>
          </ul>
        </header>

        <Switch>
          <Route exact path="/">
            <Hogwarts/>
          </Route>
          <Route path="/houses">
            <Houses/>
          </Route>
          <Route path="/subjects">
            <Subjects/>
          </Route>
          <Route path="/shops">
            <Shops/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
