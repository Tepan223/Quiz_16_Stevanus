import { useState } from 'react'
import './App.css'
import PP from './assets/prof.png'
import Mic from './assets/mic.png'
import Emot from './assets/emot.png'
import Img from './assets/image.png'
import Share from './assets/share.png'
import Comment from './assets/comment.png'
import Like from './assets/like.png'

function MainContent() {
  const [count, setCount] = useState(0)
  const [like, setLike] = useState(0)

  return (
    <>
      <div className="main-content">
        <div className="head-main-content">
          <div className="profile-main-content">
            <img src={PP} className='pp-head-main-content'/>
            <textarea name="" className='text-head-main-content' placeholder='What happend today?'></textarea>
          </div>
          <div className='zero'>
            <p>0/150</p>
          </div>
          <div className="footer">
            <div className="three-content">
              <a href=""><img src={Img}/></a>
              <a href=""><img src={Mic} className='mic'/></a>
              <a href=""><img src={Emot}/></a>
            </div>
            <button className='btn-share'>Share</button>
          </div>
        </div>
        <div className="head-msg">
          <h1>What's happening</h1>
        </div>
        <div className="content-msg">
          <div className="profile-content-msg">
            <p className='profile'>T</p>
            <h4>Hernando</h4>
            <p className='days'>40 days ago</p>
          </div>
          <div className="msg-content">
            <p>Makan apa nich</p>
          </div>
          <div className="icon-msg-content">
            <div className='like'>
                <img src={Like} className='btn-like' onClick={() => setLike((count) => count + 1)}/>
              <p>{like}</p>
            </div>
            <div className="comment">
                <img src={Comment} className='btn-comment' onClick={() => setCount((count) => count + 1)}/>
              <p>{count}</p>
            </div>
            <div className='share'>
                <img src={Share} className='btn-share-1' onClick={() => setCount((count) => count + 1)}/>
              <p>{count}</p>
            </div>
          </div>
        </div>
        <div className="content-msg">
          <div className="profile-content-msg">
            <p className='profile'>T</p>
            <h4>Hernando</h4>
            <p className='days'>40 days ago</p>
          </div>
          <div className="msg-content">
            <p>Makan apa nich</p>
          </div>
          <div className="icon-msg-content">
            <div className='like'>
                <img src={Like} className='btn-like' onClick={() => setCount((count) => count + 1)}/>
              <p>{count}</p>
            </div>
            <div className="comment">
                <img src={Comment} className='btn-comment' onClick={() => setCount((count) => count + 1)}/>
              <p>{count}</p>
            </div>
            <div className='share'>
                <img src={Share} className='btn-share-1' onClick={() => setCount((count) => count + 1)}/>
              <p>{count}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainContent
