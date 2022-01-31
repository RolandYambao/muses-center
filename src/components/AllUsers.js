import './Portfolio.css';

import React, { Component } from 'react';
import axios from "axios";
import Users from "./Users.js";
import setAuthToken from '../utils/setAuthToken';
const { REACT_APP_SERVER_URL } = process.env;

class AllUsers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        let token = localStorage.getItem('jwtToken')  //grabs token 
        setAuthToken(token); //function to auth saved token (seprate JS file)
        axios.get(`${REACT_APP_SERVER_URL}/users/all-users`,
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

    displayUsers() {
        const displayUsers = this.state.users.map((a, idx) => {
            return (
                <Users key={idx} name={a.name} email={a.email} />
            )
        });
        return displayUsers;
    }

    render() {
        return (
            <div>
                <section className="hero bg-dark is-small">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <p className="title" id="storeTitle" >All Users to the Muses Center</p>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div className="section">
                        <div className="row columns is-multiline">
                            {this.displayUsers()}
                        </div>
                    </div>
                    <br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br />
                </div>
            </div>
        );
    }
}

export default AllUsers;