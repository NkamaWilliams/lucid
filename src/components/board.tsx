'use client'

import { useState, useEffect } from "react"
import { useAppContext } from "./context"
import Tile from "./tile"
import Finish from "./finish"
import style from "@/styles/board.module.css"

export default function Board(){
    const context = useAppContext()
    const [highscore, setHighscore] = useState(0)
    const [movesLeft, setMovesLeft] = useState(12)
    const [multiplier, setMultiplier] = useState(2)
    const [stack, setStack] = useState<React.Dispatch<React.SetStateAction<boolean>>[]>([])
    const [values, setValues] = useState<string[]>([])
    const names = ["2.png", "4.png", "basketball_Jersey.png", "dj_guy.png", "Jiurn.png", "Mafia_2.png", "shark_onesie.png", "13.png", "IMG_9647.png"]
    const genRandomNames = (names: string[]): string[] =>{
        const arr:string[] = []
        let count = 12
        let name:string
        let index:number
        let temp:string
        for(let i = 0; i < count; i = i+1){
            name = names[i % names.length]
            arr.push(name)
            arr.push(name)
        }
        for (let i = 0; i < (count * 2); i = i+1){
            index = Math.floor(Math.random() * arr.length)
            temp = arr[index]
            arr[index] = arr[i]
            arr[i] = temp
        }
        return arr
    }

    const [tileNames, setTileNames] = useState<string[]>([])
    const updateBoard = (setVisible:React.Dispatch<React.SetStateAction<boolean>>, name:string) => {
        if (values.length < 1){
            setStack([...stack, setVisible])
            setValues([...values, name])
            return
        }
        const win = values[0] == name
        setVisible(win)
        const setVisibility = stack[0]
        setVisibility(win)

        if (win){
            context?.updateScore(context.score + 5*multiplier)
            setMultiplier(multiplier+1)
            setMovesLeft(movesLeft - 1)
        } else{
            setMultiplier(multiplier == 2 ? multiplier : multiplier-1)
        }

        setValues([])
        setStack([])

        if (movesLeft == 0){
            context?.updateGameOver(true) 
        }
    }

    useEffect(() => {
        setHighscore(parseInt(localStorage.getItem('highscore') ?? '0'))
        context?.updateScore(0)
        setMovesLeft(12)
        setTileNames(genRandomNames(names))
    }, [context?.gameOver])

    useEffect(() => {
        // Update highscore when context.score changes
        if (context?.score && context.score > highscore) {
            setHighscore(context.score);
            localStorage.setItem('highscore', context.score.toString())
        }
    }, [context?.score]);

    return(
        <section className={style.board}>
            {
                tileNames.map((tile, index) => 
                <div key={index}>
                    <Tile name={tile} updateBoard={updateBoard}/>
                </div>
            )}
            <Finish highscore={highscore} disp={movesLeft == 0}/>
        </section>
    )
}