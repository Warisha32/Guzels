// src/reusable/image-gallery.component.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../Styles/main.scss"
import landing from "../Assets/images/landing.png"

class ImageGallaryComponent extends React.Component {
    render() {
        return (
            <>
                <Carousel
                  autoPlay
        infiniteLoop
        interval={2000}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        className="carousel-banner">
                    <div   id="banner-container">
                        <img src={landing} alt="LandingImage" />
                        <div id="banner-text">My Classic Still 1</div>
                    </div>
                    <div   id="banner-container">
                        <img src={landing}  alt="LandingImage" />
                        <p className="legend">My Classic Still 2</p>
                    </div>
                    <div  id="banner-container">
                        <img src={landing}  alt="LandingImage"/>
                        <p className="legend">My Classic Still 3</p>
                    </div>
                </Carousel>
            </>
        )
    };
}

export default ImageGallaryComponent;