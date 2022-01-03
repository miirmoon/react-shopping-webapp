import { useState } from "react/cjs/react.development";
import styled from "styled-components";

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

const BtnBasket = styled.button`
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  background-color: #24dbaf;
  border: none;
  font-weight: 700;
`;

function ProductDetailComp(props) {
  const changedPrice = props.product.price.toLocaleString();

  return (
    <div>
      <Box>
        <Thumbnail src={props.product.thumbnail} />
        <Title>
          <Name>{props.product.name}</Name>
          <div>{changedPrice}원</div>
        </Title>
      </Box>
      <BtnBasket>장바구니 담기</BtnBasket>
    </div>
  );
}

export default ProductDetailComp;
