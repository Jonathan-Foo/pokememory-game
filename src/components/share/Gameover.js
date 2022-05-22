import React from 'react'
import styled from 'styled-components'


// GameOver needs to knows if it should be shown or not using the const [loadin, setloading] = useState(true) that is either true of false as well as score

const Gameover = ({ score, show, playAgain }) => {
    const formattedScore = parseInt(score)

  return (
    show && (
        <GameOverWrapper >
            <Title>Game Over</Title>
            <Subtext>Your Final Score Was {formattedScore}p</Subtext>
            <PlayAgainButton onClick={playAgain}>Play Again?</PlayAgainButton>
        </GameOverWrapper>)
  )
}

const GameOverWrapper = styled.div`
    position: absolute;
    width: 100%;
    background: rgba(0, 0, 0, 0.9);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: .5em;
    z-index: 1;
`

const Title = styled.p`
    font-size: 4em;
    text-shadow: 0 0 10px red;
    
    @media (max-width: 750px) {
        font-size: 2.5em;
    }   
`

const Subtext = styled.p`
    font-size: 1.2em;
    text-shadow: 0 0 5px #000;
    
    @media (max-width: 750px) {
        font-size: 0.8em;
    }   
`

const PlayAgainButton = styled.button`
    appearance: none;
    margin-top: 1.5em;
    font-family: inherit;
    padding: .5em;
    cursor: pointer;
    transition: 100ms ease-in-out;

    &:hover{
        background: ${({theme}) => theme.color.mainGreen};
        color:white;
        transform: scale(1.05);
    }
    @media (max-width: 750px) {
        font-size: 0.8em;
        margin-top: 1em;
    } 
`

export default Gameover;