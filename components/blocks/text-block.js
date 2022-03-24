export default function TextBlock({header, text, highlight}) {

    return (
        <div className="container">
            {header && <h4 className="col text-center">{header}</h4>}
                {text.map((paragraph, idx) => {
                    const paragraphClasses = highlight ? "col col-8 blue-bg" : "col col-8"
                    return (
                    <div className="row justify-content-center">
                        <p key={idx} className={paragraphClasses}>{paragraph}</p>
                    </div>
                    )
                })}
        </div>
    )
}