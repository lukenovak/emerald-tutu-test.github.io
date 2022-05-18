import { useState } from "react"
import { Collapse } from "react-bootstrap"

export default function CollapsibleText({heading, text, highlight}) {
    console.log(text)
    var [isOpen, setOpen] = useState()
    return (
        <div className={"container col-12 col-md-10 col-xl-8 py-2" + (highlight? " blue-bg" : "")}>
            <div className="row" onClick={() => setOpen(!isOpen)}>
                <div className="d-inline-flex">
                    <h4 className="mb-0">{heading}</h4>
                    <span className="ms-auto">
                        {isOpen ? "-" : "+"}
                    </span>
                </div>
            </div>
            <Collapse in={isOpen}>
                <p className="mt-2 mb-0">{text}</p>
            </Collapse>
        </div>
    )
}
