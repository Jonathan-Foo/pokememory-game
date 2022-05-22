import React, { useState } from 'react'
import fetchCards from './fetchCards';

export default function useCard() {
  const [cards, setCards] = useState();
  const [history, setHistory] = useState();

  const updateNewCards = async (quantity) => {
    const newCards = await fetchCards.newCards(quantity);
    setCards(newCards);
  }

  const randomizeCards = () => {
    setCards(prevCards => fetchCards.shuffle(prevCards));
  }
  
  

  return [
    cards,
    updateNewCards,
    randomizeCards
  ]
}
