import React, { useState } from 'react';
// import './App.css';

function Heron() {
    const [sideA, setA] = useState('');
    const [sideB, setB] = useState('');
    const [sideC, setC] = useState('');
    const [area, setArea] = useState(null);

    const heronFormula = (e) => {
        e.preventDefault();

        const a = Number(sideA) 
        const b = Number(sideB) 
        const c = Number(sideC) 
        const calculatedArea = Math.round((0.25 * Math.sqrt(4 * a * a * b * b - (a * a + b ** 2 - c ** 2) ** 2)) * 100) / 100;
        setArea(calculatedArea);
    };

    return (
        <form className="container" onSubmit={heronFormula}>
            <h1 className="header">Heron's Formula</h1>
            <label>Side a:</label>
            <input type="number" id="side-a-heron" name="a" value={sideA} onChange={(event) => setA(event.target.value)}/>
            <label>Side b:</label>
            <input type="number" id="side-b-heron" name="b" value={sideB} onChange={(event) => setB(event.target.value)}/>
            <label>Side c:</label>
            <input type="number" id="side-c-heron" name="c" value={sideC} onChange={(event) => setC(event.target.value)}/>
            <button type="submit" className="calculate" id="heronSubmit">Calculate</button>
            <label>Area Result:</label>
            <input type="number" id="heron-result" name="heron-result" value={area || ''} readOnly />
        </form>
    );
};

// input type="number" value={angleA} onChange={(event) => setA(event.target.value)} required 

export default Heron;
