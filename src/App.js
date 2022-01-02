import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ShoppingBasket from "./pages/ShoppingBasket";

function App() {
  return (
    <BrowserRouter basename="/react-shopping-webapp">
      <div>
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
