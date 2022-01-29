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
                {/* <div class="column is-one-third"> */}
                <div className="box">
                    <figure className="avatar">
                        <img src="https://i.imgur.com/6DHX0zB.jpeg" id="portfolioLogo" alt="Golden Eye Logo" />
                    </figure>
                    <form >
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
                {/* </div> */}
            </div>
        );
    }
}

export default EditPortfolio;