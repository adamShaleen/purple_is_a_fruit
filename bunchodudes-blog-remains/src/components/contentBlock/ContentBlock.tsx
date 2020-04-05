import * as React from "react";
import "./ContentBlock.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

export interface ContentBlockProps {
    image: string;
    imageDescription: string;
    text: string;
}

export const ContentBlock = (props: ContentBlockProps) => {
    const { image, imageDescription, text } = props;
    return (
        <section className="contentBlock">
            <LazyLoadImage
                src={image}
                width="100%"
                effect="blur"
                alt={imageDescription}
            />
            <p className="contentBlock_text">{text}</p>
        </section>
    );
};
