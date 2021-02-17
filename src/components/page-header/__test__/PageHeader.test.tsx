import {render} from "@testing-library/react";
import {PageHeader} from "../PageHeader";
import React from "react";

describe("PageHeader", () => {
    it("Renders PageHeader component", () => {
        const { getByText } = render(<PageHeader/>);

        expect(getByText("GEORGE FE TEST")).toBeInTheDocument();
    });
});