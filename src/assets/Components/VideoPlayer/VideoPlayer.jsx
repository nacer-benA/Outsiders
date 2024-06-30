import React, { useRef } from 'react'
import './VideoPlayer.css'

const VideoPlayer = ({playState,setPlayState}) => {

    const player = useRef(null);
    const closePlayer = (e)=>{
        if(e.target === player.current){
            setPlayState(false)
        }
    }
  return (
    <div className={`video-player ${playState? '' : 'hide'}`} ref={player} onClick={closePlayer}>
        <iframe src="https://www.youtube.com/embed/kGdFpt0XoQI" width='80%' height='70%'
        title="La première ligne du livre de 50 cent parle de lui : Corentin Villemeur" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
        web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default VideoPlayer

