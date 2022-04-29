import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  html{
    scroll-behavior: smooth;
    scrollbar-color: #555 #1c1d21;
    scrollbar-width: thin
  }
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}




/* Track */
::-webkit-scrollbar-track {
  background-color: #1c1d21;
  /* border-radius: 10px; */
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background-color: #555;
  border-radius: 10px;
}

/* Handle on hover */
/* ::-webkit-scrollbar-thumb:hover {
  background: #555; 
} */
`;

export default GlobalStyle;
