import React, { Component } from 'react';
import './Gallery.css';

class Gallery extends Component {
    render() {
        return (
            <div>
                <div class="slider">
                    <ul>
                        <h1 id="galleryTitle">Muses Exhibit</h1>
                        <br />
                        <li id="no-js-slider-1" class="slide">
                            <img src="https://i.imgur.com/6DHX0zB.jpeg" class="galleryImage" />
                            <a class="prev" href="#no-js-slider-10">prev</a>
                            <a class="next" href="#no-js-slider-2">next</a>
                        </li>
                        <li id="no-js-slider-2" class="slide">
                            <img src="https://i.imgur.com/G5btH1u.jpeg" class="galleryImage" />
                            <a class="prev" href="#no-js-slider-1">prev</a>
                            <a class="next" href="#no-js-slider-3">next</a>
                        </li>
                        <li id="no-js-slider-3" class="slide">
                            <img src="https://i.imgur.com/Jssc0Oc.jpeg" class="galleryImage" />
                            <a class="prev" href="#no-js-slider-2">prev</a>
                            <a class="next" href="#no-js-slider-4">next</a>
                        </li>
                        <li id="no-js-slider-4" class="slide">
                            <img src="https://i.imgur.com/p49Y6Yp.jpeg" class="galleryImage" />
                            <a class="prev" href="#no-js-slider-3">prev</a>
                            <a class="next" href="#no-js-slider-5">next</a>
                        </li>
                        <li id="no-js-slider-5" class="slide">
                            <img src="https://i.imgur.com/qCPxIrx.jpeg" class="galleryImage" />
                            <a class="prev" href="#no-js-slider-4">prev</a>
                            <a class="next" href="#no-js-slider-6">next</a>
                        </li>
                        <li id="no-js-slider-6" class="slide">
                            <img src="https://i.imgur.com/gxLmt4S.jpeg" class="galleryImage" />
                            <a class="prev" href="#no-js-slider-5">prev</a>
                            <a class="next" href="#no-js-slider-7">next</a>
                        </li>
                        <li id="no-js-slider-7" class="slide">
                            <img src="https://i.imgur.com/O3DMsIb.jpeg" class="galleryImage" />
                            <a class="prev" href="#no-js-slider-6">prev</a>
                            <a class="next" href="#no-js-slider-8">next</a>
                        </li>
                        <li id="no-js-slider-8" class="slide">
                            <img src="https://i.imgur.com/HhzHAgy.jpeg" class="galleryImage" />
                            <a class="prev" href="#no-js-slider-7">prev</a>
                            <a class="next" href="#no-js-slider-9">next</a>
                        </li>
                        <li id="no-js-slider-9" class="slide">
                            <img src="https://i.imgur.com/RJPDuSY.jpeg" class="galleryImage" />
                            <a class="prev" href="#no-js-slider-8">prev</a>
                            <a class="next" href="#no-js-slider-10">next</a>
                        </li>
                        <li id="no-js-slider-10" class="slide">
                            <img src="https://i.imgur.com/Kf1JGmf.jpeg" class="galleryImage" />
                            <a class="prev" href="#no-js-slider-9">prev</a>
                            <a class="next" href="#no-js-slider-1">next</a>
                        </li>
                    </ul>
                </div>

                <br /><br /><br /><br /><br />
                <form method="POST" action="/comment" id="commentSection">
                    <input type="text" name="content" placeholder="Your Anonymous Critique Here" id="commentBox" />
                    <input type="submit" id="comment" />
                </form>
                <br /><br /><br /><br />
            </div>
        );
    }
}

export default Gallery;