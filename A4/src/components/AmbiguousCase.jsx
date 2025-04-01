import React, { useState } from 'react';
import './style.css';


function Ambig() {
    const [angleA, setA] = useState('');
    const [sideA, setB] = useState('');
    const [sideB, setC] = useState('');
    const [result, setResult] = useState('');

    const ambigCase = (e) => {
        e.preventDefault();  // Prevent default form submission

        const angle = Number(angleA);
        const A = Number(sideA);
        const B = Number(sideB);
        const hy = B * Math.sin(angle * (Math.PI / 180)); // Calculate height (using sine of the angle)

        // Check the angle and side conditions for ambiguous cases
        if (0 < angle && angle <= 90) {
            if (A < hy) {
                setResult("No triangle");
            } else if (A === hy) {
                setResult("Right triangle");
            } else if (A > B) {
                setResult("One triangle");
            } else if (hy < A && A < B) {
                setResult("Two triangles (ambiguous case)");
            }
        } else if (90 < angle && angle < 180) {
            if (A < B || A === B) {
                setResult("No triangle");
            } else if (A > B) {
                setResult("One triangle");
            }
        } else {
            setResult("No triangle");
        }
    };

    return (
        <form className="container" onSubmit={ambigCase}>
            <h1 className="header">Ambiguous Case</h1>
            <label>Angle A:</label>
            <input type="number" value={angleA} onChange={(event) => setA(Number(event.target.value))} required/>
            <label>Side a:</label>
            <input type="number" value={sideA} onChange={(event) => setB(Number(event.target.value))} required/>
            <label>Side b:</label>
            <input type="number" value={sideB} onChange={(event) => setC(Number(event.target.value))} required/>
            <button className="calculate" type="submit" id="ambiguousSubmit">Calculate</button>
            <label>Triangle Type (Result)</label>
            <input type="text" id="amb-result" name="amb-result" value={result} readOnly />
        </form>
    );
}

export default Ambig;
