import PageNav from "../page-nav"

export default function BigMenu({pages}) {
    return(
        <div>
            <ul>
                {pages.map((page) => <PageNav {...page}/>)}
            </ul>
        </div>
    )
}