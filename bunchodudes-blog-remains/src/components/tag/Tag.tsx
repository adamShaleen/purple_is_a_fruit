import * as React from "react";

export interface TagProps {
    tag: string;
}

export const Tag = (props: TagProps) => {
    const { tag } = props;
    return <span key={tag}>{tag}&nbsp;</span>;
};
