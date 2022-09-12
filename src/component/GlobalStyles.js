import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyles = createGlobalStyle`
    ${reset};
    * {
  box-sizing: border-box;
}
body {
  font-family: "Roboto", "Noto Sans KR", sans-serif;
  background-color: #121212;
  color: rgba(255, 255, 255, 0.87);
  font-size: 20px;
}
a {
  text-decoration: none;
  color: inherit;
}
.container {
  width: 55vw;
  margin: 0 auto;
}
`;

export default GlobalStyles;
