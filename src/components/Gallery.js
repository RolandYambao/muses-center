import './Gallery.css';

import React, { Component } from 'react';
import axios from "axios";
import Comment from "./Comment";
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
const { REACT_APP_SERVER_URL } = process.env;


class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    handleComment(e) {
        e.preventDefault();
        this.setState({
            content: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const commentData = {
            content: this.state.content,
        }

        axios.post(`${REACT_APP_SERVER_URL}/comments`, commentData)
            .then(response => {
               window.location.reload();
            })
            .catch(error => {
                alert('No Comment Posted');
            });
    };

    componentDidMount() {
        axios.get(`${REACT_APP_SERVER_URL}/comments`)
            .then((response) => {
                this.setState({
                    data: response.data
                });
            })
            .catch((error) => {
                console.log('ERROR', error)
            });
    }

    displayComments() {
        const displayComments = this.state.data.map((a, idx) => {
            return (
                <Comment key={idx} content={a.content} />
            )
        });
        return displayComments;
    }

    render() {
        return (
            <div>
                <div class="slider">
                    <ul>
                        <h1 id="galleryTitle">Muses Exhibit</h1>
                        <br />
                        <li id="no-js-slider-1" class="slide">
                            <img src="https://i.imgur.com/6DHX0zB.jpeg" class="galleryImage" alt="Placeholder" />
                            <a class="prev" href="#no-js-slider-10">prev</a>
                            <a class="next" href="#no-js-slider-2">next</a>
                        </li>
                        <li id="no-js-slider-2" class="slide">
                            <img src="https://i.imgur.com/G5btH1u.jpeg" class="galleryImage" alt="Placeholder" />
                            <a class="prev" href="#no-js-slider-1">prev</a>
                            <a class="next" href="#no-js-slider-3">next</a>
                        </li>
                        <li id="no-js-slider-3" class="slide">
                            <img src="https://i.imgur.com/Jssc0Oc.jpeg" class="galleryImage" alt="Placeholder" />
                            <a class="prev" href="#no-js-slider-2">prev</a>
                            <a class="next" href="#no-js-slider-4">next</a>
                        </li>
                        <li id="no-js-slider-4" class="slide">
                            <img src="https://i.imgur.com/p49Y6Yp.jpeg" class="galleryImage" alt="Placeholder" />
                            <a class="prev" href="#no-js-slider-3">prev</a>
                            <a class="next" href="#no-js-slider-5">next</a>
                        </li>
                        <li id="no-js-slider-5" class="slide">
                            <img src="https://i.imgur.com/qCPxIrx.jpeg" class="galleryImage" alt="Placeholder" />
                            <a class="prev" href="#no-js-slider-4">prev</a>
                            <a class="next" href="#no-js-slider-6">next</a>
                        </li>
                        <li id="no-js-slider-6" class="slide">
                            <img src="https://i.imgur.com/gxLmt4S.jpeg" class="galleryImage" alt="Placeholder" />
                            <a class="prev" href="#no-js-slider-5">prev</a>
                            <a class="next" href="#no-js-slider-7">next</a>
                        </li>
                        <li id="no-js-slider-7" class="slide">
                            <img src="https://i.imgur.com/O3DMsIb.jpeg" class="galleryImage" alt="Placeholder" />
                            <a class="prev" href="#no-js-slider-6">prev</a>
                            <a class="next" href="#no-js-slider-8">next</a>
                        </li>
                        <li id="no-js-slider-8" class="slide">
                            <img src="https://i.imgur.com/HhzHAgy.jpeg" class="galleryImage" alt="Placeholder" />
                            <a class="prev" href="#no-js-slider-7">prev</a>
                            <a class="next" href="#no-js-slider-9">next</a>
                        </li>
                        <li id="no-js-slider-9" class="slide">
                            <img src="https://i.imgur.com/RJPDuSY.jpeg" class="galleryImage" alt="Placeholder" />
                            <a class="prev" href="#no-js-slider-8">prev</a>
                            <a class="next" href="#no-js-slider-10">next</a>
                        </li>
                        <li id="no-js-slider-10" class="slide">
                            <img src="https://i.imgur.com/Kf1JGmf.jpeg" class="galleryImage" alt="Placeholder" />
                            <a class="prev" href="#no-js-slider-9">prev</a>
                            <a class="next" href="#no-js-slider-1">next</a>
                        </li>
                    </ul>
                </div>

                <br /><br /><br /><br /><br />
                <form id="commentSection" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" name="content" value={this.state.content} onChange={this.handleComment.bind(this)} placeholder="Your Anonymous Critique Here" id="commentBox" />
                    <button type="submit" id="comment">Submit</button>
                </form>
                <br />
                {this.displayComments()}
                <br /><br /><br /><br />
            </div>
        );
    }
}

export default Gallery;