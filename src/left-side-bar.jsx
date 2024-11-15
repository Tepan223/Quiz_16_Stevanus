import { useState } from 'react'
import './App.css'
import Home from './assets/home.png'
import Notif from './assets/notification.png'
import Message from './assets/chat.png'
import Profile from './assets/profile.png'

function LeftSideBar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="left-side bar">
        <div className="in-left-side-bar">
          <div className='home'>
            <button className='btn-side-bar'>
              <img src={Home} className='icon-side-bar'/>
              <p className="text-side-bar">Home</p>
            </button>
          </div>
          <div className='notif'>
            <button className='btn-side-bar'>
              <img src={Notif} className='icon-side-bar'/>
              <p className="text-side-bar">Notification</p>
            </button>
          </div>
          <div className="msg">
            <button className='btn-side-bar'>
              <img src={Message} className='icon-side-bar'/>
              <p className="text-side-bar">Message</p>
            </button>
          </div>
          <div className="profile">
            <button className='btn-side-bar'>
              <img src={Profile} className='icon-side-bar'/>
              <p className="text-side-bar">Profile</p>
            </button>
          </div>
          <div className="trending">
            <button className='btn-trending'>
              <p className="text-side-bar">Trending</p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LeftSideBar
