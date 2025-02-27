import { useState, useRef } from "react";
import { Wheel } from "react-custom-roulette";
import "./App.css";
import questions from "./Questions";

const domains = [
  { option: "Python" },
  { option: "AI/ML" },
  { option: "Web Development" },
  { option: "Databases" },
  { option: "Fun Facts" },
  { option: "Cybersecurity" }
];

const App = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [question, setQuestion] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const timerRef = useRef(null);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * domains.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    setSelectedDomain(null);
    setQuestion(null);
    setShowAnswer(false);
  };

  const handleStop = () => {
    const domain = domains[prizeNumber].option;
    setSelectedDomain(domain);
    const randomQuestion = questions[domain][Math.floor(Math.random() * questions[domain].length)];
    setQuestion(randomQuestion);
    setTimeLeft(30);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setShowAnswer(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="container">
      <h1 className="title">Spin the Wheel</h1>
      
      <div className="content">
        {/* Spinner */}
        <div className="wheel-container">
          <button className="spin-button" onClick={handleSpinClick}>Spin</button>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={domains}
            onStopSpinning={handleStop}
            backgroundColors={["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"]}
            textColors={["#ffffff"]}
          />
        </div>
  
        {/* Question Box - Only show if a question is available */}
        {selectedDomain && question && (
          <div className="question-box">
            <h2>Category: {selectedDomain}</h2>
            <p>{question.question}</p>
            {!showAnswer ? (
              <p className="timer">Time Left: {timeLeft}s</p>
            ) : (
              <p className="answer">Answer: {question.answer}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}  

export default App;
