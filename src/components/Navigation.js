import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/">홈</Link>
      <Link to="/product">상세페이지</Link>
      <Link to="/basket">장바구니</Link>
    </div>
  );
}

export default Navigation;
