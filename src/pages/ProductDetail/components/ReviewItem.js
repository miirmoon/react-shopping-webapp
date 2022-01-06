/** 각 후기의 스타일을 표현하는 컴포넌트 */

import { useState, useEffect } from "react";
import styled from "styled-components";
import { BsStar, BsStarFill } from "react-icons/bs";

const Box = styled.div`
  margin: 30px 35px;
`;

const Info = styled.div`
  display: flex;
`;

const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const InfoDetail = styled.div`
  height: 40px;
  display: flex;
  flex-direction: column;
  margin: 0 8px;
  justify-content: center;
  .icon {
    color: #ffeb39;
    font-size: 13px;
  }
  .text {
    color: #959b9b;
    font-size: 13px;
    margin-top: 2px;
  }
`;

const Content = styled.div`
  padding-top: 13px;
  font-size: 14px;
`;

function ReviewItem(props) {
  const [score, setScore] = useState([false, false, false, false, false]);

  useEffect(() => {
    if (props.review.score) {
      let newScore = [false, false, false, false, false];
      for (let i = 0; i < props.review.score; i++) {
        newScore[i] = true;
      }
      setScore(newScore);
    }
  }, [props.review]);

  return (
    <Box>
      <Info>
        <Profile src={props.review.profile} />
        <InfoDetail>
          <div>
            {score.map((star, i) => {
              return star ? (
                <BsStarFill className="icon" key={i} />
              ) : (
                <BsStar className="icon" key={i} />
              );
            })}
          </div>
          <div className="text">
            {props.review.name} | {props.review.reg_date}
          </div>
        </InfoDetail>
      </Info>
      <Content>{props.review.content}</Content>
    </Box>
  );
}

export default ReviewItem;
