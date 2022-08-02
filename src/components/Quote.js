import React, { useState, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import { QuoteIcon } from "../icons/index.js"
import "./QuoteLoader.css"
import getRandomQuote from "../utils/getRandomQuote.js"

const opacityCSS = keyframes`
 0%,100%{
  opacity:1;
 }
 50%{
  opacity:0;
 }

`
const QuoteIconStyled = styled(QuoteIcon)`
  // Global backgound color here -> use fill
  font-size: 2rem;
  margin-right: 8px;
  /* fill:hsl(55,55%,55%); */
  fill: ${(props) => props.colortouse};
  animation: ${opacityCSS} 1.2s ease normal;
`

const QuoteStyled = styled.span`
  // Global backgound color here -> for text
  text-align: justify;
  text-align-last: center;
  font-size: 1.5rem;
  font-weight: 900;
  transition: all 1.2s ease;
  color: ${(props) => props.colortouse};
`
const Autor = styled.p`
  text-align: right;
  transition: all 1.2s ease;
  color: ${(props) => props.colortouse};
`
const Loader = () => {
  return <span className="loader"></span>
}

const DisplayQuote = ({ quoteToDisplay, colortouse }) => {
  return (
    <React.Fragment key={colortouse}>
      <QuoteIconStyled colortouse={colortouse} className="fadeThis" />
      <QuoteStyled colortouse={colortouse} className="fadeThis">
        {quoteToDisplay}{" "}
      </QuoteStyled>
    </React.Fragment>
  )
}

const Quote = ({ quoteToDisplay, factAuthor, colortouse, isFetching }) => {
  if (quoteToDisplay === "") {
    return <Loader />
  }

  return (
    <>
      <>
        {quoteToDisplay === "" ? (
          <>
            <DisplayQuote quoteToDisplay={quoteToDisplay} colortouse={colortouse} />
          </>
        ) : (
          <>
            <DisplayQuote
              quoteToDisplay={quoteToDisplay}
              colortouse={colortouse}
            />
          </>
        )}
      </>
      <Autor key={colortouse} colortouse={colortouse} className="fadeThis">
        — {factAuthor || "Anonymous"}
      </Autor>
    </>
  )
}

export default Quote
