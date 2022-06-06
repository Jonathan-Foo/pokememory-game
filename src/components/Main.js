import React, { useEffect } from 'react'
import styled from 'styled-components'
import Grid from './cards/Grid'
import Scoreboard from './score/Scoreboard'
import Gameover from './share/Gameover'
import Loading from './share/Loading'
import useGame from './hooks/useGame'

const Main = () => {
  // useGame needs to be deconstructed in order 
  const [
    cards,
    level,
    score, 
    highscore, 
    gameOver, 
    loading, 
    cardClickHandler, 
    beginLvl,
    newGame,
    resetLevel,
    updateNewCards,
  ] = useGame();


  useEffect(() => {
    beginLvl();
  }, [level])

  return (
    <MainWrapper>
      <Loading show={loading} />
      <Gameover show={gameOver} score={score} playAgain={newGame}/>
      <Scoreboard score={score} highScore={highscore}/>
      <Grid cards={cards} cardClickHandler={cardClickHandler}/>
    </MainWrapper>
  )
}

export default Main;

const MainWrapper = styled.main`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    min-height: 613px;

`
