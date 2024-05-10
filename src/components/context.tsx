'use client'
import { useState, useContext, createContext } from "react"

interface ContextType{
    score: number,
    gameOver: boolean,
    updateScore: (value:number) => void,
    updateGameOver: (val:boolean) => void,
}

interface ProviderProps{
    children: React.ReactNode
}

const AppContext = createContext<ContextType | undefined>(undefined)
export const useAppContext = () => useContext(AppContext)

export default function Provider({children}:ProviderProps){
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const updateScore = (value:number) => {
        setScore(value)
    }
    const updateGameOver = (val:boolean) => {
        setGameOver(val)
    }
    return(
        <AppContext.Provider value={{score, gameOver, updateScore, updateGameOver}}>
            {children}
        </AppContext.Provider>
    )
}