import * as React from "react";
import "./Blog.css";
import { Entry, Footer } from "../../containers";

export interface BlogProps {
    content: any; // TODO: define this contract
}

export const Blog = (props: BlogProps) => {
    const { content } = props;

    // Sort the entries by id so the newest is at the top
    const sortedEntries = content.entries.sort((a, b) => b.id - a.id);

    return (
        <section>
            {sortedEntries.map(({ date, title, contentBlocks, tags, author }) => (
                <Entry
                    author={author}
                    key={date}
                    date={date}
                    title={title}
                    contentBlocks={contentBlocks}
                    tags={tags}
                />
            ))}
            <Footer />
        </section>
    );
};
