import React from 'react';
import './ContentBlock.css';

const ContentBlock = ({ image, text }) => {

    return (
        <div className="contentBlock">
            <img className="contentBlock_image" src={image} alt="" />
            <p className="contentBlock_text">{text}</p>
        </div>
    )
}

export default ContentBlock;