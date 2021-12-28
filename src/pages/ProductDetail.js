import React from "react";
import { getThemeProducts } from "../apis/ShoppingAPI";

function ProdectDetail() {
  getThemeProducts(
    1,
    ({ data }) => {
      console.log(data);
    },
    () => {
      console.log("상품리스트를 불러오는 중 오류가 발생했습니다.");
    }
  );

  return (
    <div>
      <h1>상세페이지</h1>
    </div>
  );
}

export default ProdectDetail;
