import HeaderTitle from "components/HeaderTitle";
import ShoppingBasketComp from "./components/ShoppingBasketComp";

function ShoppingBasket() {
  return (
    <div>
      <HeaderTitle prev="home" title="장바구니" />
      <ShoppingBasketComp />
    </div>
  );
}

export default ShoppingBasket;
