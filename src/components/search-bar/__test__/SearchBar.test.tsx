import {render, fireEvent, screen} from "@testing-library/react";
import SearchBar from "../SearchBar";

describe("SearchBar", () => {
    it("Calls the provided setFilterText function on input change", () => {
        const setFilterText = jest.fn()

        render(<SearchBar filterText={"text"} setFilterText={setFilterText}/>);
        fireEvent.change(screen.getByRole("searchInput"), {target: {value: "newText"}});

        expect(setFilterText).toHaveBeenCalledWith("newText");
    });
});