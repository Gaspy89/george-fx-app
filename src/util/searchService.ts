export const inputValidator = (filterText: string): string => {
    return filterText.toUpperCase();
}

export const currencyCodeContainsFilterText = (validatedFilterText: string, currencyCode: string): boolean => {
    return currencyCode.includes(validatedFilterText);
}

export const currencyNameContainsFilterText = (validatedFilterText: string, currencyName: string): boolean => {
    return currencyName.toUpperCase().includes(validatedFilterText);
}

export const currencyItemContainsFilterText = (validatedFilterText: string, currencyCode: string, currencyName: string) => {
    return currencyCodeContainsFilterText(validatedFilterText, currencyCode) || currencyNameContainsFilterText(validatedFilterText, currencyName);
}