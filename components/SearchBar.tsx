"use client";
import { useState } from "react";

import { SearchManufacturer } from "./";

const SearchBar = () => {
    const [manufaturer, setManufacturer] = useState("");
    const handleSearch = () => { }
    return (
        <>
            <form className='searchbar' onSubmit={handleSearch}>
                <div className="searchbar__items">
                    <SearchManufacturer
                    manufacturer={manufaturer}
                    setManufacturer={setManufacturer}
                    />
                </div>
            </form>
        </>
    )
}

export default SearchBar
