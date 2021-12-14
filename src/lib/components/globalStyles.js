import { createGlobalStyle } from "styled-components";
import { h1, h2, h3, h4, p, input, a } from "./text";

export const GlobalStyle = createGlobalStyle`
* { font-size: 14px;}
  h1 { ${h1} }
  h2 { ${h2} }
  h3 { ${h3} }
  h4 { ${h4} }
  p  { ${p} }
  input {${input}}
  a {${a}}
`;
