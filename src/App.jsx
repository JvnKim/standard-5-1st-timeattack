import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const add = () => {
    const value = parseFloat(inputValue);
    if (!isNaN(value)) {
      setCount(count + value);
    }
  };

  const subtract = () => {
    const value = parseFloat(inputValue);
    if (!isNaN(value)) {
      setCount(count - value);
    }
  };

  const reset = () => {
    setCount(0);
    setInputValue("");
  };

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        만큼을 <button onClick={add}>더할게요</button>
        <button onClick={subtract}>뺄게요</button>
        <button onClick={reset}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{count}</p>
      </div>
    </div>
  );
}
