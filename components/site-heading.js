// ONLY ONE OF THESE SHOULD BE USED ON A PAGE (REALLY FOR THE WHOLE SITE)
export default function SiteHeading({text}) {
    text = text.toUpperCase()
    return (
        <div id="siteHeading" className="site-heading display-1 container">
            {text.split('').map((ltr, idx) => {
                return ltr !== " " ? <span key={"sh"+idx}>{ltr}</span> : <div/>
            })}
        </div>
    )

}
