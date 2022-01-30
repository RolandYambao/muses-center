import React, { Component } from 'react';

class PortfolioPiece extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="column is-4">
                <div className="card large">
                    <div className="card-image">
                        <figure className="image is-square">
                            <img src={this.props.pictureUrl} alt="Art Url" />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <img src="https://i.imgur.com/6DHX0zB.jpeg" alt="Golden Eye Logo" />
                                </figure>
                            </div>
                            <div className="media">
                                <p className="title is-4 no-padding">{this.props.title}</p>
                            </div>
                        </div>
                        <div className="content">
                            {this.props.description}
                            <div className="background-icon"><span className="icon-twitter"></span></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PortfolioPiece;