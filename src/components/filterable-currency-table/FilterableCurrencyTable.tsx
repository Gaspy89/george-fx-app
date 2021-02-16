import React, {useEffect, useState} from 'react';
import {useDataFetchingService} from "../../hooks/useDataFetchingService";
import SearchBar from "../search-bar/SearchBar";
import CurrencyItemList from "../currency-item-list/CurrencyItemList"
import {PageHeader} from "../page-header/PageHeader";

function FilterableCurrencyTable() {
    const [filterText, setFilterText] = useState(window.location.hash.substr(1));
    const {items: currencyItems, isLoading} = useDataFetchingService();

    const setFilterTextInUrlHash = (inputText: string) => {
        window.location.hash = inputText;
    };

    useEffect(() => {
        window.onhashchange = () => setFilterText(window.location.hash.substr(1));
    }, []);

    if (isLoading) {
        return <div role={"loadingText"}>Loading...</div>;
    }
    return (
        <div className={"container"} role={"currencyContainer"}>
            <PageHeader/>
            <SearchBar filterText={filterText} setFilterTextInUrlHash={setFilterTextInUrlHash}/>
            <CurrencyItemList filterText={filterText} currencyItems={currencyItems}/>
        </div>
    );
}

export default FilterableCurrencyTable;