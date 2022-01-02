import { useState, useEffect } from "react";
import { getThemes } from "../apis/ShoppingAPI";
import styled from "styled-components";
import ThemeItem from "./ThemeItem";

const Box = styled.div`
  padding: 50px 15px 25px 15px;
  display: flex;
  border-bottom: 8px solid #eeeeee;
`;

function PopularThemes() {
  const [themeList, setThemeList] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getThemes(
      ({ data }) => setThemeList(data.themes),
      () => console.log("테마 목록을 불러오는 중 오류가 발생했습니다.")
    );
  }, []);

  return (
    <Box>
      {themeList ? (
        themeList.map((theme) => {
          return <ThemeItem theme={theme} key={theme.id} />;
        })
      ) : (
        <div>조회된 테마가 없습니다.</div>
      )}
    </Box>
  );
}

export default PopularThemes;
