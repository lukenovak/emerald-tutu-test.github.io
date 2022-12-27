import { useState } from "react"

// ONLY ONE OF THESE SHOULD BE USED ON A PAGE (REALLY FOR THE WHOLE SITE)
export default function SiteHeading({text}) {
    text = text.toUpperCase()
    return (
        <div id="siteHeading" className="site-heading display-1 container">
            <SiteLogo text={text}/>
        </div>
    )

}


function SiteLogo({text}) {
    const [isPaused, setPause] = useState()

    return text.split('').map((ltr, idx) => {
        return ltr !== " " ? <span key={"sh"+idx}>{ltr}</span> : <div key={"sh"+idx}/>
    })
}