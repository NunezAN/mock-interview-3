import axios from "axios";
import { useEffect, useRef, useState } from "react";

function App() {
  const [results, setResults] = useState({});
  useEffect(() => {
    const fetchResults = async () => {
      const results = await axios.get("https://www.boredapi.com/api/activity");

      setResults(results.data);
      // console.log(results.data);
    };
    fetchResults();
  }, []);
  return (
    <div className="bg-black w-screen h-screen text-white flex flex-col">
      <span className="text-white text-4xl text-center mt-12">
        {results.activity}
      </span>
    </div>
  );
}

export default App;
