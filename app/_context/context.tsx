'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const GameContext = createContext(undefined);

export function GameProvider({children}) {
    const [items, setItems] = useState([])

    // The syncing magic
    useEffect(() => {
        const localItems = JSON.parse(localStorage.getItem('games') || '""') ;
        if (items.length == 0) setItems(localItems);
	}, [items]);

    useEffect(() => {
        if(items.length > 0){
            localStorage.setItem('games', JSON.stringify(items));
        }
	}, [items]);

    return (
        <GameContext.Provider value={{items, setItems,}}>
            {children}
        </GameContext.Provider>
    )
}

export function useGame() {
    const context = useContext(GameContext)

    if(!context)
            throw new Error ('useGame must be used in a `GameProvider`')
    
    return context
}