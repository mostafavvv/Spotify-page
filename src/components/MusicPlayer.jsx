import React,{useState,useRef,useEffect} from 'react'
import "../styles/MusicPlayer.css";
import {FaRegHeart,FaShareAlt,FaHeart,FaForward,FaStepForward,FaStepBackward,FaPlay,FaPause} from "react-icons/fa"
import {BsDownload} from "react-icons/bs"
function MusicPlayer({song,imgSrc}) {
    const [isLove,setLoved] = useState(false);
    const [isPlaying, setPlaying] = useState(false)
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0)

    const audioPlayer = useRef(); // our audio
    const ProgressBar = useRef();// our progress bar
    const animationRef = useRef();

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);

        setDuration(seconds);

    },[audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

    const changePlayPause = ()=>{
        
        const prevValue= isPlaying;
        if(!prevValue) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
        }else{
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current)
        }
        setPlaying(!prevValue)
    }

    const CalculateTime = (sec) => {
        const minutes = Math.floor(sec / 60);
        const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;

        const seconds =Math.floor(sec % 60);
        const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;

        return `${returnMin} : ${returnSec}`
    }
    
    const whilePlaying = () => {
        ProgressBar.current.value = audioPlayer.current.currentTime;
        changeCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    };
    const changeProgress = () => {
        audioPlayer.current.currentTime = ProgressBar.current.value;
        changeCurrentTime();
    }
    
    const changeCurrentTime = () =>{
        ProgressBar.current.style.setProperty("--player-played", `${(ProgressBar.current.value / duration) * 100 }%`);
        setCurrentTime(ProgressBar.current.value)
    }
    const changeLoved = () =>{
        setLoved(!isLove)
        
    }
   
  return (
    <div className='musicPlayer'>
      <div className="songImage">
        <img src={imgSrc} alt="" />
      </div>
      <div className="songAttributes">
        <audio src={song}
        preload="metadata" ref={audioPlayer} />
        <div className='top'> 
        <div className="left">
            <div className="loved" onClick={changeLoved}>
            {isLove ?
             (<i><FaHeart/></i>)
             :
             (<i><FaRegHeart/></i>)}
            </div>
            <div className="download"><i><BsDownload/></i></div>
        </div>

        <div className="middle">
            <div className="back">
                <i><FaStepBackward/></i>
                <i><FaForward/></i>
            </div>
            <div className="plpayPause" onClick={changePlayPause}>
                {isPlaying ? <i><FaPause/></i> : <i><FaPlay/></i>}
            </div>
            <div className="forward">
            <i><FaForward/></i>
            <i><FaStepForward/></i>
            </div>
        </div>


        <div className="right">
            <i><FaShareAlt/></i>
        </div>
        </div>
        <div className='bottom'>
            <div className="curretnTime">{CalculateTime(currentTime)}</div>
            <input type="range" className='progresBar' ref={ProgressBar} onChange={changeProgress}/>
            <div className="duration">{
            (duration && !isNaN(duration) 
            &&
            CalculateTime(duration)) ? CalculateTime(duration) : "00:00"}
            </div>
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer
