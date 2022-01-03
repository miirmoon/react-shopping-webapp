import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    font-family: "Noto Sans KR";
    text-decoration: none;
    color: #000000;
  }
`;

export default GlobalStyles;
