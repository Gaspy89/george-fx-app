import React, {useState, useEffect} from 'react';
import axios from "axios";
import {ValidCurrencyItem} from "../model/ValidCurrencyItem";
import createValidCurrencyItemsService from "../util/createValidCurrencyItemsService";

export const useDataFetchingService = () => {
    const [items, setItems] = useState<ValidCurrencyItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const url = "https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343";
    useEffect(() => {
        axios.get(url)
            .then(res => {
                const itemArray = res.data.fx;
                setItems(createValidCurrencyItemsService(itemArray));
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
            })

    }, []);
    return {items, isLoading};
}

export default useDataFetchingService;