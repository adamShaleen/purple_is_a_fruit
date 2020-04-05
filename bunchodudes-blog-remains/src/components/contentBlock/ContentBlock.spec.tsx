import { render } from "@testing-library/react";
import * as React from "react";
import { ContentBlock } from "./ContentBlock";

describe("<ContentBlock />", () => {
    it("renders the ContentBlock with the correct image and text", () => {
        const contentBlockProps = {
            image: "www.doesntmatter.com",
            imageDescription: "Mock ContentBlock imageDescription",
            text: "Mock ContentBlock text"
        };

        const { getByText, getByAltText } = render(
            <ContentBlock {...contentBlockProps} />
        );

        const ContentBlockImage = getByAltText(
            "Mock ContentBlock imageDescription"
        );
        const ContentBlockParagraph = getByText("Mock ContentBlock text");

        expect(ContentBlockImage).toBeDefined();
        expect(ContentBlockParagraph).toBeDefined();
    });
});
