import React, { Component } from 'react';

class PortfolioPiece extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="section">
                        <div className="row columns is-multiline">
                            <div v-for="card in cardData" key="card.id" className="column is-4">
                                <div className="card large">
                                    <div className="card-image">
                                        <figure className="image is-16by9">
                                            <img src={this.props.pictureUrl} alt="Sale Image" />
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-left">
                                                <figure className="image is-48x48">
                                                    <img src="https://i.imgur.com/6DHX0zB.jpeg" alt="Golden Eye Logo" />
                                                </figure>
                                            </div>
                                            <div className="media-content">
                                                <p className="title is-4 no-padding">Title: {this.props.title}</p>
                                            </div>
                                        </div>
                                        <div className="content">
                                            {this.props.description}
                                            <div className="background-icon"><span className="icon-twitter"></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PortfolioPiece;