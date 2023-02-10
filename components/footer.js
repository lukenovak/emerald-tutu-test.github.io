import { useState } from "react";
import { useIdleTimer } from "react-idle-timer"
import PageNav from "./page-nav"

export default function Footer({pages, address}) {
    const TIMEOUT_INTERVAL = 2000 // in ms

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const onIdle = () => {
        const footer = document.getElementById("growing-portion");
        footer.classList.add("growing-footer");
    }

    const onReset = () => {
        const footer = document.getElementById("growing-portion")
        footer.classList.remove("growing-footer")
    }

    const idleTimer = useIdleTimer({onIdle, onAction: onReset, timeout: TIMEOUT_INTERVAL})

    return(
        <div id="footer" className="blue-bg">
            <div className="text-center justify-content-center">
                <div className="row">
                    <div>
                        <span className="align-self-center">{address}</span>
                    </div>
                        {pages.map((page, idx) => 
                            <div className="d-flex" style={{"maxWidth": "fit-content"}} key={idx}>
                                <PageNav {...page}/>
                            </div>
                        )}
                </div>
            </div>
            <div id="growing-portion" className="growing-portion"></div>
        </div>
    )
}