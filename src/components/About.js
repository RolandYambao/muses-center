import React from 'react';

const About = () => {
    return (
        <div>
            <section className="">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <p className="title" id="title">The Muses Center</p>
                        <p id="subtitle">The Muses Center is an online museum where art, chosen by the Museum Curator,
                            is presented to all. Users are free to comment anonymously about their sincere critiques to each piece.
                            Make sure all comments are approriate, bad comments will be removed, enjoy the Muses Center and 
                            all of its Radience. The Muses Center allows you to create your own Portfolio visible only to you and the Museum Curator.
                            If the Curator sees your work as possessing artistic vision, it may perhaps be exhibited in the gallery.</p>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="card-image">
                    <figure className="image">
                        <img
                            src="https://i.imgur.com/EPCjwSu.jpeg"
                            id="museumInterior"
                            alt="Museum Interior"
                        />
                    </figure>
                </div>
                <div className="card-content has-text-centered">
                    <h4>A Center of Art</h4>
                    <p>
                        A Place of Creation
                    </p>
                </div>
                <br /><br /><br /><br /><br />
            </section>
        </div>
    )
}

export default About;