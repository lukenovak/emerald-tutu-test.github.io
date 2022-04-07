export default function Tooltip({xPos, yPos, number, text}) {
    console.log(number)
    const positionStyles = {
        left: "" + xPos + "px",
        top: "" + yPos + "px",
    }
    return (
        <div 
            className="position-absolute blue-bg text-bold"
            style={positionStyles}>
            <div className="d-flex align-content-middle">{"" + number}</div>
            <div className="invisible">
                <p>{text}</p>
            </div>
        </div>
    )
}
