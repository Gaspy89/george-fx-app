import {ValidCurrencyItem} from "../../model/ValidCurrencyItem";
import ReactImageFallback from "react-image-fallback";

function CurrencyItem(props: ValidCurrencyItem) {
    const flagUrl = props.flagUrl;
    const currencyCode = props.currency;
    const currencyName = props.nameI18N;
    const exchangeRate = props.exchangeRate.middle

    return (
        <div className={"row border border-dark mt-2 py-2"} role={"CurrencyItem"}>
            <div className={"col-3 my-auto"}>
                <ReactImageFallback src={flagUrl} fallbackImage={"/flags/fallback.png"}/>
            </div>
            <div className={"col-3 my-auto"}>
                {currencyCode}
            </div>
            <div className={"col-3 my-auto"}>
                {currencyName}
            </div>
            <div className={"col-3 my-auto"}>
                EUR = {exchangeRate.toFixed(2)}
            </div>
        </div>
    );
}

export default CurrencyItem;