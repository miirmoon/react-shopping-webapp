import React from "react";
import { getThemes } from "../apis/ShoppingAPI";

function Home() {
  getThemes(
    ({ data }) => console.log(data),
    () => console.log("데이터를 불러오는 중 오류가 발생했습니다.")
  );

  return (
    <div>
      <h1>메인 페이지</h1>
    </div>
  );
}

export default Home;
