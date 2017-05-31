import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Events } from '../api/collections.js';
import Calendar from './Calendar.jsx';
import AppHeader from './AppHeader.jsx';

class App extends Component {

    updateEventDate = (event) => Events.update(event._id, {
        $set: { start: event.start.toDate() }
    });

    removeEvent = event => Events.remove(event._id);

    createEvent = event => Events.insert(event);

    render() {
        return (
            <div className="container">
                <AppHeader onEventCreate={this.createEvent} />
                <Calendar events={this.props.events}
                          onEventChangeDate={this.updateEventDate}
                          onEventClick={this.removeEvent} />
            </div>
        );
    }
}

export default createContainer(() => ({
    events: Events.find({}).fetch()
}), App);
