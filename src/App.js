// import './App.css';
import styled from "styled-components"
import useMainCardUI from "./components/MainCard.js"
import GlobalStyle from "./globalStyle.js"
import Creator from "./components/Creator.js"

const AppWrap = styled.div`
  // Global backgound color here
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  height: 100vh;
  width: 100vw;
  font-family: sans-serif;
  background-color: ${(props) => props.colortouse};
`

function App() {
  const {renderMainCardUI, colortouse} = useMainCardUI()

  return (
    <>

      <GlobalStyle />
      <AppWrap colortouse={colortouse}>
        {renderMainCardUI}
        <Creator />
      </AppWrap>
    </>
  )
}

export default App
