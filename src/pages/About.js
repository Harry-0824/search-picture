import React from "react";

const About = () => {
  return (
    <div>
      <h1>簡單的圖片搜尋網站</h1>
      <p>這是一個簡單的圖片搜尋網站，可以搜尋到許多圖片</p>
      <ul>
        <li>技術堆疊： React、Bootstrap、第三方 API 串接</li>
        <li>
          專案描述： 利用 API
          串接建立圖片搜尋平台，提供直覺化搜尋與即時數據更新功能。
        </li>
        <li>
          技術挑戰與解決方案： <br></br>• 處理 API
          回傳資料的格式轉換與前端展示，確保數據正確性 <br></br>•
          優化資料載入速度，提升用戶互動流暢度 <br></br>•
          透過詳盡的手動測試，確認各功能模組間的無縫整合
        </li>
      </ul>
    </div>
  );
};

export default About;
