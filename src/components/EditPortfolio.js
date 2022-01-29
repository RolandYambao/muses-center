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
            portfolioNumber: this.state.portfolioNumber,
            pictureUrl: this.state.pictureUrl,
            title: this.state.title,
            description: this.state.description,
        }

        axios.put(`${REACT_APP_SERVER_URL}/users/edit-portfolio`, portfolioData)
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
                                <input type="text" name="portfolioPiece" value={this.state.portfolioNumber} onChange={this.handlePortfolioNumber.bind(this)} placeholder="Portfolio Piece Index( Min: 1)" id="portfolioInputBox" />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <input type="text" name="picture" value={this.state.pictureUrl} onChange={this.handlePicture.bind(this)} placeholder="URL" id="portfolioInputBox" />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <input type="text" name="title" value={this.state.title} onChange={this.handleTitle.bind(this)} placeholder="Title" id="portfolioInputBox" />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <input type="text" name="decription" value={this.state.description} onChange={this.handleDescription.bind(this)} placeholder="Description" id="portfolioInputBox" />
                            </div>
                        </div>
                        <button
                            type="submit" className="button is-block is-info is-medium" id="portfolioInput">
                            Edit Portfolio Piece
                        </button>
                    </form>
                </div>
                {/* </div> */}
            </div>
        );
    }
}

export default EditPortfolio;