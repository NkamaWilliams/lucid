'use client'
import styles from "@/styles/header.module.css"
import { useAppContext } from "./context"
import Logo from "./logo"

export default function Header(){
    const context = useAppContext()
    return(
        <header className={styles.header}>
            <div className={`${styles.logoContainer}`}>
                <Logo/>

                <div className={styles.scorecard}>
                    <h2>Score</h2>
                    <p className={styles.score}>{context?.score}</p>
                </div>
            </div>
        </header>
    )
}