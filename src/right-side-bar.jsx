import { useState } from 'react'
import './App.css'
import User from './assets/rabbit.jpg'
import Add from './assets/add.png'

function RightSideBar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="right-side-bar">
        <h3>Who To Follow</h3>
        <div className="profile-right-side-bar">
          <div className="add-side-bar">
            <img src={User} className='user-profile'/>
            <a href="" className='name-right-side-bar'>Stevanus</a>
            <a href="">
              <img src={Add} className='add'/>
            </a>
          </div>
          <div className="add-side-bar">
            <img src={User} className='user-profile'/>
            <a href="" className='name-right-side-bar'>Stevanus</a>
            <a href="">
              <img src={Add} className='add'/>
            </a>
          </div>
          <a href="#" className='see'>See More</a>
        </div>
      </div>
    </>
  )
}

export default RightSideBar
