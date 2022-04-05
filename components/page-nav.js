import circleNum from "./utils"

export default function PageNav({pageNumber, title, slug}){
    return(
        <div className="text-center font-weight-bold hidden-link">
            <a href={slug}>{circleNum(pageNumber)} {title}</a>
        </div>
    )
}