import { render, getByTestId, getByText } from "@testing-library/react";
import * as React from "react";
import { Entry } from "./Entry";

describe("<Entry />", () => {
    const entryProps = {
        title: "Mock Entry title",
        date: "Mock Entry date",
        author: "Mock Entry author",
        contentBlocks: [
            {
                image: "mockImage1",
                imageDescription: "mockImageDescription1",
                text: "mockText1"
            },
            {
                image: "mockImage2",
                imageDescription: "mockImageDescription2",
                text: "mockText2"
            }
        ],
        tags: ["tag1", "tag2"]
    };

    it("correct title", () => {
        const { getByText } = render(<Entry {...entryProps} />);
        const titleElement = getByText("Mock Entry title");
        expect(titleElement).toBeDefined();
    });

    it("correct Author", () => {
        const { getByText } = render(<Entry {...entryProps} />);
        const authorElement = getByText("Mock Entry author");
        expect(authorElement).toBeDefined();
    });

    it("renders the correct number of content blocks", () => {
        const { getByText } = render(<Entry {...entryProps} />);
        const contentBlock1 = getByText("mockText1");
        const contentBlock2 = getByText("mockText2");

        expect(contentBlock1).toBeDefined();
        expect(contentBlock2).toBeDefined();
    });

    it("renders the tags container", () => {
        const { getByText } = render(<Entry {...entryProps} />);
        const tagsContainer = getByText("tag1");
        expect(tagsContainer).toBeDefined();
    });
});
