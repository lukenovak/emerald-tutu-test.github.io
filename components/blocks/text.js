export default function Text({text, isBlueBackground}) {
    return (
        <div className="container text py-2 w-auto">
            {text.map((paragraph, idx) => {
                return (
                <div key={paragraph.id} className="row justify-content-center">
                    <p key={idx} className={"col-12 col-sm-10 col-md-8 mb-0 py-2" + (isBlueBackground ? " blue-bg" : "")}>{paragraph}</p>
                </div>
                )
            })}
        </div>
    )
}