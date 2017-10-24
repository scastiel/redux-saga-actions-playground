import React from 'react'

export default function Counter({ counter, increment }) {
  return (
    <div className="counter">
      Counter: <strong className="counterValue">{counter}</strong>
      <button className="incrementButton" onClick={() => increment()}>
        +
      </button>
    </div>
  )
}
