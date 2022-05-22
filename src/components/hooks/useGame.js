import React, { useState } from 'react'
import useScore from './useScore';
import useLevel from './useLevel';
import useCard from './useCard';

const useGame = () => {
  const [loading, setLoading] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [score, highScore, resetScore, correctAnswer] = useScore();
  // useScore, useLvl, useCard  

  
  return [
    score, 
    highScore

  ]
}

export default useGame;
