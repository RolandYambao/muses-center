import React, { Component } from 'react';
import './Comment.css'

class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div id="boxComment">
                    <h1 id="critique"><span>*</span> {this.props.content}</h1>
                    <br />
                </div>
            </div>
        );
    }
}

export default Comment;