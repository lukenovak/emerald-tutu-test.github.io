export default function Text({paragraphs, isBlueBackground}) {
    return (
        <div className="container text py-2 w-auto">
            {paragraphs.map((paragraph, idx) => {
                return (
                <div className="row justify-content-center">
                    <p key={idx} className={"col-12 col-md-10 col-xl-8 mb-0 py-2" + (isBlueBackground ? " blue-bg" : "")}>{paragraph}</p>
                </div>
                )
            })}
        </div>
    )
}
