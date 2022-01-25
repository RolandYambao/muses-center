import React from 'react';

const Welcome = () => {
    return (
        <div>
            <section className="hero2 is-medium">
                <div className="hero-body has-text-centered" id="title">
                    <h1 className="title is-2">Welcome to the Muses Center</h1>
                </div>
            </section>
            <section className="container">
                <div className="card-image">
                    <figure className="image">
                        <img
                            src="https://i.imgur.com/ylP1j27.jpeg"
                            id="museumBuilding"
                            alt="Museum Building"
                        />
                    </figure>
                </div>
                <div className="card-content has-text-centered">
                    <h4>Enjoy the Wonders of the Center</h4>
                    <p id="bottomWords">
                        Unique Art Pieces of all Stripes
                    </p>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </section>

        </div>
    )
}

export default Welcome;