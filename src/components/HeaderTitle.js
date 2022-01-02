import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-bottom: 1px solid #eeeeee;
  font-weight: 700;
`;

const PrevIcon = styled.div``;

function HeaderTitle(props) {
  return (
    <div>
      {props.prev ? <PrevIcon /> : null}
      <Header>{props.title}</Header>
    </div>
  );
}

export default HeaderTitle;
