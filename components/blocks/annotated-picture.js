import Picture from "./picture";
import Tooltip from "./tooltip";

export default function AnnotatedPicture({tooltip, picture}) {
    return <div className="container text-center">
        <div className="position-relative d-inline-flex">
            <Picture {...picture}/>
            {tooltip && tooltip != undefined && tooltip.map((tooltip) => <Tooltip key={tooltip.id} {...tooltip}/>)}
        </div>
    </div>
}
