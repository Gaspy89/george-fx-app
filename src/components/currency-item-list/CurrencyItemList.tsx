import {ValidCurrencyItem} from "../../model/ValidCurrencyItem";
import CurrencyItem from "../currency-item/CurrencyItem";
import {currencyItemContainsFilterText, inputValidator} from "../../util/searchService";

function CurrencyItemList(props: { filterText: string; currencyItems: ValidCurrencyItem[]; }) {
    const filterText = props.filterText;
    let currencyItems = props.currencyItems;

    if (filterText !== "") {
        currencyItems = currencyItems.filter(item => currencyItemContainsFilterText(inputValidator(filterText), item.currency, item.nameI18N));
    }

    return (
        <div className={"container"}>
            {
                currencyItems.map(item => {
                    return <CurrencyItem
                        key={item.currency}
                        flagUrl={item.flagUrl}
                        currency={item.currency}
                        nameI18N={item.nameI18N}
                        exchangeRate={item.exchangeRate}
                    />;
                })
            }
        </div>
    );
}

export default CurrencyItemList;