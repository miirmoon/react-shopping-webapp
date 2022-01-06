/** 메인 - 상품목록 - 하나의 상품을 표현하기 위한 컴포넌트 */

import { Link } from "react-router-dom";
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
      <Link to={`/product/${props.product.id}`}>
        <Thumbnail src={props.product.thumbnail} />
        <Title>{props.product.name}</Title>
        <Description>{props.product.description}</Description>
      </Link>
    </Box>
  );
}

export default ProductItem;
