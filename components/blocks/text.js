// TODO: markdown elements
export default function Text({paragraphs, isBlueBackground}) {
    return (
        <div className="text w-auto">
            {paragraphs.map((paragraph, idx) => {
                return (
                <div key={idx} className="justify-content-center">
                    <p className={"mb-2 p-0" + (isBlueBackground ? " blue-bg text-center p-1 mt-1" : "")}>{paragraph}</p>
                </div>
                )
            })}
        </div>
    )
}
