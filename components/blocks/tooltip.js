export default function Tooltip({xPos, yPos, number, text}) {
    console.log(number)
    const positionStyles = {
        left: "" + xPos + "px",
        top: "" + yPos + "px",
    }
    return (
        <div 
            className="position-absolute d-flex blue-bg text-bold p-2 align-middle annotation"
            style={positionStyles}>
            <div className="h2 my-0 align-content-middle">{"" + number}</div>
            <div>
                <p className="ms-3 my-auto annotation-text">{text}</p>
            </div>
        </div>
    )
}
