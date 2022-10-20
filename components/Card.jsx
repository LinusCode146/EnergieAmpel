import styles from "./Card.module.css";
import { useRef } from "react";

export default function Card(props){
    const { title, description, color } = props;
    const cardRef = useRef();

    function colorHandler(){
        cardRef.current.style.background = color;
    }

    return (
        <div  onClick={colorHandler} className={styles.container}>
            <div ref={cardRef} className={styles.card}>
                <div className={styles.icon}>
                    <ion-icon name="diamond-outline"></ion-icon>
                </div>
                <div className={styles.content}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}