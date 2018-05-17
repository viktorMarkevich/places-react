import React, { Component } from 'react';

class Authorization extends Component {
    render() {
        return (
            <h1>Displaying weather for city {this.props.zip}</h1>
        );
    }
}

export default Authorization;