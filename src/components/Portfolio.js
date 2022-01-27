import './Portfolio.css';

import React, { Component } from 'react';
import axios from "axios";
import Piece from "./Piece";
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
const { REACT_APP_SERVER_URL } = process.env;


class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
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

        axios.post(`${REACT_APP_SERVER_URL}/users`, portfolioData)
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

    componentDidMount() {
        let token = localStorage.getItem('jwtToken')  //grabs token 
        setAuthToken(token); //function to auth saved token (seprate JS file)
        axios.get(`${REACT_APP_SERVER_URL}/user`,
            {
                header: { 'Access-Control-Allow-Origin': '*' }
            })
            .then((response) => {
                this.setState({
                    users: response.data.users
                });
            })
            .catch((error) => {
                console.log('ERROR', error)
            });
    }

    displayPortfolio() {
        const displayPortfolio = this.state.users.map((a, idx) => {
            return (
                <Piece key={idx} pictureUrl={a.pictureUrl}
                    title={a.title} description={a.description} />
            )
        });
        return displayPortfolio;
    }

    render() {
        return (
            <div>
                <h1>Test</h1>
                {this.displayPortfolio()}
            </div>
        );
    }
}

export default Portfolio;