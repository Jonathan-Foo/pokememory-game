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
        setScore(prevScore => {
            const score = scoreFormat(parseInt(prevScore) + 10)
            
            if (parseInt(score) > parseInt(highScore)) {
                 setHighScore(score.slice())
            }

            return score;
        })
        
    }

    const resetScore = () => {
        setScore('00000')
    }



    return [
        score,
        highScore,
        resetScore,
        incrementScore,
    ]
}

export default useScore;