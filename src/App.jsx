import { states } from "./States";

function App() {
  return (
    <div className="bg-black w-screen h-screen text-white flex flex-col">
      <select className="bg-inherit w-fit mx-auto text-2xl p-12">
        <option>--select state--</option>
        {states.map((elem, i) => (
          <option key={i}>{elem.name}</option>
        ))}
      </select>
      <div className="p-12 flex flex-wrap items-center justify-between">
        {states.map((elem, index) => (
          <div key={index} className="w-48 p-2">
            <input type="checkbox" />
            <span>{elem.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
