import { useState } from "react";
import { statesObj } from "./States";

function App() {
  const [states, setStates] = useState(statesObj);

  const handleStateSelected = (stateSelected) => {
    console.log(stateSelected);
    setStates((current) =>
      current.map((state) => {
        if (state.name === stateSelected) {
          return { ...state, checked: !state.checked };
        } else {
          return state;
        }
      })
    );
  };
  return (
    <div className="bg-black w-screen h-screen text-white flex flex-col">
      <select
        className="bg-inherit w-fit mx-auto text-2xl p-12"
        onChange={(e) => handleStateSelected(e.target.value)}
      >
        <option>--select state--</option>
        {states.map((elem, i) => (
          <option key={i}>{elem.name}</option>
        ))}
      </select>
      <div className="p-12 grid grid-cols-3">
        {states.map((elem, index) => (
          <div key={index} className="text-2xl w-[1/3] p-2">
            <input
              type="checkbox"
              checked={elem.checked}
              onChange={() => handleStateSelected(elem.name)}
            />
            <span>{elem.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
