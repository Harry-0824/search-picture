import React from "react";


const Search = ({search, setInput, input}) => {

    const inputHandler = (e) => {
        setInput(e.target.value);
    };
    const searchHandler = () => {
        if (!input || input.trim() === "") {
            alert("請輸入搜尋內容");
        } else {
            search();
        }
    };
    
    //搜尋功能
    return(
        <div className="search">
            <input className="input" onChange={inputHandler} type="text" value={input} />
            <button onClick={searchHandler}>Search</button>
        </div>
    );
};


export default Search;