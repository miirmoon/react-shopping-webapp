/** 하단에 고정된 버튼(장바구니 추가, 주문하기 등) */

import styled from "styled-components";

const BtnFixedBottom = styled.button`
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  background-color: #24dbaf;
  border: none;
  font-weight: 700;
  cursor: pointer;
`;

export default BtnFixedBottom;
