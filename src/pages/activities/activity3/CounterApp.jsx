import React, { useState, useEffect } from "react";
import "./CounterApp.css";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count === 0) {
      setMessage("You haven't clicked yet.");
    } else if (count < 5) {
      setMessage("Keep clicking!");
    } else {
      setMessage("Wow! You clicked a lot!");
    }
  }, [count]); 

  return (
    <main className="mains">
      <h1>Simple Counter</h1>
      <h2>Count: {count}</h2>
      <p>{message}</p>

      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </main>
  );
}

export default CounterApp;