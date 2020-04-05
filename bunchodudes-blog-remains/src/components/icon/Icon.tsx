import * as React from "react";

export interface IconProps {
    url: string;
    title: string;
}

export const Icon = (props: IconProps) => {
    const { url, title } = props;
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
        </a>
    );
};
