import React from 'react';
import ReactDOM from 'react-dom';
import FilterableCurrencyTable from "./components/filterable-currency-table/FilterableCurrencyTable";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

ReactDOM.render(
    <React.StrictMode>
        <FilterableCurrencyTable/>
    </React.StrictMode>,
    document.getElementById('root')
);

