import React, { Component } from 'react';

export default class NewEventForm extends Component {

    state = { eventTitle: '' };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onEventCreate({
            title: this.state.eventTitle.trim(),
            start: new Date(),
        });
        this.setState({ eventTitle: '' });
    };

    render() {
        return <form className="new-event" onSubmit={this.handleSubmit} >
            <input
                type="text"
                placeholder="Type to add new events today"
                value={this.state.eventTitle}
                onChange={e => this.setState({ eventTitle: e.target.value })}
            />
        </form>;
    }
}
