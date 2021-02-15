import {CurrencyItem} from "../model/CurrencyItem";
import {ValidCurrencyItem} from "../model/ValidCurrencyItem";

export const createValidCurrencyItemsService = (items: CurrencyItem[]): ValidCurrencyItem[] => {
    const validItems: ValidCurrencyItem[] = [];
    items.filter(itemContainsCurrencyCodeCurrencyNameExchangeRate)
        .map((currencyItem) => {
            currencyItem.flagUrl = preparesFlagUrl((currencyItem.currency as string).toLowerCase());
            validItems.push(currencyItem as ValidCurrencyItem);
        });
    return validItems;
}

export const preparesFlagUrl = (url: string): string => {
    return "/flags/" + url?.slice(0, -1) + ".png";
}

export const itemContainsCurrencyCodeCurrencyNameExchangeRate = (currencyItem: CurrencyItem): boolean => {
    return Boolean(currencyItem.currency) && Boolean(currencyItem.nameI18N) && Boolean(currencyItem.exchangeRate);
}

export default createValidCurrencyItemsService;