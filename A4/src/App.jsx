import { useState } from 'react'
import './App.css'
import Ambig from './components/ambig.jsx';
import Heron from './components/heron.jsx'
import Newton from './components/newton.jsx'
import Poly from './components/poly.jsx'

function App() {

    return (
        <div className='formulas'>
            <Ambig />
            <Heron />
            <Newton />
            <Poly />
        </div>
    )
}

export default App
