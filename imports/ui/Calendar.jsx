import React, { Component } from 'react';
import $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar/dist/fullcalendar.css';

export default class Calendar extends Component {

    render() {
        return <div ref={node => this.node = $(node)}></div>;
    }

    componentDidMount() {
        this.node.fullCalendar({
            editable: true,
            eventDrop: event => {
                this.props.onEventChangeDate(event);
            },
            eventClick: event => {
                this.props.onEventClick(event);
            }
        });
    }

    componentDidUpdate() {
        this.node.fullCalendar('removeEvents');
        this.node.fullCalendar('renderEvents', this.props.events, true);
    }

    componentWillUnmount() {
        if (this.node != null) {
            this.node.fullCalendar('destroy');
        }
    }
}
