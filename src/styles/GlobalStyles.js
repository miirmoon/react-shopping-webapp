import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    font-family: "Noto Sans KR";
  }
`;

export default GlobalStyles;
