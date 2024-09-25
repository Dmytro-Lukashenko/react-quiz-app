import quizImage from '../assets/quiz-logo.png'

const Header = () => {
    return (
        <header>
            <img src={quizImage} alt="Quiz Logo" />
            <h1>ReactQuiz</h1>
        </header>
    )
}

export default Header;