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
  const [quote, setQuote] = useState({ fact: "", author: "" })

  useEffect(() => {
    if (window.localStorage.getItem("dataQuotes") === null) {
      const fetchQuote = async () => {
        try {
          const getQuote = await fetch("https://type.fit/api/quotes")
          let getData = await getQuote.json()
          window.localStorage.setItem("dataQuotes", JSON.stringify(getData))
          setQuote({ fact: dataToSet.text, author: dataToSet.author || "Anonymous" })
        } catch (error) {
          console.log("error:", error)
        }
      }
      fetchQuote()
    }

    let dataToUse = JSON.parse(window.localStorage.getItem("dataQuotes"))
    let whichUse = getRandomQuote(0, dataToUse)
    let dataToSet = dataToUse[whichUse]
    setQuote({ fact: dataToSet.text, author: dataToSet.author || "Anonymous" })
  }, [])

  if (quoteToDisplay === "" && quote.fact === "") {
    return <Loader />
  }

  if (isFetching) {
    return (
      <>
        <>
          {quoteToDisplay === "" ? (
            <>
              <DisplayQuote quoteToDisplay={quote.fact} />
            </>
          ) : (
            <>
              <DisplayQuote quoteToDisplay={quoteToDisplay} />
            </>
          )}
        </>
        <Autor key={colortouse} colortouse={"white"}>
          — {factAuthor || quote.author}
        </Autor>
      </>
    )
  }

  return (
    <>
      <>
        {quoteToDisplay === "" ? (
          <>
            <DisplayQuote quoteToDisplay={quote.fact} colortouse={colortouse} />
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
        — {factAuthor || quote.author}
      </Autor>
    </>
  )
}

export default Quote
