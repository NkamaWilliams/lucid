'use client'
import styles from "@/styles/finish.module.css"
import { useAppContext } from "./context"

interface Props{
    highscore: number,
    disp: boolean
}

export default function Finish({highscore, disp}: Props){
    const context = useAppContext()
    // ${context?.gameOver ? "" : styles.hide}
    return(
        <div className={`${styles.finish} ${disp && styles.display}`}>
            <div className={styles.container}>
            <div className={styles.overlay}>
                <h2 className={styles.caption}>Game Over!</h2>
                <p className={styles.highscore}>High Score: {highscore}</p>

                <button className={styles.replaybtn} onClick={() => {context?.updateGameOver(!context.gameOver)}}>Replay</button>
            </div>
            </div>
        </div>
    )
}