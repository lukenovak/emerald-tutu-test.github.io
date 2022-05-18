import Script from "next/script"

export default function VimeoEmbeddable({videoID, iframeSrc}) {
    // Adapted from Vimeo's embedding code
    return (
        <div id={"player-" + videoID} className="mb-3 container">
            <div style={{padding:"56.25% 0 0 0", position:"relative"}}>
                <iframe src={"" + iframeSrc} 
                        style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}} 
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowFullScreen>     
                </iframe>
            </div>
            <Script src="https://player.vimeo.com/api/player.js"></Script>
        </div>
        
    )
}
