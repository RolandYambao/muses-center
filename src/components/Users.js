import React, { Component } from 'react';

class Users extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="column is-4">
                <h1 id="artistInfo">Name: {this.props.name}</h1>
                <h1 id="artistInfo">Email: {this.props.email}</h1>
            </div>
        );
    }
}

export default Users;