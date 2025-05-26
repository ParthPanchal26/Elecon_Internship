import React, { useState } from 'react'

const App = () => {

  const [text, setText] = useState('')
  const [count, setCount] = useState(0)
  const [isTrue, setIsTrue] = useState(false)

  return (
    <div className={`flex flex-col p-3 h-[95vh] ${isTrue ? 'text-black bg-blue-200' : 'text-white bg-blue-900' }`}>

      <div className="flex justify-between p-2">
        <h1 className={`text-3xl`}>Enter text</h1>
        <button onClick={() => setIsTrue(!isTrue)} className={`rounded-md font-medium px-6 text-xl ${isTrue ? 'bg-slate-400 hover:bg-slate-600 hover:text-white' : 'text-white bg-slate-700 hover:bg-slate-800'}`}>Change Theme</button>
      </div>

      <textarea onChange={(e) => setText(e.target.value)} value={text} rows={10} cols={20} className={`border-1 rounded p-2`}></textarea>

      <div className="flex flex-row gap-3 my-3">
        <button onClick={() => setText(text.toLowerCase())} className={`border-0 rounded-sm px-5 py-2 font-medium transition-all ${isTrue ? 'bg-slate-400 hover:bg-slate-600 hover:text-white' : 'text-white bg-slate-700 hover:bg-slate-800'}`}>Lowercase</button>
        <button onClick={() => setText(text.toUpperCase())} className={`border-0 rounded-sm px-5 py-2 font-medium transition-all hover:bg-slate-800 ${isTrue ? 'bg-slate-400 hover:bg-slate-600 hover:text-white' : 'text-white bg-slate-700 hover:bg-slate-800'}`}>Uppercase</button>
        <button onClick={() => setCount(text.length)} className={`border-0 rounded-sm px-5 py-2 font-medium transition-all hover:bg-slate-800 ${isTrue ? 'bg-slate-400 hover:bg-slate-600 hover:text-white' : 'text-white bg-slate-700 hover:bg-slate-800'}`}>Count Length</button>
        <button onClick={() => setText(text.split('').reverse().join(''))} className={`border-0 rounded-sm px-5 py-2 font-medium transition-all hover:bg-slate-800 ${isTrue ? 'bg-slate-400 hover:bg-slate-600 hover:text-white' : 'text-white bg-slate-700 hover:bg-slate-800'}`}>Reverse Text</button>
        <button onClick={() => setText('')} className={`border-0 rounded-sm px-5 py-2 font-medium transition-all hover:bg-slate-800 ${isTrue ? 'bg-slate-400 hover:bg-slate-600 hover:text-white' : 'text-white bg-slate-700 hover:bg-slate-800'}`}>Clear</button>
      </div>

      <div className="flex flex-col">
        <div className="flex gap-5 items-center">
          <h3 className='text-2xl'>Preview</h3>
          <p>Text Length: {count}</p>
        </div>

        {
          text
            ? <p className='border-1 rounded-sm p-3'>{text}</p>
            : <></>
        }
      </div>

    </div>
  )
}

export default App