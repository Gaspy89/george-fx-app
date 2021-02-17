import {render, screen} from "@testing-library/react";
import CurrencyItem from "../CurrencyItem";
import {ExchangeRate} from "../../../model/ExchangeRate";

describe("CurrencyItem", () => {
    it("Renders CurrencyItem component with currency code, currency name and exchange rate", () => {
        const currencyCode: string = "HUF";
        const flagUrl: string = "/flags/hu.png";
        const currencyName: string = "Hungarian Forint";
        const exchangeRate: ExchangeRate = {middle: 320};

        const {getByText} = render(<CurrencyItem currency={currencyCode} flagUrl={flagUrl} nameI18N={currencyName}
                             exchangeRate={exchangeRate}/>);

        expect(getByText("HUF")).toBeInTheDocument();
        expect(getByText("Hungarian Forint")).toBeInTheDocument();
        expect(getByText("EUR = 320.00")).toBeInTheDocument();
    });
});