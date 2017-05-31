import React from 'react';
import NewEventForm from './NewEventForm';

export default props => (
    <header>
        <h1>FullCalendar Playground</h1>
        <NewEventForm onEventCreate={props.onEventCreate} />
    </header>
);
