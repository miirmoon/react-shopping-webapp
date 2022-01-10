/** 상품 상세정보의 주 내용을 담고있는 컴포넌트 */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DescAndReview from "./DescAndReview";
import BtnFixedBottom from "styles/BtnFixedBottom";

const Box = styled.div`
  margin: 50px auto;
  width: 100%;
  max-width: 600px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 350px;
`;

const Title = styled.div`
  padding: 20px;
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 8px;
`;

function ProductDetailComp(props) {
  const navigate = useNavigate();
  const [changedPrice, setChangedPrice] = useState("");

  useEffect(() => {
    if (props.product.price) {
      // 금액에 천단위마다 콤마 넣기
      setChangedPrice(
        props.product.price
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
      );
    }
  }, [props.product]);

  // 장바구니에 상품 추가하기(로컬 스토리지 이용)
  function addToBasket() {
    let newbasket = JSON.parse(localStorage.getItem("basket"));
    if (!newbasket) newbasket = [];
    newbasket.push(props.product.id);

    localStorage.setItem("basket", JSON.stringify(newbasket));

    if (
      window.confirm(
        "상품을 장바구니에 담았습니다. 장바구니를 확인하시겠습니까?"
      )
    ) {
      navigate("/basket");
    }
  }

  return (
    <div>
      <Box>
        <Thumbnail src={props.product.thumbnail} />
        <Title>
          <Name>{props.product.name}</Name>
          <div>{changedPrice}원</div>
        </Title>
        <DescAndReview product={props.product} />
      </Box>
      <BtnFixedBottom onClick={addToBasket}>장바구니 담기</BtnFixedBottom>
    </div>
  );
}

export default ProductDetailComp;
