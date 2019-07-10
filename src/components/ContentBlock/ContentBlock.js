import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./ContentBlock.css";

const ContentBlock = ({ image, text }) => {

    return (
        <section className="contentBlock">
            <LazyLoadImage 
                src={image}
                width="100%"
                effect="blur"/>
            <p className="contentBlock_text">{text}</p>
        </section>
    )
}

export default ContentBlock;