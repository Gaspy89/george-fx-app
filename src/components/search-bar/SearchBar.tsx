import React from "react";

function SearchBar(props: { filterText: string; setFilterText: (filterText: string) => void }) {
    const filterText = props.filterText;
    const setFilterText = props.setFilterText;
    return (
        <div className={"text-white bg-secondary sticky-top container"}>
            <div className={"row align-items-center"}>
                <div className={"col-1"}>Search:</div>
                <div className={"col-11"}>
                    <input
                        role={"searchInput"}
                        value={filterText}
                        type={"text"}
                        onChange={(e) => {
                            setFilterText(e.target.value)
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;