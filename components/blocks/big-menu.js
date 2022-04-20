import PageNav from "../page-nav"
import { ONLY_SHOW_ON_CLICK } from "../page-nav"

export default function BigMenu({pages}) {
    return(
        <div>
            <ul className="h1">
                {pages.map((page) => <PageNav {...page} mode={ONLY_SHOW_ON_CLICK}/>)}
            </ul>
        </div>
    )
}