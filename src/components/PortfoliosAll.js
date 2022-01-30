import './Portfolio.css';

import React, { Component } from 'react';
import axios from "axios";
import PortfolioPiece from "./PortfolioPiece";
import setAuthToken from '../utils/setAuthToken';
const { REACT_APP_SERVER_URL } = process.env;


class PortfoliosAll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        let token = localStorage.getItem('jwtToken')  //grabs token 
        setAuthToken(token); //function to auth saved token (seprate JS file)
        axios.get(`${REACT_APP_SERVER_URL}/users/all-portfolios`,
            {
                header: { 'Access-Control-Allow-Origin': '*' }
            })
            .then((response) => {
                this.setState({
                    users: response.data.user
                });
            })
            .catch((error) => {
                console.log('ERROR', error)
            });
    }

    displayPortfolio() {
        const displayPortfolio = this.state.users.map((a, idx) => {
            return (
                <PortfolioPiece key={idx} pictureUrl={a.pictureUrl}
                    title={a.title} description={a.description} />
            )
        });
        return displayPortfolio;
    }

    render() {
        return (
            <div>
                <section className="hero bg-dark is-small">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <p className="title" id="storeTitle" >All Portfolio Pieces</p>
                            <p id="storeTitle">All Portfolio Pieces from all Artists of the Muses Center, all Artists Kept Anonymous</p>
                        </div>
                    </div>
                </section >
                <div className="container">
                    <div className="section">
                        <div className="row columns is-multiline">
                            {this.displayPortfolio()}
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default PortfoliosAll;