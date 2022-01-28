import './Portfolio.css';

import React, { Component } from 'react';
import axios from "axios";
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
const { REACT_APP_SERVER_URL } = process.env;


class EditPortfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
    }

    handlePortfolioNumber(e) {
        e.preventDefault();
        this.setState({
            portfolioNumber: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const portfolioData = {
            portfolioNumber: this.state.portfolioNumber,
        }

        axios.delete(`${REACT_APP_SERVER_URL}/users/delete-portfolio`, portfolioData)
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
                    <input type="text" name="portfolioPiece" value={this.state.portfolioNumber} onChange={this.handlePortfolioNumber.bind(this)} placeholder="Portfolio Piece Number" id="commentBox" />
                    <br />
                    <button type="submit" id="comment">Submit</button>
                </form>
            </div>
        );
    }
}

export default EditPortfolio;