import { useRef, useState } from "react";
import { Wheel } from "react-custom-roulette";
import "./App.css";
import questions from "./Questions";

// Import your logo - you'll need to add your logo file to your project
// For example in the src folder or public folder
import logo from './assets/logo.png'; // Uncomment and update path

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
  const [setHasSpun] = useState(false); // Fixed the state declaration

  const handleSpinClick = () => {
    if (mustSpin) return; // Only prevent spinning while actively spinning
  
    const newPrizeNumber = Math.floor(Math.random() * domains.length);
  
    // Add extra rotations to ensure full spin
    setPrizeNumber((prevPrize) => (prevPrize + newPrizeNumber + domains.length * 5) % domains.length);
  
    setMustSpin(true);
    setSelectedDomain(null);
    setQuestion(null);
    setShowAnswer(false);
    setHasSpun(true); // Track that we've spun the wheel
  };  
  
  const handleStop = () => {
    setMustSpin(false); // Reset the spin state
  
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
  
  // Get domain color
  const getDomainColor = (domain) => {
    const colorMap = {
      "Python": "#306998",
      "AI/ML": "#FF6384",
      "Web Development": "#36A2EB",
      "Databases": "#4BC0C0",
      "Fun Facts": "#FFCE56",
      "Cybersecurity": "#9966FF"
    };
    return colorMap[domain] || "#36A2EB";
  };

  return (
    <div className="container">
      {/* Logo Container */}
      <div className="logo-container">
        {/* If using an imported logo: */}
        <img src={logo} alt="Tech Trivia Logo" className="logo" />
        
        {/* Or if using a logo from public folder: */}
        {/* <img src="/assets/logo.png" alt="Tech Trivia Logo" className="logo" /> */}
      </div>

      <h1 className="title">Tech Trivia Wheel</h1>

      <div className="content">
        {/* Spinner */}
        <div className="wheel-container">
          <div className="wheel-wrapper">
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={domains}
              onStopSpinning={handleStop}
              backgroundColors={domains.map(domain => getDomainColor(domain.option))}
              textColors={["#ffffff"]}
              fontSize={14}
              outerBorderColor="#191a23"
              outerBorderWidth={3}
              innerRadius={40}
              innerBorderColor="#191a23"
              innerBorderWidth={2}
            />
            <button 
              className="spin-button" 
              onClick={handleSpinClick} 
              disabled={mustSpin}
            >
              {mustSpin ? "Spinning..." : "Spin"}
            </button>
          </div>
        </div>

        {/* Question box with enhanced styling */}
        <div className="question-box">
          {selectedDomain && question ? (
            <>
              <div
                className="domain-banner"
                style={{ backgroundColor: getDomainColor(selectedDomain) }}
              >
                <h2>{selectedDomain}</h2>
              </div>

              <div className="question-content">
                <div className="question-row">
                  <p className="question-text">{question.question}</p>

                  {/* Small Reveal Answer Button */}
                  {!showAnswer && (
                    <button
                      className="reveal-answer-button"
                      onClick={() => {
                        setShowAnswer(true);
                        clearInterval(timerRef.current); // Clear the timer
                      }}
                    >
                      Reveal
                    </button>
                  )}
                </div>

                {!showAnswer ? (
                  <div className="timer-container">
                    <svg className="timer-spinner" width="100" height="100" viewBox="0 0 100 100">
                      {/* Background Circle */}
                      <circle cx="50" cy="50" r="45" stroke="#ddd" strokeWidth="8" fill="none" />

                      {/* Progress Circle (Animated Countdown) */}
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke={timeLeft > 20 ? "green" : timeLeft > 10 ? "orange" : "red"}
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray="283"  /* Full circle length */
                        strokeDashoffset={`${(1 - timeLeft / 30) * 283}`} /* Decreases smoothly */
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)" /* Rotate for proper animation */
                        style={{ transition: "stroke-dashoffset 1s linear" }} /* Smooth transition */
                      />
                    </svg>

                    {/* Timer Text (Centered) */}
                    <p className="timer-text">{timeLeft}s</p>
                  </div>
                ) : (
                  <div className="answer-container">
                    <h3>Answer:</h3>
                    <p className="answer-text">{question.answer}</p>
                    <button 
                      className="next-question-button" 
                      onClick={handleSpinClick}
                    >
                      Next Question
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="welcome-content">
              <div className="welcome-header">
                <h2>Welcome to Tech Trivia!</h2>
              </div>

              <div className="instructions">
                <h3>How to play:</h3>
                <ol>
                  <li>Spin the wheel to select a random tech category</li>
                  <li>Answer the question within 30 seconds</li>
                  <li>The answer will be revealed when time runs out or by clicking "Reveal"</li>
                </ol>
              </div>

              <div className="categories-preview">
                <h3>Categories:</h3>
                <div className="category-chips">
                  {domains.map((domain, index) => (
                    <span
                      key={index}
                      className="category-chip"
                      style={{ backgroundColor: getDomainColor(domain.option) }}
                    >
                      {domain.option}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;