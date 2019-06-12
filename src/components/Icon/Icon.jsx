import React from 'react';

const Icon = ({ url, icon_class }) => {
    return (
        <div>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <i className={icon_class}></i>
            </a>
        </div>
    )
}

export default Icon;