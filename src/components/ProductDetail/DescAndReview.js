/** 상품 상세정보 - 상품 정보와 후기 부분을 담고있는 컴포넌트 */

import { useState } from "react";
import styled from "styled-components";
import Reviews from "./Reviews";

const Btn = styled.button`
  width: 50%;
  font-weight: ${(props) => (props.click ? 400 : 700)};
  border: 1px solid #eeeeee;
  padding: 15px;
  cursor: pointer;
  background-color: ${(props) => (props.click ? "#ffffff" : "#eeeeee")};
`;

const Desc = styled.img`
  width: 100%;
`;

function DescAndReview(props) {
  const [isShowDesc, setIsShowDesc] = useState(true);
  const [isShowReview, setIsShowReview] = useState(false);

  // 설명 보여주기(후기가 선택된 상태에서만 작동)
  function showDesc() {
    if (!isShowDesc) {
      setIsShowDesc(!isShowDesc);
      setIsShowReview(!isShowReview);
    }
  }

  // 후기 보여주기(설명이 선택된 상태에서만 작동)
  function showReview() {
    if (!isShowReview) {
      setIsShowDesc(!isShowDesc);
      setIsShowReview(!isShowReview);
    }
  }

  return (
    <div>
      <Btn click={isShowDesc ? "clicked" : null} onClick={showDesc}>
        상품 설명
      </Btn>
      <Btn click={isShowReview ? "clicked" : null} onClick={showReview}>
        상품 후기({props.product.review_cnt})
      </Btn>
      {isShowDesc ? (
        <Desc src={props.product.product_desc} />
      ) : (
        <Reviews id={props.product.id} />
      )}
    </div>
  );
}

export default DescAndReview;
