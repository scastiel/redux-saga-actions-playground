import React from 'react'

export default function Counter({ counter, increment, incrementAsync }) {
  return (
    <div className="counter">
      Counter: <strong className="counterValue">{counter}</strong>
      <button className="incrementButton" onClick={() => increment()}>
        +
      </button>
      <button className="incrementAsyncButton" onClick={() => incrementAsync()}>
        + async
      </button>
    </div>
  )
}
