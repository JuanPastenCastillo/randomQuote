import { createGlobalStyle, keyframes } from "styled-components"

const opacityCSS = keyframes`
 100%{
  opacity:1;
 }
 0%, 20%{
  opacity:0;
 }

`

const GlobalStyle = createGlobalStyle`
*{
  transition: all 0.5s ease;
}

.fadeThis{
  animation:${opacityCSS} 0.5s ease normal;
  
}


`

export default GlobalStyle
