import React, { Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Profile = lazy(() => import('./Profile'));
const Calendar = lazy(() => import('./Calendar'));

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
        <Suspense fallback={<div>Loading...</div>}>
            <Route path="/calendar" component={Calendar} />
            <Route exact path="/" component={Profile} />
        </Suspense>
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'))
