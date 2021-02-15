import {render, screen} from "@testing-library/react";
import {useDataFetchingService} from "../../../hooks/useDataFetchingService"
import FilterableCurrencyTable from "../FilterableCurrencyTable";

jest.mock("../../../hooks/useDataFetchingService");
const mockedDataFetchingService = useDataFetchingService as jest.Mock;

describe("FilterableCurrencyTable", () => {
   it("Renders a loading text when data is loading", () => {
       mockedDataFetchingService.mockReturnValueOnce({items: [] , isLoading: true});

       render(<FilterableCurrencyTable />);

       expect(screen.getAllByRole("loadingText")).toHaveLength(1);
   });

    it("Renders FilterableCurrencyTable when data is loaded", () => {
        mockedDataFetchingService.mockReturnValueOnce({items: [] , isLoading: false});

        render(<FilterableCurrencyTable />);

        expect(screen.getAllByRole("currencyContainer")).toHaveLength(1);
    });
});
