import { useEffect, useRef, useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [displayedInput, setDisplayedInput] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayedInput(input);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  return (
    <div className="bg-black w-screen h-screen text-white flex flex-col">
      <span className="text-white text-4xl text-center mt-12">
        {displayedInput}
      </span>
      <input
        className="bg-inherit text-white text-2xl p-4 m-auto border-2 border-white"
        type="text"
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      />
    </div>
  );
}

export default App;
