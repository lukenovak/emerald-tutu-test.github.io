import PageNav from "./page-nav"

export default function Footer({pages, address}) {
    return(
        <div className="blue-bg">
            <div className="container text-center justify-content-center">
                <div className="row">
                    <div className="col-4">{address}</div>
                    <div className="col-8">
                        {pages.map((page) => <PageNav {...page}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}