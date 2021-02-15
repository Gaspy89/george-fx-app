import {
    currencyNameContainsFilterText,
    currencyCodeContainsFilterText,
    currencyItemContainsFilterText,
    inputValidator
} from "../searchService";

describe("searchService", () => {
    describe("inputValidator", () => {
        it("Returns validated string by converting it to upper case", () => {
            const result = inputValidator("aaa");

            expect(result).toEqual("AAA");
        });
    });

    describe("currencyContainsFilterText", () => {
        it("Returns true when currency code contains filterText", () => {
            const result = currencyCodeContainsFilterText("HU", "HUF");

            expect(result).toEqual(true);
        });

        it("Returns false when currency code doesn't contain filterText", () => {
            const result = currencyCodeContainsFilterText("AT", "HUF");

            expect(result).toEqual(false);
        });
    });

    describe("countryCurrencyContainsFilterText", () => {
        it("Returns true when currency name filterText", () => {
            const result = currencyNameContainsFilterText("HUNG", "Hungarian Forint");

            expect(result).toEqual(true);
        });

        it("Returns false when currency name doesn't contain filterText", () => {
            const result = currencyNameContainsFilterText("J", "Hungarian Forint");

            expect(result).toEqual(false);
        });
    });

    describe("currencyItemContainsFilterText", () => {
        it("returns true if currencyCodeContainsFilterText returns true", () => {
            const result = currencyItemContainsFilterText("HU", "HUF", "J");

            expect(result).toEqual(true);
        });

        it("returns true if currencyNameContainsFilterText returns true", () => {
            const result = currencyItemContainsFilterText("HUNG", "AT", "Hungarian Forint");

            expect(result).toEqual(true);
        });

        it("returns false when currencyCodeContainsFilterText returns false and currencyNameContainsFilterText returns false", () => {
            const result = currencyItemContainsFilterText("DD", "AT", "Hungarian Forint");

            expect(result).toEqual(false);
        });
    });
});