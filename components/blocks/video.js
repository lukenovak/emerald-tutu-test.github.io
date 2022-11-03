import { useRef, useState } from "react";

export default function Video({video}){
    const url = video.url
    const ref = useRef(null)
    // event handlers
    const [playerState, setPlayerState] = useState({
        isPlaying: false,
        progress: 0,
        isMuted: false,
        currentTimeString: "0:00",
    })

    const updateTimeString = (newTime) => {
        const minutes = Math.floor(newTime / 60);
        var seconds = Math.floor(newTime - minutes * 60);
        seconds = seconds < 10 ? "0" + seconds.toString() : seconds
        return minutes + ":" + seconds
    }
    const setPlaying = () => {
        setPlayerState({
            ...playerState,
            isPlaying: !playerState.isPlaying
        })
        playerState.isPlaying ? ref.current.play() : ref.current.pause()
    }

    const updateProgress = () => {
        setPlayerState({
            ...playerState,
            progress: (ref.current.currentTime / ref.current.duration) * 100,
            currentTimeString: updateTimeString(ref.current.currentTime)
        })
    }

    const scrubVideo = (event) => {
        const newValue = Number(event.target.value);
        ref.current.currentTime = (ref.current.duration / 100) * newValue;
        setPlayerState({
            ...playerState,
            progress:newValue,
            currentTimeString: updateTimeString(ref.current.currentTime)
        })
    }

    const toggleMute = () => {
        setPlayerState({
        ...playerState,
        isMuted: !playerState.isMuted,
        });
    };

    const videoElement = 
        <video
            className="w-100" 
            ref={ref}
            onTimeUpdate={updateProgress}
        >
            <source src={url}/>
        </video>


    return(
    <div className="container">
        {videoElement}
        <div className="d-flex w-100">
            <div className="me-2">{playerState.currentTimeString}</div>
            {!playerState.isPlaying && (<div onClick={setPlaying} className="me-2">Play</div>)}
            {playerState.isPlaying && (<div onClick={setPlaying} className="me-2">Pause</div>)}
            <input
                className="video-progress-bar m-auto w-100"
                type="range"
                min="0"
                max="100"
                value={playerState.progress}
                onChange={scrubVideo}
            />
        </div>
    </div>
    )
}