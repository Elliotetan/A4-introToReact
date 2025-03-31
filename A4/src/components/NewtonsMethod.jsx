import React, { useState } from 'react';

function Newton() {
  const [rootGuess, setRootGuess] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setRootGuess(value);
  };

  const calculateRoot = (e) => {
    e.preventDefault();
    let x0 = Number(rootGuess);
    let x1 = 0;
    let iteration = 0;
    setResult('Calculating...');

    while (true) {
      x1 = (x0 - (6 * (x0 ** 4) - 13 * (x0 ** 3) - 18 * (x0 ** 2) + 7 * x0 + 6) / (24 * (x0 ** 3) - 39 * (x0 ** 2) - 36 * x0 + 7));
      if (Math.abs(x1 - x0) < 0.001) {
        setResult(Math.round(x1 * 100) / 100);
        break;
      }
      if (iteration === 500) {
        setResult('No convergence');
        break;
      }
      x0 = x1;
      iteration++;
    }
  };

  return (
    <form className="container" onSubmit={calculateRoot}>
      <h1 className="header">Newton's Method</h1>
      <label htmlFor="root-guess">Root Guess: </label><br />
      <input type="number" id="root-guess" name="root-guess" value={rootGuess} onChange={handleInputChange} placeholder="Enter your guess"/>
      <button className="calculate" type="submit" id="newtonSubmit">Calculate</button>
      <label htmlFor="root-approximation">Root Approximation:</label>
      <input type="number" id="newtonResult" name="newtonResult" value={result}  readOnly/>
    </form>
  );
};

export default Newton;
