import React, { useState } from "react";


const Search = ({search, setInput}) => {
    const inputHandler = (e) => {
        setInput(e.target.value);
    };
    //搜尋功能
    return(
        <div className="search">
            <input className="input" onChange={inputHandler} type="text" />
            <button onClick={search}>Search</button>
        </div>
    );
};

export default Search;