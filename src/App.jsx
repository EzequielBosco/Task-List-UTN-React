import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const incrementar = () => {
    setCount(count + 1)
  }

  const decrementar = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    if (count > 10) setCount(0)
    if (count < 1) setCount(0)
  }, [count])

  return (
    <>
      <h1>Vite + React</h1>
      <div className="div-count">
        <button onClick={decrementar}>-</button>
        <div className="card">
          count is {count}
        </div>
        <button onClick={incrementar}>+</button>
      </div>
    </>
  )
}

export default App