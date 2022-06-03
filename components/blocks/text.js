// TODO: markdown elements
export default function Text({paragraphs, isBlueBackground}) {
    return (
        <div className="container text w-auto">
            {paragraphs.map((paragraph, idx) => {
                return (
                <div key={idx} className="row justify-content-center">
                    <p className={"col-12 col-md-10 col-xl-8 mb-2 p-0" + (isBlueBackground ? " blue-bg" : "")}>{paragraph}</p>
                </div>
                )
            })}
        </div>
    )
}
