import { useState, useEffect } from "react";
import { getProductDetail } from "apis/ShoppingAPI";
import ProductItem from "./ProductItem";

function Products() {
  const [productList, setProductList] = useState([]);

  async function getBasketProducts() {
    const pdIdList = JSON.parse(localStorage.getItem("basket"));
    let newProductList = [];

    pdIdList.forEach((id) => {
      console.log(id);
      getProductDetail(
        id,
        ({ data }) => {
          console.log(data);
          newProductList.push(data.product);
        },
        () => {
          console.log("상품정보를 불러오는 중 오류가 발생했습니다.");
        }
      );
    });

    console.log(newProductList);
    setProductList(newProductList);
  }

  useEffect(() => {
    getBasketProducts();
  }, []);

  return (
    <div>
      (
      {productList ? (
        productList.map((product) => {
          console.log(product);
          return (
            <div>
              <ProductItem product={product} />
            </div>
          );
        })
      ) : (
        <div>장바구니에 담은 상품이 없습니다.</div>
      )}
      )
    </div>
  );
}

export default Products;
