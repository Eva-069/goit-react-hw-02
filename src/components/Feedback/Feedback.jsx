import styles from './Feedback.module.css';

export default function Feedback({ good, neutral, bad, total, positivePercentage }) {
    return (
        <div className={styles.feedback}>
            <h2 className={styles.title}>Feedback Statistics</h2>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <span className={styles.label}>Good:</span>
                    <span className={styles.value}>{good}</span>
                </li>   
                <li className={styles.item}>
                    <span className={styles.label}>Neutral:</span>
                    <span className={styles.value}>{neutral}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>Bad:</span>
                    <span className={styles.value}>{bad}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>Total feedback:</span>
                    <span className={styles.value}>{total}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>Positive feedback:</span>
                    <span className={styles.value}>{positivePercentage}</span>
                </li>
        </ul>
        </div>
    )
}