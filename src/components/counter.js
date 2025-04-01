import { useState } from "react"
import "../styles/counter.css"

const CounterApp = () => {
    const [count, setCounter] = useState(0)

    const incrementButton = () => {
        setCounter(count+1)
    }

    const decrementButton = () => {
        setCounter(count-1)
    }

    const resetButton = () => {
        setCounter(0)
    }
    
    return(
        <div className="main-sec">
            <h1>Counter Buttons</h1>
            <p className={count < 0 ? 'negativeCount' : (count > 0 ? 'positiveCount' : '')}>{count}</p>
            <div className="buttons">
                <button onClick={incrementButton} className="incrementButton">+</button>
                <button onClick={decrementButton} className="decrementButton">-</button>
                <button onClick={resetButton} className="resetButton">Reset</button>
            </div>
        </div>
    )
}

export default CounterApp