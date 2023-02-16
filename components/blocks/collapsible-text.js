import { useState } from "react"
import { Collapse } from "react-bootstrap"

export default function CollapsibleText({heading, text, highlight}) {
    var [isExpanded, setExpanded] = useState({isExpanded: false})
    return (
        <div className={"container col-12 col-md-10 col-xl-8 p-2 my-2" + (highlight? " blue-bg" : "")} onClick={() => setExpanded(!isExpanded)}>
            <div className="d-inline-flex w-100 px-1">
                <h4 className="mb-0 w-100">{heading}</h4>
                <span>
                    {!isExpanded ? "-" : "+"}
                </span>
            </div>
            <Collapse in={!isExpanded}>
                <p className="p-1 mt-2 mb-0 fade-in">{text}</p>
            </Collapse>
        </div>
    )
}
