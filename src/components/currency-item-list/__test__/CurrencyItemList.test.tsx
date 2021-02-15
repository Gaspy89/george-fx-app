import {render, screen} from "@testing-library/react";
import CurrencyItemList from "../CurrencyItemList";
import {ValidCurrencyItem} from "../../../model/ValidCurrencyItem";

describe("CurrencyItemList", () => {
    const currencyItems: ValidCurrencyItem[] = [
        {currency: "FJD", nameI18N: "Fiji Dollar", exchangeRate: {middle: 2.2500000}, flagUrl: "/flags/fj.pgn"},
        {currency: "SCR", nameI18N: "Seychelles-Rupee", exchangeRate: {middle: 15.4746000}, flagUrl: "/flags/sc.png"},
        {currency: "HUF", nameI18N: "Hungarian Forint", exchangeRate: {middle: 320}, flagUrl: "/flags/hu.png"}
    ];

    it("Renders all ValidCurrency items from ValidCurrency items array if filterText is empty string", () => {
        render(<CurrencyItemList filterText={""} currencyItems={currencyItems}/>);

        expect(screen.getAllByRole("CurrencyItem")).toHaveLength(3);
    });

    it("Renders Hungarian Forint and Seychelles-Rupee if filterText is U", () => {
        render(<CurrencyItemList filterText={"U"} currencyItems={currencyItems}/>);

        expect(screen.getAllByRole("CurrencyItem")).toHaveLength(2);
    });
});