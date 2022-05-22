import React from 'react'
import styled from 'styled-components'


const Card = ({ cardInfo , cardClickHandler }) => {
  const clickHander = () => {
    cardClickHandler(id);
  }
  const {id, name, sprite} = cardInfo

  return (
    <CardWrapper onClick={clickHander}>
      <Icon src={sprite} alt={name} draggable={false} />
      <p>{name}</p>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    flex-direction: column;
    box-shadow: 0 0 15px 0px hsl(0, 0%, 75%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: ${({theme}) => theme.color.mainWhite};
    font-size: .8em;
    margin: 1em;
    transition: 150ms ease-in-out;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 25px 0px ${({theme}) => theme.color.mainGreen};
    }
    
    @media (max-width: 750px) {
      font-size: .6em;
      width: 150px;
      height: 150px;
  }

`

const Icon = styled.img`
    width: 70%;
    margin-bottom: -1em;
    margin-top: -1em
`

export default Card;