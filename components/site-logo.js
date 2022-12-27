import { useState } from "react"

export default function SiteLogo({text}) {
    const [isPaused, setPause] = useState()

    return <div className="d-flex site-logo">
        {
        text.split('').map((ltr, idx) => {
            return ltr !== " " ? <span key={"sh"+idx}>{ltr}</span> : <div key={"sh"+idx}/>
        })}
    </div>
}