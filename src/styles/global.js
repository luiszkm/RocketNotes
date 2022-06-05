import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }
  :root{
    font-size: 62.5%;
  }
  body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
  }
  body,input,button, textarea{
    font-size: 1.6rem;
    font-family: 'Roboto Slab', serif;
    outline:none;
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