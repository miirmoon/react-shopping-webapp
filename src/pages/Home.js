import HeaderTitle from "../components/HeaderTitle";
import PopularThemes from "../components/PopularThemes";
import ProductsByTheme from "../components/ProductsByTheme";

function Home() {
  return (
    <div>
      <HeaderTitle title="토멘코 쇼핑" />
      <PopularThemes />
      <ProductsByTheme />
    </div>
  );
}

export default Home;
