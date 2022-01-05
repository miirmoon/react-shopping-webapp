/** 페이지 상단 제목을 표현하기 위한 컴포넌트 */

import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";

const Header = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-bottom: 1px solid #eeeeee;
  font-weight: 700;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
`;

const PrevIcon = styled.div`
  width: 50px;
  line-height: 50px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 2;

  // .icon {
  //   color: blue;
  // }

  // &:hover .icon {
  //   color: red;
  // }
`;

function HeaderTitle(props) {
  function movePrev() {
    console.log("movemove!");
  }

  return (
    <div>
      {props.prev ? (
        <PrevIcon onClick={movePrev}>
          <IoIosArrowBack className="icon" />
        </PrevIcon>
      ) : null}
      <Header>{props.title}</Header>
    </div>
  );
}

export default HeaderTitle;
