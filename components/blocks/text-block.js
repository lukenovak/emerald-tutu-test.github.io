export default function TextBlock({header, text}) {
    return (
        <div>
            {header && <h2>{header}</h2>}
            <p>{text}</p>
        </div>
    )
}