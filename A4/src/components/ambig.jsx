import React, { useState } from 'react';
import './components.css'

function ambig() {
    const [angleA, setA] = useState('');
    const [sideA, setB] = useState('');
    const [sideB, setC] = useState('');
    const [result, setResult] = useState('');

    // Function to calculate the ambiguous case
    const ambigCase = (e) => {
        e.preventDefault();  // Prevent default form submission

        const angle = Number(angleA);
        const sideA = Number(sideA);
        const sideB = Number(sideB);
        const hy = sideB * Math.sin(angle * (Math.PI / 180));

        if (0 < angle && angle <= 90) {
            if (sideA < hy) {
                setResult("No triangle");
            } else if (sideA === hy) {
                setResult("Right triangle");
            } else if (sideA > sideB) {
                setResult("One triangle");
            } else if (hy < sideA && sideA < sideB) {
                setResult("Two triangles (ambiguous case)");
            }
        } else if (90 < angle && angle < 180) {
            if (sideA < sideB || sideA === sideB) {
                setResult("No triangle");
            } else if (sideA > sideB) {
                setResult("One triangle");
            }
        } else {
            setResult("No triangle");
        }
    };

    return (
        <form onSubmit={ambigCase}>
            <h1 className="header">Ambiguous Case</h1>
            <label>Angle A:</label>
            <input type="number" value={angleA} onChange={(event) => setA(event.target.value)} required />
            <label>Side a:</label>
            <input type="number" value={sideA} onChange={(event) => setB(event.target.value)} required />
            <label>Side b:</label>
            <input type="number" value={sideB} onChange={(event) => setC(event.target.value)} required />
            <button className="calculate" type="submit" id="ambiguousSubmit">Calculate</button>
            <label>Triangle Type (Result)</label>
            <input type="text" id="amb-result" name="amb-result" value={result} readOnly />
        </form>
    );
}

export default ambig;
