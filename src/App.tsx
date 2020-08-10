import * as React from "react";

const App = () => {
  const [inputSize, setInputSize] = React.useState("3");
  const size = Number(inputSize) || 0;
  const getNums = (size: number) => {
    return size <= 0
      ? []
      : [...Array(size - 1).keys()].reduce(
          (acc) => [...acc, acc[acc.length - 1] + "7"],
          ["7"]
        );
  };

  const [inputK, setK] = React.useState("7");
  const k = Number(inputK) || 0;
  const getFlags = (k: number) => {
    let x = 7 % k;
    const s = new Set();
    let i = 0;
    while(!s.has(x)) {
      s.add(x);
      if(x === 0) return [i];
      x = (10 * x + 7) % k;
      i++;
    }
    return [];
  };
  const flags = new Set(getFlags(k));
  console.log(flags);

  return (
    <div>
      <div>
        <label>n: </label>
        <input
          type="text"
          onChange={(e) => {
            setInputSize(e.target.value);
          }}
          value={inputSize}
        ></input>
      </div>
      <div>
        <label>k: </label>
        <input
          type="text"
          onChange={(e) => {
            setK(e.target.value);
          }}
          value={inputK}
        ></input>
      </div>
      {getNums(size).map((n, i) => (
        <p style={{ color: flags.has(i) ? "red" : "black" }}>
          {++i}:{n}
        </p>
      ))}
    </div>
  );
};

export default App;
