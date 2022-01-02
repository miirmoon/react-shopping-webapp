import styled from "styled-components";

const Box = styled.div`
  padding: 20px 10px;
  margin: 0 3px;
  border-radius: 10px;
  font-weight: 700;
  color: #ffffff;
  font-size: 17px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.img});
`;

function ThemeItem(props) {
  return <Box img={props.theme.thumbnail}>#{props.theme.name}</Box>;
}

export default ThemeItem;
