import React, { useState } from "react";

export default () => {
  let [count, setCount] = useState(999);

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
};
