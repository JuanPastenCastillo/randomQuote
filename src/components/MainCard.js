import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { TwitterLogo, TumblrLogo } from "../icons/index.js"
import Quote from "./Quote.js"
import randomHSL from "../utils/randomHSL.js"
import getRandomQuote from "../utils/getRandomQuote.js"
import Creator from "./Creator.js"

const WrapAll = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 25px;
  margin-left: 25px;
  
`
const MainCard = styled.div`
  // Global backgound color here -> Box shadow color more darker
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  background-color: whitesmoke;
  box-shadow: 0.3px 0.5px 0.7px ${(props) => props.blurred},
    0.8px 1.6px 2px -0.8px ${(props) => props.blurred},
    2.1px 4.1px 5.2px -1.7px ${(props) => props.blurred},
    5px 10px 12.6px -2.5px ${(props) => props.blurred};
`
const WrapAllContentCard = styled.div`
  width: 90%;
  margin: 25px;
`
const FooterWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`
const FooterLeft = styled(FooterWrap)`
  justify-content: left;
  align-items: center;
`
const FooterRight = styled(FooterWrap)`
  justify-content: right;
`
const TwitterLogoStyled = styled(TwitterLogo)`
  // Global backgound color here
  border-radius: 2px;
  padding: 12px;
  cursor: pointer;
  background-color: ${(props) => props.colortouse};
  fill: whitesmoke;
`
const TumblrLogoStyled = styled(TumblrLogo)`
  // Global backgound color here
  border-radius: 2px;
  padding: 12px;
  margin-left: 8px;
  cursor: pointer;
  background-color: ${(props) => props.colortouse};
  fill: whitesmoke;
`
const ButtonQuote = styled.button`
  // Global backgound color here and a :hover
  cursor: pointer;
  padding: 12px;
  border: none;
  border-radius: 2px;
  outline: none;
  background-color: ${(props) => props.colortouse};
  color: whitesmoke;
`

const useMainCardUI = () => {
  const [quote, setQuote] = useState({ fact: "", author: "" })
  const [color, setColor] = useState({ plain: "", blurred: "" })
  const [isFetching, setIsFetching] = useState(false)
  
  useEffect(() => {
    if (window.localStorage.getItem("dataQuotes") === null) {
      const fetchQuote = async () => {
        try {
          const getQuote = await fetch("https://type.fit/api/quotes")
          let getData = await getQuote.json()
          window.localStorage.setItem("dataQuotes", JSON.stringify(getData))
          let whichUse = getRandomQuote(0, getData)
          let dataToSet = getData[whichUse]
          setQuote({
            fact: dataToSet.text,
            author: dataToSet.author || "Anonymous"
          })
        } catch (error) {
          console.log("error:", error)
        }
      }
      fetchQuote()
    }

    try {
      let dataToUse = JSON.parse(window.localStorage.getItem("dataQuotes"))
      let whichUse = getRandomQuote(0, dataToUse)
      let dataToSet = dataToUse[whichUse]
      setQuote({ fact: dataToSet.text, author: dataToSet.author || "Anonymous" })
    } catch (error) {
      console.log('error:', error)

    }


  }, [])

  const GetNewQuote = () => {
    if (window.localStorage.getItem("dataQuotes") === null) {
      setIsFetching(true)
      const fetchQuote = async () => {
        try {
          const getQuote = await fetch("https://type.fit/api/quotes")
          let getData = await getQuote.json()
          window.localStorage.setItem("dataQuotes", JSON.stringify(getData))
          setIsFetching(false)
        } catch (error) {
          setIsFetching(false)
          console.log("error:", error)
        }
      }
      fetchQuote()
    }

    let dataToUse = JSON.parse(window.localStorage.getItem("dataQuotes"))
    let whichUse = getRandomQuote(0, dataToUse)
    let dataToSet = dataToUse[whichUse]
    setQuote({ fact: dataToSet.text, author: dataToSet.author || "Anonymous" })
  }

  const applyStyles = () => {
    let getRandom = randomHSL()
    let inParts = getRandom.split(", ")
    let sumFinal = String(Number(inParts[2].match(/[0-9]+/g)) + 20) + "%)"
    let finalHover = [...inParts.slice(0, 2), sumFinal].join()
    setColor({ plain: getRandom, blurred: finalHover })
  }

  const ChangeStyles = () => {
    applyStyles()
  }

  useEffect(() => {
    applyStyles()
  }, [])

  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?hashtags=quotes&text=«${quote.fact}» —${quote.author}.
      `,
      "_blank"
    )
  }
  const shareTumblr = () => {
    window.open(
      `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${quote.author}.&content=${quote.fact}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`,
      "_blank"
    )
  }

  return {
    colortouse: color.plain,
    renderMainCardUI: (
      <WrapAll>
        
        <MainCard blurred={color.blurred}>
        
          <WrapAllContentCard>
            <Quote
              quoteToDisplay={quote.fact}
              factAuthor={quote.author}
              colortouse={color.plain}
              isFetching={isFetching}
            ></Quote>
            <FooterWrap>
              <FooterLeft>
                <>
                  <TwitterLogoStyled
                    onClick={shareTwitter}
                    className="SVGLogos"
                    colortouse={color.plain}
                  />
                </>

                <TumblrLogoStyled
                  onClick={shareTumblr}
                  className="SVGLogos"
                  colortouse={color.plain}
                />
              </FooterLeft>
              <FooterRight>
                <ButtonQuote
                  onClick={() => {
                    GetNewQuote()
                    ChangeStyles()
                  }}
                  colortouse={color.plain}
                >
                  New quote
                </ButtonQuote>
              </FooterRight>
            </FooterWrap>
          </WrapAllContentCard>
          
        </MainCard>
        <Creator />
      </WrapAll>
    )
  }
}

export default useMainCardUI
