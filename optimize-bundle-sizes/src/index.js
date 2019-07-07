import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Profile from './Profile';
import Calendar from './Calendar'

const App = () => (
    <Router>
        <header>
            Bundle optimizer portal
            <nav>
                <ul>
                    <li>
                        <Link to="/calendar">Calendar</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <Route path="/calendar" component={Calendar} />
        <Route exact path="/" component={Profile} />
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'))
