import circleNum from "../utils"

export default function PageHeading({page}) {
    console.log(page)
    return <div className="col-12 display-2 font-monument hidden-link w-auto text-center d-flex">
            <div className="m-auto d-flex">
                <div className="me-3">
                    {circleNum(page.pageNumber)}
                </div>
                <div>
                    {page.title}
                </div>
            </div>    
        </div>
}