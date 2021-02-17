import {ExchangeRate} from "./ExchangeRate";

export type CurrencyItem = {
    currency?: string;
    nameI18N?: string;
    exchangeRate?: ExchangeRate;
}