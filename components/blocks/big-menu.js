import PageNav from "../page-nav"

export default function BigMenu({pages}) {
    return(
        <div>
            <ul className="h1 font-monument">
                {pages.map((page) => <PageNav {...page}/>)}
            </ul>
        </div>
    )
}