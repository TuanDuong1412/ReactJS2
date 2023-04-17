import React from 'react';
import { useState } from 'react';
const Sum = () => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [sum, setSum] = useState(0);
    const [multiply, setMultiply] = useState(0);

  const handleSum = () => {
    setSum(number1 + number2);
  }

  const handleMultiply = () => {
    setMultiply(number1 * number2);
  }

    return (
        <div>
        <h1>Calculator</h1>
        <input type="number" value={number1} onChange={e => setNumber1(parseInt(e.target.value))} />
        <input type="number" value={number2} onChange={e => setNumber2(parseInt(e.target.value))} />
        <div>
          <button onClick={handleSum}>Sum</button>
          <button onClick={handleMultiply}>Multiply</button>
        </div>
        <p>Sum: {sum}</p>
        <p>Multiply: {multiply}</p>
      </div>
    );
};

export default Sum;