import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ambig from './components'
import heron from './components'
import newton from './components'
import poly from './components'

function App() {

    return (
        <div className='formulas'>
            <ambig />
            <heron />
            <newton />
            <poly />
        </div>
    )
}

export default App
