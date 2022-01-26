import React, { Component } from 'react';
import './Store.css';

class Store extends Component {

    constructor(props) {
        super(props);
        this.state = {
            $5Buy: '$5 Buy',
            $10Buy: '$10 Buy',
            $50Buy: '$50 Buy',
            $100Buy: '$100 Buy',
            $250Buy: '$250 Buy',
            $500Buy: '$500 Buy',
        }
    }

    handle5Buying() {
        this.setState({
            $5Buy: 'Thank You for Buying'
        });
    }
    handle10Buying() {
        this.setState({
            $10Buy: 'Thank You for Buying'
        });
    }
    handle50Buying() {
        this.setState({
            $50Buy: 'Thank You for Buying'
        });
    }
    handle100Buying() {
        this.setState({
            $100Buy: 'Thank You for Buying'
        });
    }
    handle250Buying() {
        this.setState({
            $250Buy: 'Thank You for Buying'
        });
    }
    handle500Buying() {
        this.setState({
            $500Buy: 'Thank You for Buying'
        });
    }

    render() {
        return (
            <div>
                <section className="hero bg-dark is-small">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <p className="title" id="storeTitle" >Muses Center Store</p>
                        </div>
                    </div>
                </section>
                <div className="box cta" id="storeBox">
                    <p className="has-text-centered">
                        <span className="tag is-primary">New</span> See all Art Related Merchandise for Sale.
                    </p>
                </div>
                <section className="container">
                    <div className="columns features">
                        <div className="column is-4">
                            <div className="card is-shady">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img
                                            src="https://i.imgur.com/6DHX0zB.jpeg"
                                            alt="Placeholder image"
                                            className="modal-button"
                                            data-target="modal-image2"
                                        />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <h4>Muses Object #1</h4>
                                        <p>
                                            Art Piece
                                        </p>
                                        <span
                                            className="button is-link modal-button" onClick={this.handle5Buying.bind(this)}
                                            data-target="modal-image2"
                                        >
                                            {this.state.$5Buy}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="card is-shady">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img
                                            src="https://i.imgur.com/6DHX0zB.jpeg"
                                            alt="Placeholder image"
                                        />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <h4>Muses Object #2</h4>
                                        <p>
                                            Art Piece
                                        </p>
                                        <span
                                            className="button is-link modal-button" onClick={this.handle10Buying.bind(this)}
                                            data-target="modal-card"
                                        >
                                            {this.state.$10Buy}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4 modal-button" data-target="modal-image">
                            <div className="card is-shady">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img
                                            src="https://i.imgur.com/6DHX0zB.jpeg"
                                            alt="Placeholder image"
                                        />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <h4>Muses Object #3</h4>
                                        <p>
                                            Art Piece
                                        </p>
                                        <span
                                            className="button is-link modal-button" onClick={this.handle50Buying.bind(this)}
                                            data-target="modal-image"
                                        >
                                            {this.state.$50Buy}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container">
                    <div className="columns features">
                        <div className="column is-4">
                            <div className="card is-shady">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img
                                            src="https://i.imgur.com/6DHX0zB.jpeg"
                                            alt="Placeholder image"
                                            className="modal-button"
                                            data-target="modal-image2"
                                        />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <h4>Muses Object #4</h4>
                                        <p>
                                            Art Piece
                                        </p>
                                        <span
                                            className="button is-link modal-button" onClick={this.handle100Buying.bind(this)}
                                            data-target="modal-image2"
                                        >
                                            {this.state.$100Buy}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="card is-shady">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img
                                            src="https://i.imgur.com/6DHX0zB.jpeg"
                                            alt="Placeholder image"
                                        />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <h4>Muses Object #5</h4>
                                        <p>
                                            Art Piece
                                        </p>
                                        <span
                                            className="button is-link modal-button" onClick={this.handle250Buying.bind(this)}
                                            data-target="modal-card"
                                        >
                                            {this.state.$250Buy}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4 modal-button" data-target="modal-image">
                            <div className="card is-shady">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img
                                            src="https://i.imgur.com/6DHX0zB.jpeg"
                                            alt="Placeholder image"
                                        />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <h4>Muses Object #6</h4>
                                        <p>
                                            Art Piece
                                        </p>
                                        <span
                                            className="button is-link modal-button" onClick={this.handle500Buying.bind(this)}
                                            data-target="modal-image"
                                        >
                                            {this.state.$500Buy}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br /><br /><br /><br /><br /><br /><br />
            </div>
        );
    }
}

export default Store;