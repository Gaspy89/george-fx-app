import {ExchangeRate} from "./ExchangeRate";

export type CurrencyItem = {
    flagUrl?: string;
    currency?: string;
    nameI18N?: string;
    exchangeRate?: ExchangeRate;
}