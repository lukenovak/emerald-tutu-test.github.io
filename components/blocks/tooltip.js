export default function Tooltip({xPos, yPos, number, text, id}) {
    const positionStyles = {
        left: "" + xPos + "px",
        top: "" + yPos + "px",
    }
    return (
        <div
            key={id} 
            className="position-absolute d-flex blue-bg text-bold p-2 align-middle annotation"
            style={positionStyles}>
            <div className="h2 my-0 align-content-middle">{"" + number}</div>
            <div className="annotation-text">
                <p className="ms-3 my-auto">{text}</p>
            </div>
        </div>
    )
}
