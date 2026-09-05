import React, { useState, useMemo, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  const square = useMemo(() => {
    return count * count;
  }, [count]);

  const increase = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>Advanced Hooks Example</h1>

      <h2>Count: {count}</h2>
      <h2>Square: {square}</h2>

      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default App;