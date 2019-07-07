import React, { useEffect, useState } from 'react';
import moment from 'moment';

import { fetchEvents } from './api';

const Calendar = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents.then(events => {
            const normalizedEvents = events.map(event => ({
                title: event.title,
                date: moment(event.date).format('LLLL')
            }));
            setEvents(normalizedEvents);
        });
    }, []);

    return (
        <>
            {events.length ? <ul>
                {events.map(event => <li key={event.title}>{event.title}</li>)}
            </ul>
            : <p>No events available</p> }
        </>
    );
}

export default Calendar;
