/** 테마id에 따른 상품 목록을 표현하기 위한 컴포넌트
 *  - ProductItem 컴포넌트로 해당 테마에 포함된 각 상품 표현
 */

import { useState, useEffect } from "react";
import styled from "styled-components";
import { getThemeProducts } from "apis/ShoppingAPI";
import ProductItem from "./ProductItem";

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
`;

function ProductsByTheme(props) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getThemeProducts(
      props.themeId,
      ({ data }) => setProductList(data.products),
      () => console.log("상품 목록을 불러오는 중 오류가 발생했습니다.")
    );
  }, [props.themeId]);

  return (
    <Box>
      {productList ? (
        productList.map((product) => {
          return <ProductItem product={product} key={product.id} />;
        })
      ) : (
        <div>관련된 상품이 없습니다.</div>
      )}
    </Box>
  );
}

export default ProductsByTheme;
