import React, { Component } from 'react';
import './Store.css';

class Store extends Component {

    constructor(props) {
        super(props);
        this.state = {
            $100Buy: '$100 Buy',
            $500Buy: '$500 Buy',
            $1000Buy: '$1000 Buy',
        }
    }

    handle100Buying() {
        this.setState({
            $100Buy: 'Thanks for your Money'
        });
    }
    handle500Buying() {
        this.setState({
            $500Buy: 'Thanks for your Money'
        });
    }
    handle1000Buying() {
        this.setState({
            $1000Buy: 'Thanks for your Money'
        });
    }

    render() {
        return (
            <div>
                <section className="hero bg-dark is-small">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <p className="title">Muses Center Store</p>
                            <p className="subtitle">Welcome</p>
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
                                            src=""
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
                                            src=""
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
                                            className="button is-link modal-button" onClick={this.handle500Buying.bind(this)}
                                            data-target="modal-card"
                                        >
                                            {this.state.$500Buy}
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
                                            src=""
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
                                            className="button is-link modal-button" onClick={this.handle1000Buying.bind(this)}
                                            data-target="modal-image"
                                        >
                                            {this.state.$1000Buy}
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
                                            src=""
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
                                            src=""
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
                                            className="button is-link modal-button" onClick={this.handle500Buying.bind(this)}
                                            data-target="modal-card"
                                        >
                                            {this.state.$500Buy}
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
                                            src=""
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
                                            className="button is-link modal-button" onClick={this.handle1000Buying.bind(this)}
                                            data-target="modal-image"
                                        >
                                            {this.state.$1000Buy}
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