export default function TextBlock({header, text, highlight, isRetractable}) {

    return (
        <div className="container">
            {header && <h4 className="col font-monument text-center">{header}</h4>}
                {text.map((paragraph, idx) => {
                    var paragraphClasses = "col-12 col-sm-10 col-md-8"
                    paragraphClasses = highlight ? paragraphClasses + "blue-bg" : paragraphClasses
                    return (
                    <div className="row justify-content-center">
                        <p key={idx} className={paragraphClasses}>{paragraph}</p>
                    </div>
                    )
                })}
        </div>
    )
}