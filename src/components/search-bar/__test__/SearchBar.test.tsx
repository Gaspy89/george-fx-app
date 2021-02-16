import {render, fireEvent, screen} from "@testing-library/react";
import SearchBar from "../SearchBar";

describe("SearchBar", () => {
    it("Calls the provided setFilterTextInUrlHash function on input change", () => {
        const setFilterTextInUrlHash = jest.fn()

        render(<SearchBar filterText={"text"} setFilterTextInUrlHash={setFilterTextInUrlHash}/>);
        fireEvent.change(screen.getByRole("searchInput"), {target: {value: "newText"}});

        expect(setFilterTextInUrlHash).toHaveBeenCalledWith("newText");
    });
});