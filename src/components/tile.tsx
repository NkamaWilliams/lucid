'use client'
import { useState, useEffect } from "react"
import { useAppContext } from "./context"
import Image from "next/image"
import style from "@/styles/tile.module.css"

interface Props{
    name: string,
    updateBoard: (setVisible:React.Dispatch<React.SetStateAction<boolean>>, name:string) => void,
}
export default function Tile({name, updateBoard}:Props){
    const context = useAppContext();
    const [visible, setVisibility] = useState(false)
    const [pic, setPic] = useState(name)
    const handleClick = () => {
        if (visible){
            return
        }
        setVisibility(true)
        updateBoard(setVisibility, name)
    }
    // const handleClick = () => {setVisibility(!visible)}
    useEffect(() => {setVisibility(false)}, [context?.gameOver])
    return(
        <div className={style.flip} onClick={handleClick}>
            <figure className={`${style.card} ${visible && style.card_active}`}>
                <div className={style.back}>
                </div>
                <div className={style.container}>
                    <Image alt="name" src={`/${name}`} fill style={{objectFit: "contain"}}/>
                </div>
            </figure>
        </div>
            
    )
}