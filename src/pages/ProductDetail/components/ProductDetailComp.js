/** 상품 상세정보의 주 내용을 담고있는 컴포넌트 */

import { useEffect, useState } from "react";
import styled from "styled-components";
import DescAndReview from "./DescAndReview";
import BtnFixedBottom from "../../../styles/BtnFixedBottom";

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
      <BtnFixedBottom>장바구니 담기</BtnFixedBottom>
    </div>
  );
}

export default ProductDetailComp;
