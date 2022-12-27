import SiteLogo from "./site-logo"

// ONLY ONE OF THESE SHOULD BE USED ON A PAGE (REALLY FOR THE WHOLE SITE)
export default function SiteHeading({text}) {
    text = text.toUpperCase()
    return (
        <div id="siteHeading" className="site-heading display-1 container">
            <SiteLogo text={text}/>
        </div>
    )

}