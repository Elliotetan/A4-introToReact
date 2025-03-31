import React, { useState } from 'react';
// import './components.css';

const Poly = () => {
    const [coefficients, setCoefficients] = useState('');
    const [exponents, setExponents] = useState('');
    const [xValue, setXValue] = useState('');
    const [polynomialFunction, setPolynomialFunction] = useState('');
    const [polynomialEvaluation, setPolynomialEvaluation] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'coefficients') setCoefficients(value);
        if (name === 'exponents') setExponents(value);
        if (name === 'x-value') setXValue(value);
    };

    const calculatePolynomial = (e) => {
        e.preventDefault();

        const coeffArray = coefficients.split(' ').map(Number);
        const expArray = exponents.split(' ').map(Number);
        const x = parseFloat(xValue);
        let result = 0;
        let polynomial = '';

        for (let i = 0; i < expArray.length; i++) {
            let coeff = coeffArray[i];
            let exp = expArray[i];

            result += coeff * Math.pow(x, exp);

            if (coeff !== 0) {
                let sign = coeff < 0 ? '' : i > 0 ? '+' : '';
                if (exp !== 0) {
                    polynomial += `${sign}${coeff}x^${exp}`;
                } else {
                    polynomial += `${sign}${coeff}`;
                }
            }
        }

        setPolynomialFunction(polynomial);
        setPolynomialEvaluation(result);
    };

    return (
        <form className="container" onSubmit={calculatePolynomial}>
            <h1 className="header">Polynomial function</h1>
            <label htmlFor="coefficients">Coefficients:</label><br />
            <input type="text" id="coefficients" name="coefficients" value={coefficients} onChange={handleInputChange} />
            <label htmlFor="exponents">Exponents:</label><br />
            <input type="text" id="exponents" name="exponents" value={exponents} onChange={handleInputChange} />
            <label htmlFor="x-value">x Value:</label><br />
            <input type="number" id="x-value" name="x-value" value={xValue} onChange={handleInputChange} />
            <button className="calculate" type="submit" id="polySubmit"> Calculate</button>
            <label htmlFor="polynomial-result">Polynomial Function (Result):</label><br />
            <input type="text" id="polynomial-function" name="polynomial-function" value={polynomialFunction} readOnly />
            <label htmlFor="polynomial-evaluation">Polynomial Evaluation (Result):</label><br />
            <input type="number" name="polynomial-evaluation" id="polynomial-evaluation" value={polynomialEvaluation} readOnly />
        </form>
    );
};

export default Poly;
