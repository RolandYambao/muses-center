import './Profile.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  const { handleLogout, user } = props;
  const { id, name, email, exp } = user;
  const expirationTime = new Date(exp * 1000);
  let currentTime = Date.now();

  // make a condition that compares exp and current time
  if (currentTime >= expirationTime) {
    handleLogout();
    alert('Session has ended. Please login to continue.');
  }

  const userData = user ?
    (<div>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h1 id="profileTitle">Your Muses Center Profile</h1>
              <div className="box" id="profileForm">
                <figure className="avatar">
                  <img src="https://i.imgur.com/6DHX0zB.jpeg" style={{ width: '150px', height: '150px' }} alt="Profile Pic" />
                </figure>
                <form>
                  <div className="content">
                    <table className="table-profile">
                      <tr>
                        <td>Name: {name}</td>
                      </tr>
                      <tr>
                        <td>Email: {email}</td>
                      </tr>
                      <tr>
                        <td>Account ID: {id}</td>
                      </tr>
                    </table>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>) : <h2>Loading...</h2>

  const errorDiv = () => {
    return (
      <div className="text-center pt-4">
        <h3>Please <Link to="/login">login</Link> to view this page</h3>
      </div>
    );
  };

  return (
    <div className="text-center pt-4">
      {user ? userData : errorDiv()}
    </div>
  );

}

export default Profile;