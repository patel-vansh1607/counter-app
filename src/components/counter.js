import { useState } from "react"

const CounterApp = () => {
    const [count, setCounter] = useState("0")

    const incrementButton = () => {
        setCounter(count+1)
    }
    return(
        <div>
            <p>{count}</p>
            <div className="buttons">
                <button onClick={incrementButton}>+</button>
                <button onClick={decrementButton}>-</button>
            </div>
        </div>
    )
}

export default CounterApp