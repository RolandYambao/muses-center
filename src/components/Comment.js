import React, { Component } from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.content
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.content}</h1>
            </div>
        );
    }
}

export default Comment;