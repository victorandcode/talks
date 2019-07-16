import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Profile from './Profile';
import Calendar from './Calendar'

const App = () => (
    <Router>
        <header>
            <h1>Bundle optimizer portal 📦</h1>
            <nav>
                <ul className='nav-links'>
                    <li className='nav-link'>
                        <Link to="/">👤 Profile</Link>
                    </li>
                    <li className='nav-link'>
                        <Link to="/calendar">📅 Calendar</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <Route path="/calendar" component={Calendar} />
        <Route exact path="/" component={Profile} />
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'))
