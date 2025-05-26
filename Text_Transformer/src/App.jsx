import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [text, setText] = useState('')
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='flex'>
        <h1>Enter Text to Transform it</h1>
        <textarea onChange={(e) => setText(e.target.value)} value={text} rows={10} cols={20}></textarea>
        
        <div className="row">
          <button onClick={() => setText(text.toLowerCase())}>ToLowerCase</button>
          <button onClick={() => setText(text.toUpperCase())}>ToUpperCase</button>
          <button onClick={() => setText(text.split('').reverse().join(''))}>Reverse</button>
          <button onClick={() => navigator.clipboard.writeText(text)}>Copy text</button>
          <button onClick={() => setCount(text.length)}>Count text</button>
        </div>

        <h1>Preview: Text Lenght - {count}</h1>
        <p>{text}</p>
      </div>


    </>
  )
}

export default App