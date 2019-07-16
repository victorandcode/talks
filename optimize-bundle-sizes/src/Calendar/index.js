import React, { useEffect, useState } from 'react';
import moment from 'moment';

import { fetchEvents } from './api';

const Calendar = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents.then(events => {
            const normalizedEvents = events.map(event => ({
                title: event.title,
                date: moment(event.date).format('MMM Do YY')
            }));
            setEvents(normalizedEvents);
        });
    }, []);

    return (
        <>
            <h2>Calendar</h2>
            <hr />
            {events.length ? <ul>
                {events.map(event => <li key={event.title} className='calendar-item'>{event.title} on <span className='calendar-item-time'>{event.date}</span></li>)}
            </ul>
            : <p>No events available</p> }
        </>
    );
}

export default Calendar;
