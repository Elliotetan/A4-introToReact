import { useState } from 'react'
import './App.css'
import Ambig from './components/AmbiguousCase.jsx';
import Heron from './components/HeronsFormula.jsx'
import Newton from './components/NewtonsMethod.jsx'
import Poly from './components/PolynomialFunction.jsx'

function App() {

    return (
        <div className='formulas'>
            <Heron />
            <Ambig />
            <Newton />
            <Poly />
        </div>
    )
}

export default App
