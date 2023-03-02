function App() {
  const arr = [
    [1, 2],
    [3, 4],
    [5, [6, 7]],
  ];
  const flattenArr = (inputArr) =>
    inputArr.reduce((farr, elem) => {
      if (Array.isArray(elem)) {
        return farr.concat(flattenArr(elem));
      } else {
        return farr.concat(elem);
      }
    }, []);
  console.log(flattenArr(arr));
  return <div className="bg-black w-screen h-screen text-white"></div>;
}

export default App;
