import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  body{
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};
  }
  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }
  button:hover, a:hover{
    cursor: pointer;
    filter: brightness(0.9);
  }
`