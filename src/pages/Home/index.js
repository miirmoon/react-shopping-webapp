import { useState, useEffect } from "react";
import HeaderTitle from "components/HeaderTitle";
import Products from "./components/Products";
import { getThemes } from "apis/ShoppingAPI";

function Home() {
  const [themeList, setThemeList] = useState([]);

  useEffect(() => {
    getThemes(
      ({ data }) => setThemeList(data.themes),
      () => console.log("테마 목록을 불러오는 중 오류가 발생했습니다.")
    );
  }, []);

  return (
    <div>
      <HeaderTitle title="토멘코 쇼핑" />
      <Products themeList={themeList} />
    </div>
  );
}

export default Home;
