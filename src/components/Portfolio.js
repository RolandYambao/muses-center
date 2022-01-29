import './Portfolio.css';

import React, { Component } from 'react';
import axios from "axios";
import PortfolioPiece from "./PortfolioPiece";
import CreatePortfolio from "./CreatePortfolio";
import EditPortfolio from "./EditPortfolio";
import DeletePortfolio from "./DeletePortfolio";
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

    componentDidMount() {
        let token = localStorage.getItem('jwtToken')  //grabs token 
        setAuthToken(token); //function to auth saved token (seprate JS file)
        axios.get(`${REACT_APP_SERVER_URL}/users/my-portfolio`,
            {
                header: { 'Access-Control-Allow-Origin': '*' }
            })
            .then((response) => {
                this.setState({
                    users: response.data.user.portfolio
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
                            <p className="title" id="storeTitle" >Your Personal Art Portfolio</p>
                        </div>
                    </div>
                </section>
                <div className="columns is-4">
                    <div className="column"><CreatePortfolio /></div>
                    <div className="column"><EditPortfolio /></div>
                    <div className="column"><DeletePortfolio /></div>
                </div>
                {this.displayPortfolio()}
            </div>
        );
    }
}

export default Portfolio;