export default function Text({text, isBlueBackground}) {
    return (
        <div className="container text">
            {text.map((paragraph, idx) => {
                var paragraphClasses = "col-12 col-sm-10 col-md-8"
                paragraphClasses = isBlueBackground ? paragraphClasses + " blue-bg" : paragraphClasses
                return (
                <div className="row justify-content-center">
                    <p key={idx} className={paragraphClasses}>{paragraph}</p>
                </div>
                )
            })}
        </div>
    )
}