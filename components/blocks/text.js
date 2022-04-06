export default function Text({text}) {
    return (
        <div className="container">
            {text.map((paragraph, idx) => {
                var paragraphClasses = "col-12 col-sm-10 col-md-8"
                return (
                <div className="row justify-content-center">
                    <p key={idx} className={paragraphClasses}>{paragraph}</p>
                </div>
                )
            })}
        </div>
    )
}