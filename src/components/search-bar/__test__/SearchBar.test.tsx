import {render, fireEvent, screen} from "@testing-library/react";
import SearchBar from "../SearchBar";
import React from "react";

describe("SearchBar", () => {
    it("SearchBar text in component is rendered", () => {
        const setFilterTextInUrlHash = jest.fn()

        const { getByText } = render(<SearchBar filterText={"text"} setFilterTextInUrlHash={setFilterTextInUrlHash}/>);

        expect(getByText("Search:")).toBeInTheDocument();
    })

    it("Input element in component is rendered", () => {
        const setFilterTextInUrlHash = jest.fn()

        render(<SearchBar filterText={"text"} setFilterTextInUrlHash={setFilterTextInUrlHash}/>);

        expect(screen.getByRole("searchInput")).toBeInTheDocument();
    })

    it("Calls the provided setFilterTextInUrlHash function on input change", () => {
        const setFilterTextInUrlHash = jest.fn()

        render(<SearchBar filterText={"text"} setFilterTextInUrlHash={setFilterTextInUrlHash}/>);
        fireEvent.change(screen.getByRole("searchInput"), {target: {value: "newText"}});

        expect(setFilterTextInUrlHash).toHaveBeenCalledWith("newText");
    });
});