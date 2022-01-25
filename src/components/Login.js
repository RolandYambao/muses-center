import "./Login.css";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
const { REACT_APP_SERVER_URL } = process.env;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault(); // at the beginning of a submit function
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    axios.post(`${REACT_APP_SERVER_URL}/users/login`, userData)
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
        console.log('===> Error on login', error);
        alert('Either email or password is incorrect. Please try again');
      });
  };

  render() {
    if (this.props.user) return <Redirect to="/profile" />; // You can have them redirected to profile (your choice)

    return (
      <>
        <div className="container m-t-30 has-text-centered" id="login">
          <div className="column is-4 is-offset-4">
            <div className="box">
              <figure className="avatar">
                <img src="https://i.imgur.com/6DHX0zB.jpeg" style={{ width: '150px', height: '150px' }} alt="Golden Eye Logo" />
              </figure>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-medium m-t-15"
                      type="email"
                      placeholder="hello@example.com"
                      value={this.state.email}
                      onChange={this.handleEmail.bind(this)}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-medium"
                      type="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handlePassword.bind(this)}
                      required
                    />
                  </div>
                </div>
                <button
                  className="button is-block is-fullwidth is-info is-medium"
                  type="submit"
                >
                  Login
                </button>
              </form>
              <p>
                <br />
                <div className="container isloginlink">
                  <div className="row">
                    <a href="/signup">Sign Up</a>
                  </div>
                </div>
              </p>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </div>
        </div>
      </>
    );
  }
}

export default Login;
