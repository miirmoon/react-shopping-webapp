/** 상품 상세정보 - 후기 영역을 표현하는 컴포넌트 */

import { useState, useEffect } from "react";
import styled from "styled-components";
import { getProductReviews } from "../../apis/ShoppingAPI";
import ReviewItem from "./ReviewItem";

const Box = styled.div`
  padding: 10px;
`;

function Reviews(props) {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    getProductReviews(
      props.id,
      ({ data }) => {
        setReviewList(data.reviews);
      },
      () => {
        console.log("후기를 불러오는 중 오류가 발생했습니다.");
      }
    );
  }, []);

  return (
    <Box>
      {reviewList ? (
        reviewList.map((review) => {
          return <ReviewItem review={review} key={review.id} />;
        })
      ) : (
        <div>등록된 후기가 없습니다.</div>
      )}
    </Box>
  );
}

export default Reviews;
