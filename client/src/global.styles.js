import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  font-family: "Open Sans";
  padding: 20px 60px;

  @media screen and (max-width: 800px) {
    // some css
    padding: 10px;
  }
}

span {
  font-family: "Roboto Condensed";
}

a {
  text-decoration: none;
  color: black;
  font-family: "Roboto Condensed";
}

* {
  box-sizing: border-box;
}
`;
