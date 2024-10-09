import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

      function add(){
        setCount(count+1)
      }
      function sub(){
        setCount(count-1)
      }
  return (
    <>
      
      <h1>Hello world</h1>
      {count}
      <button onClick={add}>ADD</button>
      <button onClick={sub}>SUB</button>
    </>
  )
}

export default App
