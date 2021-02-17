import {
    createValidCurrencyItems,
    preparesFlagUrl,
    itemContainsCurrencyCodeCurrencyNameExchangeRate
} from "../createValidCurrencyItemsService";
import {CurrencyItem} from "../../model/CurrencyItem";
import {ExchangeRate} from "../../model/ExchangeRate";

describe("createValidCurrencyItemsService", () => {
    describe("createValidCurrencyItems", () => {
        it("receives an array of CurrencyItems and returns an array of ValidCurrencyItems", () => {
            const exchangeRate: ExchangeRate = {middle: 320};
            const currencyItems: CurrencyItem [] = [
                {currency: "HUF", nameI18N: "Hungarian Forint", exchangeRate: exchangeRate},
                {currency: "HUF", nameI18N: "Hungarian Forint", exchangeRate: exchangeRate},
                {currency: "MXN", nameI18N: "Mexican Peso", exchangeRate: exchangeRate},
                {currency: "HUF"},
                {currency: "HUF", nameI18N: "Hungarian Forint"},
                {currency: "HUF", exchangeRate: exchangeRate},
                {currency: "MXN"},
                {currency: "MXN", nameI18N: "Mexican Peso"},
                {currency: "MXN", exchangeRate: exchangeRate},
            ]

            const result = createValidCurrencyItems(currencyItems);

            expect(result).toHaveLength(3);
        });
    });

    describe("prepareFlagUrl", () => {
        it("returns the flagUrl in xy.png format ", () => {
            const result = preparesFlagUrl("huf");

            expect(result).toEqual("/flags/hu.png")
        })
    });

    describe("itemContainsCurrencyCodeCurrencyNameExchangeRate", () => {
        it("Returns true if currency, nameI18N and exchangeRate exist", () => {
            const exchangeRate: ExchangeRate = {middle: 320};
            const item: CurrencyItem = {currency: "HUF", nameI18N: "Hungarian Forint", exchangeRate: exchangeRate}

            const result = itemContainsCurrencyCodeCurrencyNameExchangeRate(item);

            expect(result).toEqual(true);
        });

        it("Returns false if currency doesn't exist but nameI18N and exchangeRate exist", () => {
            const exchangeRate: ExchangeRate = {middle: 320};
            const item: CurrencyItem = {nameI18N: "Hungarian Forint", exchangeRate: exchangeRate};

            const result = itemContainsCurrencyCodeCurrencyNameExchangeRate(item);

            expect(result).toEqual(false);
        });

        it("Returns false if nameI18N doesn't exist but currency and exchangeRate exist", () => {
            const exchangeRate: ExchangeRate = {middle: 320};
            const item: CurrencyItem = {currency: "HUF", exchangeRate: exchangeRate};

            const result = itemContainsCurrencyCodeCurrencyNameExchangeRate(item);

            expect(result).toEqual(false);
        });

        it("Returns false if exchangeRate doesn't exist but currency and nameI18N exist", () => {
            const item: CurrencyItem = {currency: "HUF", nameI18N: "Hungarian Forint"};

            const result = itemContainsCurrencyCodeCurrencyNameExchangeRate(item);

            expect(result).toEqual(false);
        });
    });
});