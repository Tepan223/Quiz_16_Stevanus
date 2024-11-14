import { useState } from 'react'
import './App.css'
import Header from './header.jsx'
import LeftSideBar from './left-side-bar.jsx'
import MainContent from './main-content.jsx'
import RightSideBar from './right-side-bar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
        <div className="content">
          <LeftSideBar/>
          <MainContent/>
          <RightSideBar/>
        </div>
    </>
  )
}

export default App
