'use client'
import styles from "@/styles/instructions.module.css"
import { useState } from "react"

export default function Instructions(){
    const [visible, setVisibility] = useState(false)
    return(
        <div className={styles.instructions}>
            <button className={styles.btn}  onClick={() => {setVisibility(true)}}>Instructions</button>

            <div className={`${styles.container} ${visible && styles.visible}`}>
                <div className={`${styles.content} ${visible && styles.fadeIn}`}>
                    <h2 className={styles.title}>Memory Matching</h2>
                    <h3>Rules</h3>
                    <hr/>
                    <p className={styles.text}>The board contains different pairs of Lucid x Anonymous art.</p>
                    <p className={styles.text}>Clicking on a tile will reveal the art it contains.</p>
                    <p className={styles.text}>While a tile is revealed, selecting another tile will either reveal its art (if the art is the same), or close your open tile (if the art is different)</p>
                    <p className={styles.text}>The aim is to open all the tiles, and get the highest score possible.</p>
                    <p className={styles.text}>Good luck!</p>

                    <button className={styles.close} onClick={() => {setVisibility(false)}}>X</button>
                </div>
            </div>
        </div>
    )
}