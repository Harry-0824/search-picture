import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";
import axios from "axios";

const Homepage = () => {
    let [input, setInput] = useState("");
    let [data, setData] = useState(null);
    let [page, setPage] = useState(1);// 用於記錄加載的頁數
    let [currentSerach, setCurrentSerach] = useState("");
    const auth = "excPF40VcsfYMSGotKMIRgyAjIpxb6w9B4e57By40Nutn8CbZXEZjp0q";
    const initialURL = `https://api.pexels.com/v1/curated?page=1&per_page=15`;
    let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

    //使用url進行返回參數
    const search = async (url) => {
        let result = await axios.get(url, {
            headers: { Authorization: auth },
        });
        setData(result.data.photos);
        setCurrentSerach(input);
    };

    //更多圖片功能
    const morePicture = async () => {
        console.log("page state目前的值是" + page);
        let newURL;
        setPage(page + 1);
        if (currentSerach === ""){
            newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
        } else{
            newURL = `https://api.pexels.com/v1/search?query=${currentSerach}&per_page=15&page=${page + 1}`;
        }
        console.log("正在morepicture內部");
        console.log(newURL);
        let result = await axios.get(newURL, {
            headers: { Authorization: auth },
        });
        setData(data.concat(result.data.photos));
    };

    //網站預先呈現的圖片
    useEffect(() => {
        search(initialURL);
    }, []);

    return (
        <div style={{ minHeight: "100vh" }}>
            <Search search={() => {
                search(searchURL);
            }}
            setInput={setInput} />
            <div className="pictures">
                {data &&
                    data.map((d) => {
                        return <Picture data={d} />;
                    })}
            </div>
            <div className="morePicture">
                <button onClick={morePicture}>更多圖片</button>
            </div>
        </div>
    );
};

export default Homepage;
