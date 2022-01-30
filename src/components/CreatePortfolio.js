import './Portfolio.css';

import React, { Component } from 'react';
import axios from "axios";
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
const { REACT_APP_SERVER_URL } = process.env;


class CreatePortfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: true,
        };
    }

    handlePicture(e) {
        e.preventDefault();
        this.setState({
            pictureUrl: e.target.value,
        })
    }

    handleTitle(e) {
        e.preventDefault();
        this.setState({
            title: e.target.value,
        })
    }

    handleDescription(e) {
        e.preventDefault();
        this.setState({
            description: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const portfolioData = {
            pictureUrl: this.state.pictureUrl,
            title: this.state.title,
            description: this.state.description,
        }

        axios.post(`${REACT_APP_SERVER_URL}/users/new-portfolio`, portfolioData)
            .then(response => {
                const { token } = response.data;
                // save token to localStorage
                localStorage.setItem('jwtToken', token);
                // set token to headers
                setAuthToken(token);
                // decode token to get the user data
                const decoded = jwt_decode(token);
                // set the current user
                this.props.nowCurrentUser(decoded); // funnction passed down as props.
                window.location.reload();
            })
            .catch(error => {
                alert('No Portfolio Piece Posted');
            });
    };

    render() {
        return (
            <div>
                <div className="box">
                    <figure className="avatar">
                        <img src="https://i.imgur.com/dg762qN.png" id="portfolioLogo" alt="Plus Sign" />
                    </figure>
                    <form id="portfolioInputSection" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="field">
                            <div className="control">
                                <input type="text" name="picture" value={this.state.pictureUrl} onChange={this.handlePicture.bind(this)} placeholder="URL" id="portfolioInputBoxAdd" />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <input type="text" name="title" value={this.state.title} onChange={this.handleTitle.bind(this)} placeholder="Title" id="portfolioInputBoxAdd" />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <input type="text" name="decription" value={this.state.description} onChange={this.handleDescription.bind(this)} placeholder="Description" id="portfolioInputBoxAdd" />
                            </div>
                        </div>
                        <button
                            type="submit" className="button is-block is-primary is-medium" id="portfolioInput" onClick="window.location.reload(false)">
                            Add Portfolio Piece
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreatePortfolio;