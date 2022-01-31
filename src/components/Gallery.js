import './Gallery.css';

import React, { Component } from 'react';
import axios from "axios";
import Comment from "./Comment";
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
                        <section className="hero bg-dark is-small">
                            <div className="hero-body">
                                <div className="container has-text-centered">
                                    <p className="title" id="storeTitle" >Muses Exhibit</p>
                                    <p id="storeTitle">Slide #1: "Priest" by Nikita Svechnikov</p>
                                    <p id="storeTitle">Slide #2: "Priest_1" by Bogdan Rezunenko</p>
                                    <p id="storeTitle">Slide #3: "MONSTER HIDE" by Martinez Sanchez Alex</p>
                                    <p id="storeTitle">Slide #4: "Alien spike" by J Hua</p>
                                    <p id="storeTitle">Slide #5: "High Priest" by Rory Björkman</p>
                                    <p id="storeTitle">Slide #6: "NECROMUNDA - Cult of the Redemption" by Ted Beargeon</p>
                                    <p id="storeTitle">Slide #7: "Belponton" by Wu Shenyou</p>
                                    <p id="storeTitle">Slide #8: "•Servitor Of The Outer Gods•" by Sergio Velandia</p>
                                    <p id="storeTitle">Slide #9: "Blessed priest" by Bogdan Rezunenko</p>
                                    <p id="storeTitle">Slide #10: "Temple of Utu - Polycount Throne Room Contest" by Martin Holmberg and Thiago Klafke</p>
                                </div>
                            </div>
                        </section>
                        <br />
                        <li id="no-js-slider-1" class="slide">
                            <img src="https://cdna.artstation.com/p/assets/images/images/041/997/530/medium/nikita-svechnikov-nikita-svechnikov-tbrender-viewport-029.jpg?1633305116" class="galleryImage" alt="Priest" />
                            <a class="prev" href="#no-js-slider-10">prev</a>
                            <a class="next" href="#no-js-slider-2">next</a>
                        </li>
                        <li id="no-js-slider-2" class="slide">
                            <img src="https://cdna.artstation.com/p/assets/images/images/003/530/442/medium/bogdan-rezunenko-.jpg?1474712922" class="galleryImage" alt="Priest_1" />
                            <a class="prev" href="#no-js-slider-1">prev</a>
                            <a class="next" href="#no-js-slider-3">next</a>
                        </li>
                        <li id="no-js-slider-3" class="slide">
                            <img src="https://cdnb.artstation.com/p/assets/images/images/037/797/493/medium/martinez-sanchez-alex-monster-hide-art-station-003.jpg?1621350358" class="galleryImage" alt="MONSTER HIDE" />
                            <a class="prev" href="#no-js-slider-2">prev</a>
                            <a class="next" href="#no-js-slider-4">next</a>
                        </li>
                        <li id="no-js-slider-4" class="slide">
                            <img src="https://cdnb.artstation.com/p/assets/images/images/000/301/953/medium/spike_on_tiberium_FINAL3.jpg?1416010672" class="galleryImage" alt="Alien spike" />
                            <a class="prev" href="#no-js-slider-3">prev</a>
                            <a class="next" href="#no-js-slider-5">next</a>
                        </li>
                        <li id="no-js-slider-5" class="slide">
                            <img src="https://cdna.artstation.com/p/assets/images/images/013/579/766/medium/rory-bjorkman-monks1.jpg?1540250082" class="galleryImage" alt="High Priest" />
                            <a class="prev" href="#no-js-slider-4">prev</a>
                            <a class="next" href="#no-js-slider-6">next</a>
                        </li>
                        <li id="no-js-slider-6" class="slide">
                            <img src="https://cdnb.artstation.com/p/assets/images/images/008/813/233/original/ted-beargeon-8df1aa48-3140-4837-a180-d78d9a3b1787.gif?1515469822" class="galleryImage" alt="NECROMUNDA - Cult of the Redemption" />
                            <a class="prev" href="#no-js-slider-5">prev</a>
                            <a class="next" href="#no-js-slider-7">next</a>
                        </li>
                        <li id="no-js-slider-7" class="slide">
                            <img src="https://cdnb.artstation.com/p/assets/images/images/028/370/191/medium/wu-shenyou-serious.jpg?1594273977" class="galleryImage" alt="Belponton" />
                            <a class="prev" href="#no-js-slider-6">prev</a>
                            <a class="next" href="#no-js-slider-8">next</a>
                        </li>
                        <li id="no-js-slider-8" class="slide">
                            <img src="https://cdna.artstation.com/p/assets/images/images/023/338/064/medium/sergio-velandia-01.jpg?1578896848" class="galleryImage" alt="•Servitor Of The Outer Gods•" />
                            <a class="prev" href="#no-js-slider-7">prev</a>
                            <a class="next" href="#no-js-slider-9">next</a>
                        </li>
                        <li id="no-js-slider-9" class="slide">
                            <img src="https://cdna.artstation.com/p/assets/images/images/008/864/588/medium/bogdan-rezunenko-2.jpg?1515764435" class="galleryImage" alt="Blessed priest" />
                            <a class="prev" href="#no-js-slider-8">prev</a>
                            <a class="next" href="#no-js-slider-10">next</a>
                        </li>
                        <li id="no-js-slider-10" class="slide">
                            <img src="https://cdna.artstation.com/p/assets/images/images/000/592/428/medium/thiago-klafke-templeofutu-final-01.jpg?1427840503" class="galleryImage" alt="Temple of Utu" />
                            <a class="prev" href="#no-js-slider-9">prev</a>
                            <a class="next" href="#no-js-slider-1">next</a>
                        </li>
                    </ul>
                </div>

                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
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