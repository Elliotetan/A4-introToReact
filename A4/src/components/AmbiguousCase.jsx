import React, { useState } from 'react';
import './style.css';


function Ambig() { //PascalCase
    const [angleA, setA] = useState('');
    const [sideA, setB] = useState('');
    const [sideB, setC] = useState('');
    const [result, setResult] = useState('');

    const ambigCase = (e) => { //camelCase
        e.preventDefault();  

        const angle = Number(angleA);
        const aSide = Number(sideA); //camelCase
        const bSide = Number(sideB); //camelCase
        const hy = bSide * Math.sin(angle * (Math.PI / 180));

        if (0 < angle && angle <= 90) {
            if (aSide < hy) {
                setResult("No triangle");
            } else if (aSide === hy) {
                setResult("Right triangle");
            } else if (aSide > bSide) {
                setResult("One triangle");
            } else if (hy < aSide && aSide < bSide) {
                setResult("Two triangles (ambiguous case)");
            }
        } else if (90 < angle && angle < 180) {
            if (aSide < bSide || aSide === bSide) {
                setResult("No triangle");
            } else if (aSide > bSide) {
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
            <input type="number" value={angleA} onChange={(event) => setA(Number(event.target.value))} required />
            <label>Side a:</label>
            <input type="number" value={sideA} onChange={(event) => setB(Number(event.target.value))} required />
            <label>Side b:</label>
            <input type="number" value={sideB} onChange={(event) => setC(Number(event.target.value))} required />
            <button className="calculate" type="submit" id="ambiguousSubmit">Calculate</button>
            <label>Triangle Type (Result)</label>
            <input type="text" id="amb-result" name="amb-result" value={result} readOnly />
        </form>
    );
}

export default Ambig;
