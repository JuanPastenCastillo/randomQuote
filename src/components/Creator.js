import React from "react"
import styled from "styled-components"

const A = styled.a`
  background-color: hsl(0, 3.6%, 11%);
  padding: 0.4rem;
  border-radius: 5px;
  text-decoration: none;
  color: whitesmoke;
  margin-top: 15px;
  box-shadow: 0.5px 0.5px 0.6px whitesmoke, 0.7px 0.7px 1.1px -1.2px whitesmoke,
    1.5px 1.5px 2.5px -2.5px whitesmoke;

  &:hover {
    background-color: hsl(208, 100%, 97.1%);
    color: black;
    box-shadow: 0.5px 0.5px 0.6px black, 0.7px 0.7px 1.1px -1.2px black,
      1.5px 1.5px 2.5px -2.5px black;
  }
`

const Creator = () => {
  return (
    <>
      <A
        href="https://www.linkedin.com/in/juanpastencastillo/"
        target="_blank"
        rel="noreferrer"
      >
        By Juan Pastén Castillo
      </A>
    </>
  )
}

export default Creator
