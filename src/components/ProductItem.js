import styled from "styled-components";

const Box = styled.div`
  max-width: 342px;
  margin: 15px;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  width: 342px;
  height: 204px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 17px;
  margin: 10px 0;
`;

const Description = styled.div`
  font-size: 15px;
`;

function ProductItem(props) {
  return (
    <Box>
      <Thumbnail src={props.product.thumbnail} />
      <Title>{props.product.name}</Title>
      <Description>{props.product.description}</Description>
    </Box>
  );
}

export default ProductItem;
