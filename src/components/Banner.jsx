import React from 'react'

import Artist from "../img/artist.jpg"
import Cheak from "../img/check.png"
import {FaEllipsisH,FaHeadphones,FaCheck} from "react-icons/fa"
function Banner() {
  return (
    <div className='banner'>
      <img src={Artist} alt="Artist" className='bannerImg' />
    <div className="content">
        <div className="breakCrump">
            <p>Home <span>/Populer Artist</span></p>
        <i><FaEllipsisH/></i>
        </div>
        <div className="artist">
            <div className="left">
                <div className="name">
                    <h2>A-Ha</h2>
                    <img src={Cheak} alt="" />
                </div>
                <p>
                    <i>
                        <FaHeadphones/>
                    </i>{" "}
                    11,184,1811 <span>Monthlu listeners</span>
                </p>
            </div>
            <div className="right">
                <a href="#">Play</a>
                <a href="#">
                    <i>
                        <FaCheck />
                    </i>
                    Following
                </a>
            </div>
        </div>
    </div>
    <div className="bottomLayer">
        
    </div>
    </div>
  )
}

export default Banner
