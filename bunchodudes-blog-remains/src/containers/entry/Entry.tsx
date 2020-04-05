import * as React from "react";
import { ContentBlock, Tag, ContentBlockProps } from "../../components";
import "./Entry.css";

export interface EntryProps {
    title: string;
    author: string;
    date: string;
    contentBlocks: ContentBlockProps[];
    tags: string[];
}

export const Entry = (props: EntryProps) => {
    const { title, date, contentBlocks, tags, author } = props;

    return (
        <section className="entry">
            <section className="date_and_title_container">
                <h4>{title}</h4>&nbsp;-&nbsp;<h4>{author}</h4>&nbsp;-&nbsp;
                <h4>{date}</h4>
            </section>
            {contentBlocks.map(({ image, imageDescription, text }) => (
                <ContentBlock
                    key={`${title}_${date}_${image}}`}
                    image={image}
                    imageDescription={imageDescription}
                    text={text}
                />
            ))}
            <br />
            <section className="tags_container">
                {tags.map(tag => (
                    <Tag tag={tag} key={tag} />
                ))}
            </section>
        </section>
    );
};
