import React from "react";

const Icon = ({ url, icon_class }) => {
    return (
        <section>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <i className={icon_class}></i>
            </a>
        </section>
    )
}

export default Icon;