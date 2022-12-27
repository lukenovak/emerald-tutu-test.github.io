import { useIdleTimer } from "react-idle-timer"
import PageNav from "./page-nav"

export default function Footer({pages, address}) {
    const TIMEOUT_INTERVAL = 2000 // in ms

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const onIdle = () => {
        while (true) {
            //console.log('running')
            //const footer = document.getElementById("footer")
            //footer.style.height = footer.offsetHeight + 1000 + "px"
        }

    }

    const onReset = () => {
        const footer = document.getElementById("footer")
        footer.style.removeProperty('height')
    }

    //const idleTimer = useIdleTimer({onIdle, onAction: onReset, timeout: TIMEOUT_INTERVAL})

    return(
        <div id="footer" className="blue-bg">
            <div className="text-center justify-content-center">
                <div className="row">
                    <div>
                        <span className="align-self-center">{address}</span>
                    </div>
                        {pages.map((page, idx) => 
                            <div key={idx}>
                                <PageNav {...page}/>
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}