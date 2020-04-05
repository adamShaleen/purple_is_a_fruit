import { render } from "@testing-library/react";
import * as React from "react";
import { Blog } from "./Blog";

describe("<Blog />", () => {
    const blogProps = {
        content: {
            entries: [
                {
                    id: 1,
                    date: "MockDate",
                    title: "MockTitle",
                    author: "MockAuthor",
                    contentBlocks: [
                        {
                            image: "www.doesntmatter.com",
                            imageDescription: "mockImageDescription",
                            text: "Mock blog content"
                        }
                    ],
                    tags: ["#tag1", "#tag2", "#tag3"]
                },
                {
                    id: 2,
                    date: "MockDate2",
                    title: "MockTitle2",
                    author: "MockAuthor2",
                    contentBlocks: [
                        {
                            image: "www.doesntmatter.com",
                            imageDescription: "mockImageDescription2",
                            text: "Mock blog content2"
                        }
                    ],
                    tags: ["#tag1", "#tag2", "#tag3"]
                }
            ]
        }
    };

    it("renders an Entry for each ContentBlock", () => {
        const { getByText, getAllByText } = render(<Blog {...blogProps} />);
        const EntryElement1 = getByText("Mock blog content");
        const EntryElement2 = getByText("Mock blog content2");
        const tagsContainers = getAllByText("#tag1");

        expect(EntryElement1).toBeDefined();
        expect(EntryElement2).toBeDefined();
        expect(tagsContainers).toBeDefined();
        expect(tagsContainers).toHaveLength(2);
    });
});
