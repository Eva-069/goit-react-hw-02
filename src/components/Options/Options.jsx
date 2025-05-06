import styles from './Options.module.css';

export default function Options({ updateFeedback, resetFeedback, totalFeedback }) {
    return (
        <div className={styles.options}>
            <div className={styles.buttonContainer}>
                <button
                    onClick={() => updateFeedback('good')}
                    className={`${styles.button} ${styles.goodButton}`}
                >
                    Good
                </button>
                <button
                    onClick={() => updateFeedback('neutral')}
                    className={`${styles.button} ${styles.neutralButton}`}
                >
                    Neutral
                </button>
                <button
                    onClick={() => updateFeedback('bad')}
                    className={`${styles.button} ${styles.badButton}`}
                >
                    Bad
                </button>
            </div>

            {totalFeedback > 0 && (
                <button
                    onClick={resetFeedback}
                    className={`${styles.button} ${styles.resetButton}`}
                >
                    Reset
                </button>
            )}

        </div>
    );
}