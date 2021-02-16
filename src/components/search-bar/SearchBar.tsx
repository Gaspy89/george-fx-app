import React from "react";

function SearchBar(props: { filterText: string; setFilterTextInUrlHash: (inputText: string) => void }) {
    const filterText = props.filterText;
    const setFilterTextInUrlHash = props.setFilterTextInUrlHash;
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
                            setFilterTextInUrlHash(e.target.value)
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;