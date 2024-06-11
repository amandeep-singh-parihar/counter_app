import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increaseHandler() {
    setCount(count + 1);
  }

  function deacreaseHandler() {
    setCount(count - 1);
  }

  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="background h-screen w-full flex flex-col justify-center items-center">
      <div className="text-white font-bold text-4xl">
        Increament & Decrement
      </div>
      <div className="flex items-center justify-between bg-white h-fit w-[15vw] p-2 mt-3 rounded-2xl">
        <button
          onClick={deacreaseHandler}
          className="border-r-4 pr-4 pl-3 text-black font-bold text-5xl"
        >
          -
        </button>

        <div className="text-black font-bold text-5xl">{count}</div>

        <button
          onClick={increaseHandler}
          className="pl-4 pr-3 text-black font-bold text-5xl border-l-4"
        >
          +
        </button>
      </div>
      <button
        onClick={resetHandler}
        className="text-white font-semibold text-md bg-blue-500 mt-3 rounded-full min-w-[5vw]"
      >
        Reset
      </button>
    </div>
  );
}

export default App;
