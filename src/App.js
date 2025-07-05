import { useState } from "react";
import "./styles.css";

export default function Counter() {
  const [currentVal, setCurrentVal] = useState(0);
  const [oddCounter, setOddCounter] = useState(0);
  const [evenCounter, setEvenCounter] = useState(0);

  function incrementC() {
    let counterDisplay;
    counterDisplay = Math.floor(Math.random() * 100) + 1;
    setCurrentVal(counterDisplay);
    if (counterDisplay % 2 === 0) {
      setEvenCounter(evenCounter + 1);
      console.log(evenCounter);
    } else {
      setOddCounter(oddCounter + 1);
      console.log(oddCounter);
    }
  }

  return (
    <div className="App">
      <button onClick={incrementC}>counter</button>
      <p>currentVal: {currentVal}</p>
      <p>oddCounter: {oddCounter}</p>
      <p>evenCounter: {evenCounter}</p>
    </div>
  );
}
