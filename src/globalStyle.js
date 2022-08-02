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
  transition: all 1.2s ease;
}

.fadeThis{
  animation:${opacityCSS} 1.2s ease normal;
  
}


`

export default GlobalStyle
