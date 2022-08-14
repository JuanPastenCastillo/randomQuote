import React from "react"
import styled from "styled-components"
import { GitHubIcon, LinkedinIcon } from "../utils/indexIcons.js"

export const CreatorWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: calc(0.8rem + 1vw);
    text-align: center;
    margin-bottom: 0px;
  }
  
  span{
    color: hsl(136, 85.6%, 35%);
  }

  a {
    fill: hsl(72, 100%, 98%) ;
  }

  a:hover {
    fill: hsl(60, 6.2%, 87.5%);
  }

  a > svg {
    width: 100%;
    
    height: calc(2rem + 2vh);
  }
`

export const WrapIcons = styled.div`
  display: flex;
  justify-content: center;
`

export const GitHubIconStyled = styled(GitHubIcon)`
`
export const LinkedinIconStyled = styled(LinkedinIcon)`
`


const Creator = () => {
  return (
    <>
      <CreatorWrapper>
        <h2>By Juan Pastén Castillo</h2>
        <WrapIcons>
          <a href="https://github.com/JuanPastenCastillo"
          target="blank"
          rel="noreferrer">
            <GitHubIconStyled />
          </a>
          <a href="https://www.linkedin.com/in/juanpastencastillo/"
          target="blank"
          rel="noreferrer">
            <LinkedinIconStyled />
          </a>
        </WrapIcons>
      </CreatorWrapper>
    </>
  )
}

export default Creator
