import React from 'react'
import styled from 'styled-components'

const Scoreboard = () => {
  return (
    <ScoreboardWrapper>
      <p>HIGH-SCORE: 00000</p>
      <p>YOUR-SCORE: 00000</p>
    </ScoreboardWrapper>
  )
}

const ScoreboardWrapper = styled.div`
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    background-color: ${({theme}) => theme.color.mainGrey};
    color: white;
    margin-top: 2em;
    border-radius: 15px;
    box-shadow: 0 0 15px 0px hsl(0, 0%, 75%);

   
`

export default Scoreboard;
