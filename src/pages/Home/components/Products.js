/** 메인 - 테마 목록과 상품 목록을 표현하기 위한 컴포넌트
 *  - PopularThemes 스타일과 ThemeItem 컴포넌트를 이용하여 테마 목록 표현
 *  - ProductsByTheme 컴포넌트를 이용하여 상품 목록 표현
 */
import { useState, useEffect } from "react";
import styled from "styled-components";
import { getThemeProducts } from "apis/ShoppingAPI";
import ThemeItem from "./ThemeItem";

import ProductsByTheme from "./ProductsByTheme";

const PopularThemes = styled.div`
  padding: 50px 15px 25px 15px;
  display: flex;
  border-bottom: 8px solid #eeeeee;
`;

function Products(props) {
  const [themeId, setThemeId] = useState(1);
  const [productList, setProductList] = useState([]);

  function showProductsByTheme(id) {
    setThemeId(id);
  }

  useEffect(() => {
    getThemeProducts(
      themeId,
      ({ data }) => setProductList(data.products),
      () => console.log("상품 목록을 불러오는 중 오류가 발생했습니다.")
    );
  }, [themeId]);

  return (
    <div>
      <PopularThemes>
        {props.themeList ? (
          props.themeList.map((theme) => {
            return (
              <ThemeItem
                theme={theme}
                key={theme.id}
                onClick={() => showProductsByTheme(theme.id)}
              />
            );
          })
        ) : (
          <div>테마가 없습니다.</div>
        )}
      </PopularThemes>
      <ProductsByTheme productList={productList} />
    </div>
  );
}

export default Products;
