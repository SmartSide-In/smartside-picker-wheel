import { useState, useRef } from "react";
import { Wheel } from "react-custom-roulette";

const domains = [
  { option: "Python" },
  { option: "AI/ML" },
  { option: "Web Development" },
  { option: "Databases" },
  { option: "Fun Facts" },
  { option: "Cybersecurity" }
];

// Questions for each domain
const questions = {
  "Python": [
    { question: "What is the output of 2 ** 3 in Python?", answer: "8" },
    { question: "Which keyword is used to define a function?", answer: "def" },
    // Add 50+ more questions
  ],
  "AI/ML": [
    { question: "What does CNN stand for in Deep Learning?", answer: "Convolutional Neural Network" },
    { question: "What is supervised learning?", answer: "A type of ML where data is labeled" },
  ],
  "Web Development": [
    { question: "What does HTML stand for?", answer: "HyperText Markup Language" },
    { question: "What is the purpose of CSS?", answer: "To style web pages" },
  ],
  "Databases": [
    { question: "What does SQL stand for?", answer: "Structured Query Language" },
    { question: "What is a primary key?", answer: "A unique identifier for a row in a table" },
  ],
  "Fun Facts": [
    { question: "Which planet is known as the Red Planet?", answer: "Mars" },
    { question: "What is the largest mammal on Earth?", answer: "Blue Whale" },
  ],
  "Cybersecurity": [
    { question: "What does HTTPS stand for?", answer: "HyperText Transfer Protocol Secure" },
    { question: "What is phishing?", answer: "A cyber attack using deceptive emails" },
  ]
};

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
    
    // Pick a random question from the domain
    const randomQuestion = questions[domain][Math.floor(Math.random() * questions[domain].length)];
    setQuestion(randomQuestion);

    // Start 30s timer
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Spin the Wheel</h1>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={domains}
          onStopSpinning={handleStop}
          backgroundColors={["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"]}
          textColors={["#ffffff"]}
        />
      </div>

      <button
        onClick={handleSpinClick}
        className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
      >
        Spin
      </button>

      {selectedDomain && question && (
        <div className="mt-6 text-center p-4 bg-white shadow-md rounded-md w-3/4">
          <h2 className="text-xl font-bold">Category: {selectedDomain}</h2>
          <p className="mt-2 text-lg">{question.question}</p>

          {!showAnswer ? (
            <p className="mt-4 text-red-500 font-bold">Time Left: {timeLeft}s</p>
          ) : (
            <p className="mt-4 text-green-500 font-bold">
              Answer: {question.answer}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
