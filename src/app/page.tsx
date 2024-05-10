'use client'
import Provider from "@/components/context";
import Header from "@/components/header";
import styles from "./page.module.css";
import Board from "@/components/board";
import Instructions from "@/components/instructions";

export default function Home() {
  return (
    <Provider>
      <main className={styles.main}>
        <Header/>
        <Board />
        <Instructions />
      </main>
    </Provider>
  );
}
