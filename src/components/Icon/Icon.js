import React from "react";

const Icon = ({ url, icon_class }) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
        <i className={icon_class}></i>
    </a>
)

export default Icon;