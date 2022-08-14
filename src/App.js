// import './App.css';
import styled from "styled-components"
import useMainCardUI from "./components/MainCard.js"
import GlobalStyle from "./globalStyle.js"
import Creator from "./components/Creator.js"
import { useState } from "react"

const AppWrap = styled.div`
  // Global backgound color here
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height:100vh;
  max-height:100%;
  font-family: sans-serif;
  background-color: ${(props) => props.colortouse};
`

function App() {
  
  
  const { renderMainCardUI, colortouse } = useMainCardUI()

  return (
    <>
    

      <GlobalStyle />
      <AppWrap colortouse={colortouse}>
        {renderMainCardUI}
        
      </AppWrap>
    </>
  )
}

export default App
