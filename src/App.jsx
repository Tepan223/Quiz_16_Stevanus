import { useState } from 'react'
import './App.css'
import seal from './assets/seal.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='body'>
        <div className="header">
          <div className="text-head">
            <p className="style-text-head">SO<span className='style-bold-text-head'>CIO.</span></p>
          </div>
          <div className="verif-head">
            <img src={seal} alt="" className='seal'/>
            <p className='text-verif-head'>verified</p>
            <select className='select-head'>
              <option>Stevanus</option>
              <option>Felix</option>
            </select>
          </div>
        </div>
        <div className="content">
          <div className="left-side-bar"></div>
          <div className="main-content"></div>
          <div className="right-side-bar"></div>
        </div>
      </div>
    </>
  )
}

export default App
