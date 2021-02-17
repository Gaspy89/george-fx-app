import {CurrencyItem} from "../model/CurrencyItem";
import {ValidCurrencyItem} from "../model/ValidCurrencyItem";

export const createValidCurrencyItems = (items: CurrencyItem[]): ValidCurrencyItem[] => {
    const validCurrencyItems: ValidCurrencyItem[] = [];
    items.filter(itemContainsCurrencyCodeCurrencyNameExchangeRate)
        .map((currencyItem) => {
            (currencyItem as ValidCurrencyItem).flagUrl = preparesFlagUrl((currencyItem.currency as string).toLowerCase());
            validCurrencyItems.push(currencyItem as ValidCurrencyItem);
        });
    return validCurrencyItems;
}

export const preparesFlagUrl = (url: string): string => {
    return "/flags/" + url.slice(0, -1) + ".png";
}

export const itemContainsCurrencyCodeCurrencyNameExchangeRate = (currencyItem: CurrencyItem): boolean => {
    return Boolean(currencyItem.currency) && Boolean(currencyItem.nameI18N) && Boolean(currencyItem.exchangeRate);
}

export default createValidCurrencyItems;