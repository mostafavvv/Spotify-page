import React from 'react'
import "../styles/RightMenu.css"
import { FaCrown,FaBell, FaRegHeart, FaSun, FaCogs } from "react-icons/fa"
import pro from "../img/profile.jpg"
function RightMenu() {
  return (
    <div className='rightMenu'>
      <div className="goPro">
        <i><FaCrown/>
        <p>Go <span>Pro</span></p></i>
        <i><FaBell /></i>
        <i>< FaRegHeart/></i>
      </div>
      <div className="profile">
        <i><FaSun/></i>
        <i><FaCogs/></i>
        <div className="profileIMage">
          <img src={pro} alt="" />
        </div>
      </div>
    </div>
  )
}

export default RightMenu