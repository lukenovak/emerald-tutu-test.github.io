export default function Tooltip({xPos, yPos, number, text, id}) {
    const positionStyles = {
        left: "" + xPos + "px",
        top: "" + yPos + "px",
    }
    return (
        <div
            key={id} 
            className="position-absolute d-flex text-bold p-2 align-middle annotation overflow-visible"
            style={positionStyles}>
            <div className="h2 position-relative top-0 mb-auto mx-auto info-tip d-flex blue-bg align-content-middle">
                <span className="m-auto">{"" + number}</span>
            </div>
            <div className="annotation-text">
                <p className="ms-2 blue-bg p-2 fade-in my-auto">{text}</p>
            </div>
        </div>
    )
}
