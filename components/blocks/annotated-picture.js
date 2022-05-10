import Picture from "./picture";
import Tooltip from "./tooltip";

export default function AnnotatedPicture({tooltip, picture}) {
    console.log(tooltip)
    return <div className="container text-center">
        <div className="position-relative d-inline-flex">
            <Picture {...picture}/>
            {tooltip && tooltip != undefined && tooltip.map((tooltip) => <Tooltip {...tooltip}/>)}
        </div>
    </div>
}
