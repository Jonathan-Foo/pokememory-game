import React from 'react'
import styled from 'styled-components'
import Grid from './cards/Grid'
import Scoreboard from './score/Scoreboard'
import Gameover from './share/Gameover'
import Loading from './share/Loading'
import useGame from './hooks/useGame'

const Main = () => {
  const [score, highscore] = useGame();

  return (
    <MainWrapper>
      {/* <Loading /> */}
      {/* <Gameover /> */}
      <Scoreboard />
      <Grid />
    </MainWrapper>
  )
}

export default Main;

const MainWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    min-height: 613px;
`
