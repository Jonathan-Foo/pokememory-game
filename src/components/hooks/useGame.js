import React, { useState } from 'react'
import useScore from './useScore';
import useLevel from './useLevel';
import useCard from './useCard';
import useHistory from './useHistory';

const useGame = () => {
  const [loading, setLoading] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [score, highScore, resetScore, incrementScore] = useScore();
  const [cards, updateNewCards, randomizeCards,] = useCard();
  const [history, idInHistory, passIdToHistory, resetHistory, allCardsClicked] = useHistory();
  const [level, nextLevel, resetLevel] = useLevel();

  const cardClickHandler = (id) => {
    if (idInHistory(id)) {
        passIdToHistory(id);
        incrementScore();
        
        if(!allCardsClicked(level.quantity)) {
          randomizeCards();
        } else {
          resetHistory();
          setLoading(true);
          nextLevel(); 
        }

    } else {
      setGameOver(true)
    }
  }

  const beginLvl = async () => {
    // console.log(level.quantity)
    await updateNewCards(level.quantity);
    setLoading(false);
  }

  // What happens when player fails
  const newGame = () => {
    setGameOver(false)
    setLoading(true)
    resetScore() 
    resetHistory() 
    resetLevel() 
  }

  
  return [
    cards,
    level,
    score, 
    highScore,
    gameOver,
    loading,
    cardClickHandler,
    beginLvl,
    newGame,
    resetLevel,
    updateNewCards,
  ]
}

export default useGame;
