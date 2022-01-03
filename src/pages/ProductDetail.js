import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../apis/ShoppingAPI";
import HeaderTitle from "../components/HeaderTitle";
import ProductDetailComp from "../components/ProductDetailComp";

function ProdectDetail() {
  const productId = useParams().id;
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductDetail(
      productId,
      ({ data }) => {
        setProduct(data.product);
      },
      () => {
        console.log("정보를 불러오는 중 오류가 발생했습니다.");
      }
    );
  }, []);

  return (
    <div>
      <HeaderTitle prev="home" title="토멘코 쇼핑" />
      <ProductDetailComp product={product} />
    </div>
  );
}

export default ProdectDetail;
