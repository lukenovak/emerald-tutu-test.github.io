import { useEffect } from "react"
import PageNav from "./page-nav"

export default function Footer({pages, address}) {
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('timeout hit')
        }, 2)
    })
    return(
        <div className="blue-bg">
            <div className="text-center justify-content-center">
                <div className="row">
                    <div className="col-4">
                        <span className="align-self-center">{address}</span>
                        </div>
                        {pages.map((page, idx) => 
                            <div key={idx} className="col-2">
                                <PageNav {...page}/>
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}