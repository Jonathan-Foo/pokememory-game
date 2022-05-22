import React from 'react'
import styled from 'styled-components'
import Card from './Card'

export default function Grid({ cards, cardClickHandler}) {
  const cardsElements =  cards.map(cardInfo => {
    return <Card key={cardInfo.id} cardInfo={cardInfo} cardClickHandler={cardClickHandler}/>
  })

  return (
    <CardGridWrapper>
      {cardsElements}
      
    </CardGridWrapper>
  )
}

const CardGridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    width:50%;
    padding: 1em;

    @media (max-width: 750px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        width: 75%;
    }
` 
