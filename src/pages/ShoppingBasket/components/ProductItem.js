import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const Box = styled.div`
  width: 100%;
  height: 30vh;
  min-height: 130px;
  background-color: #988789;
`;

const Product = styled.div`
  display: flex;
`;

const Thumbnail = styled.img`
  height: 100%;
`;

function ProductItem(props) {
  console.log(props.product);
  return (
    <Box>
      <Product>
        <AiOutlineClose />
        <Thumbnail src={props.product.thumbnail} />
      </Product>
    </Box>
  );
}

export default ProductItem;
