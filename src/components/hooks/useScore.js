import React, { useState } from 'react'

const useScore = () => {
    const [score, setScore] = useState('00000')
    const [highScore, setHighScore] = useState('00000')

    const scoreFormat = (int) => {
        const str = int + ''
        const format = '00000'
        const length = str.length
        const difference = 5 - str.length 
        if (length < 5) {
            return format.slice(0, difference) + str.slice()
        } else {
            return str
        }
    }

    const incrementScore = () => {
        setScore(prevScore => scoreFormat(parseInt(prevScore) + 10))
    }

    const resetScore = () => {
        setScore('00000')
    }

    const newHighScoreCheck = () => {
        if (parseInt(score) > parseInt(highScore)) {
            return setHighScore(score.slice())
        } else {
            return 
        }
    }

    const correctAnswer = () => {
        incrementScore();
        newHighScoreCheck();
    }


    return [
        score,
        highScore,
        resetScore,
        correctAnswer,

    ]
}

export default useScore;