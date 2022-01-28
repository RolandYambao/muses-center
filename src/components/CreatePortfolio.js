import './Portfolio.css';

import React, { Component } from 'react';
import axios from "axios";
import PortfolioPiece from "./PortfolioPiece";
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
const { REACT_APP_SERVER_URL } = process.env;


class CreatePortfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
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
            })
            .catch(error => {
                alert('No Portfolio Piece Posted');
            });
    };

    render() {
        return (
            <div>
                <form id="commentSection" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" name="picture" value={this.state.pictureUrl} onChange={this.handlePicture.bind(this)} placeholder="Profile Piece Picture URL" id="commentBox" />
                    <input type="text" name="title" value={this.state.title} onChange={this.handleTitle.bind(this)} placeholder="Portfolio Piece Title" id="commentBox" />
                    <input type="text" name="decription" value={this.state.description} onChange={this.handleDescription.bind(this)} placeholder="Portfolio Piece Description" id="commentBox" />
                    <button type="submit" id="comment">Submit</button>
                </form>
            </div>
        );
    }
}

export default CreatePortfolio;