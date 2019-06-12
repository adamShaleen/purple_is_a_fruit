import React from 'react';

const Tag = ({ tag }) => {
    return (
        <span key={tag}>{tag}&nbsp;</span>
    )
}

export default Tag;