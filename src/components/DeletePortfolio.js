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
            redirect: true,
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
        console.log("PORTFOLIO DATA", { data: { portfolioData } })
        axios.delete(`${REACT_APP_SERVER_URL}/users/delete-portfolio`, { data: { portfolioData } })
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
        window.location.reload();
    };

    render() {
        return (
            <div>
                <div className="box">
                    <figure className="avatar">
                        <img src="https://i.imgur.com/smPpriY.png" id="portfolioLogo" alt="Minus Sign" />
                    </figure>
                    <form id="portfolioInputSection" onSubmit={this.handleSubmit.bind(this)}>
                        <div className="field">
                            <div className="control">
                                <input type="text" name="portfolioPiece" value={this.state.portfolioNumber} onChange={this.handlePortfolioNumber.bind(this)} placeholder="Portfolio Piece Index( Min: 1)" id="portfolioInputBoxDelete" />
                            </div>
                        </div>
                        <button
                            type="submit" className="button is-block is-danger is-medium" id="portfolioInput">
                            Delete Portfolio Piece
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditPortfolio;