import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ShoppingBasket from "./pages/ShoppingBasket";

function App() {
  return (
    <BrowserRouter basename="/react-shopping-webapp">
      <div>
        <Link to="/">홈</Link>
        <Link to="/product">상세페이지</Link>
        <Link to="/basket">장바구니</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/basket" element={<ShoppingBasket />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
