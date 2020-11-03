import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Room from './pages/Room';
import Session from './pages/Session';
import Timeslot from './pages/Timeslot';
import Speaker from './pages/Speaker';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Session} />
          <Route path='/timeslot' component={Timeslot} />
          <Route path='/speaker' component={Speaker} />
          <Route path='/room' component={Room} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
