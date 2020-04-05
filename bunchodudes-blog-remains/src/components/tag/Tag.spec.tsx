import { render } from "@testing-library/react";
import * as React from "react";
import { Tag } from "./Tag";

describe("<Tag />", () => {
    it("renders the Tag with the correct text", () => {
        const tagProps = {
            tag: "Mock Tag tag"
        };

        const { getByText } = render(<Tag {...tagProps} />);

        const TagSpan = getByText("Mock Tag tag");

        expect(TagSpan).toBeDefined();
    });
});
