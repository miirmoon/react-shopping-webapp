import Products from "./Products";

import BtnFixedBottom from "styles/BtnFixedBottom";

function ShoppingBasketComp() {
  // const [selectedPds, setSelectedPds] = useState([]);

  return (
    <div>
      <Products />
      <BtnFixedBottom>주문하기</BtnFixedBottom>
    </div>
  );
}

export default ShoppingBasketComp;
