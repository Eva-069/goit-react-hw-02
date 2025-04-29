import { useState, useEffect } from "react";
import Feedback from '../Feedback/Feedback'
import Options from "../Options/Options";
import Notification from '../Notification/Notification';
import styles from './App.module.css';

export default function App() {
    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = localStorage.getItem('feedback');
        return savedFeedback
            ? JSON.parse(savedFeedback)
            : { good: 0, neutral: 0, bad: 0 }
    });

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));

    }, [feedback]);

    const updateFeedback = feedbackType => {
        setFeedback(prevFeedback => ({
            ...prevFeedback,
            [feedbackType]: prevFeedback[feedbackType] + 1,
        }));
    };

    const resetFeedback = () => {
        setFeedback({ good: 0, neutral: 0, bad: 0 });
    };

    const { good, neutral, bad } = feedback;
    const totalFeedback = good + neutral + bad;
    const positiveFeedback = Math.round((good / totalFeedback) * 100) || 0;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Sip Happens Café</h1>
            <p className={styles.description}> Please leave your feedback about our service by selecting one of the options below.</p>

            <Options
                updateFeedback={updateFeedback}
                resetFeedback={resetFeedback}
                totalFeedback={totalFeedback}
            />

            {totalFeedback > 0 ? (
                <Feedback
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={totalFeedback}
                    positivePercentage={positiveFeedback}
                />

            ) : (
                <Notification message="There is no feedback yet"/> 
            )}
        </div>
    )

}