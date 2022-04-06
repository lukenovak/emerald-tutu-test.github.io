import circleNum from "./utils"

export default function PageNav({pageNumber, title, slug, blocks}){
    return(
        <div className="hidden-link">
            <div className="d-inline font-weight-bold hidden-link">
                <a className="font-monument" href={slug}>{circleNum(pageNumber)} {title}</a>
            </div>
            {blocks && blocks.map((section) => 
                <div className="pl-2">
                    <a href={slug + "#" + section.name}>{section.name}</a>
                </div>)}
            </div>
       

    )
}