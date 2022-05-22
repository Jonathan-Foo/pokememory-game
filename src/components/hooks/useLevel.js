import React, { useState } from 'react'

const CARD_STEP = 2;
const DIFFICULTY = {quantity: 4, lvl: 1};

const useLevel = () => {
    const [level, setLevel] = useState(DIFFICULTY);

    const nextLevel = () => {
        setLevel(prevLevel => {
            let quantity = prevLevel.lvl + 1;
            let lvl = prevLevel.quantity + CARD_STEP;
            
            return {quantity, lvl};
        })
    }

    const resetLevel = () => {
        setLevel({...DIFFICULTY})
    }

    return [
      level,
      nextLevel,
      resetLevel,
    ]
}

export default useLevel;