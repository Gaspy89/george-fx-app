import {ExchangeRate} from "./ExchangeRate";

export type ValidCurrencyItem = {
    flagUrl: string;
    currency: string;
    nameI18N: string;
    exchangeRate: ExchangeRate;
}