import { useState } from 'react';
import QUESTIONS from '../questions.js';
import quizComplete from '../assets/quiz-complete.png'

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = (selectedAnswer) => {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer]
        });
    }

    if(quizIsComplete) {
        return (
        <div id="summary">
            <img src={quizComplete} alt="Trophy icon" />
            <h2>Quiz Completed!</h2>
        </div>
        )
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers].sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => {
                        return (
                            <li key={answer} className="answer">
                                <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Quiz;