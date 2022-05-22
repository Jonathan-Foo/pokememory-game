import React from 'react'
import { useState } from 'react';

const useHistory = () => {
    const [history, setHistory] = useState([]);

    const passIdToHistory = (id) => {
        setHistory(prevHistory => [...prevHistory, id])
    }

    const idInHistory = (id) => {
        return history.indexOf(id) === -1
    }
    
    const resetHistory = () => {
        setHistory([]);
    }

    const allCardsClicked = (quantity) => {
        return quantity - 1 === history.length ;
    }
    

    return [
        history,
        idInHistory,
        passIdToHistory,
        resetHistory,
        allCardsClicked,

    ]
}

export default useHistory;