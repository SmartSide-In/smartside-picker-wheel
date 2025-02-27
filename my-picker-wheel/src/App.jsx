import { useState, useRef } from "react";
import { Wheel } from "react-custom-roulette";
import Confetti from "react-confetti";

const App = () => {
  const [options, setOptions] = useState([
    { option: "Apple" },
    { option: "Banana" },
    { option: "Cherry" },
    { option: "Date" },
  ]);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [winner, setWinner] = useState(null);
  const inputRef = useRef(null);

  const handleSpinClick = () => {
    if (options.length === 0) return;
    const newPrizeNumber = Math.floor(Math.random() * options.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const handleStop = () => {
    setMustSpin(false);
    setWinner(options[prizeNumber].option);
  };

  const handleAddOption = () => {
    const newOption = inputRef.current.value.trim();
    if (newOption) {
      setOptions([...options, { option: newOption }]);
      inputRef.current.value = "";
    }
  };

  const handleRemoveOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Picker Wheel</h1>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={options}
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

      {winner && (
        <>
          <h2 className="mt-4 text-xl font-semibold">Winner: {winner}</h2>
          <Confetti />
        </>
      )}

      <div className="mt-6 w-full max-w-md">
        <input
          type="text"
          ref={inputRef}
          className="border border-gray-300 p-2 w-full rounded-md"
          placeholder="Enter an option"
        />
        <button
          onClick={handleAddOption}
          className="mt-2 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
        >
          Add Option
        </button>
      </div>

      <ul className="mt-4 w-full max-w-md">
        {options.map((item, index) => (
          <li
            key={index}
            className="flex justify-between bg-gray-200 p-2 mt-2 rounded-lg"
          >
            {item.option}
            <button
              onClick={() => handleRemoveOption(index)}
              className="text-red-500"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
