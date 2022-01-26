import React, { Component } from 'react';
import './Gallery.css';

class Gallery extends Component {
    render() {
        return (
            <div>
                <div class="main1" id="galleyCenter">
                    <ul>
                        <li>
                            <div class="slidetitle">
                                <span>Eye</span>
                            </div>
                            <a href='#'>
                                <img src="https://i.imgur.com/6DHX0zB.jpeg" />
                            </a>
                        </li>
                        <li>
                            <div class="slidetitle">
                                <span>Eye</span>
                            </div>
                            <a href='#'>
                                <img src="https://i.imgur.com/6DHX0zB.jpeg" />
                            </a>
                        </li>
                        <li>
                            <div class="slidetitle">
                                <span>Eye</span>
                            </div>
                            <a href='#'>
                                <img src="https://i.imgur.com/6DHX0zB.jpeg" />
                            </a>
                        </li>
                        <li>
                            <div class="slidetitle">
                                <span>Eye</span>
                            </div>
                            <a href='#'>
                                <img src="https://i.imgur.com/6DHX0zB.jpeg" />
                            </a>
                        </li>
                        <li>
                            <div class="slidetitle">
                                <span>Eye</span>
                            </div>
                            <a href='#'>
                                <img src="https://i.imgur.com/6DHX0zB.jpeg" />
                            </a>
                        </li>
                        <li>
                            <div class="slidetitle">
                                <span>Eye</span>
                            </div>
                            <a href='#'>
                                <img src="https://i.imgur.com/6DHX0zB.jpeg" />
                            </a>
                        </li>
                    </ul>
                </div>

                {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                
                <div class="main1" id="galleyCenter">
                    <ul>
                        <li>
                            <div class="slidetitle">
                                <span>Eye</span>
                            </div>
                            <a href='#'>
                                <img src="https://i.imgur.com/6DHX0zB.jpeg" />
                            </a>
                        </li>
                        <li>
                            <div class="slidetitle">
                                <span>Eye</span>
                            </div>
                            <a href='#'>
                                <img src="https://i.imgur.com/6DHX0zB.jpeg" />
                            </a>
                        </li>
                        <li>
                            <div class="slidetitle">
                                <span>Eye</span>
                            </div>
                            <a href='#'>
                                <img src="https://i.imgur.com/6DHX0zB.jpeg" />
                            </a>
                        </li>
                        <li>
                            <div class="slidetitle">
                                <span>Eye</span>
                            </div>
                            <a href='#'>
                                <img src="https://i.imgur.com/6DHX0zB.jpeg" />
                            </a>
                        </li>
                        <li>
                            <div class="slidetitle">
                                <span>Eye</span>
                            </div>
                            <a href='#'>
                                <img src="https://i.imgur.com/6DHX0zB.jpeg" />
                            </a>
                        </li>
                        <li>
                            <div class="slidetitle">
                                <span>Eye</span>
                            </div>
                            <a href='#'>
                                <img src="https://i.imgur.com/6DHX0zB.jpeg" />
                            </a>
                        </li>
                    </ul>
                </div> */}
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <form method="POST" action="/comment" id="commentSection">
                    <input type="text" name="content" placeholder="Your Anonymous Critique Here" id="commentBox" />
                    <input type="submit" id="comment" />
                </form>
                <br /><br /><br /><br /><br />
            </div>
        );
    }
}

export default Gallery;