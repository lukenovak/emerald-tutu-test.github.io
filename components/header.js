import circleNum from "./utils";
import Link from "next/link";

// takes a second, blank arg because we give it the footer information
export default function Header({pages, _}) {
    return <div className="text-center bg-green header font-monument hidden-link w-100 position-fixed">
        <Link href="/">The Emerald Tutu</Link>
        {pages?.map((page, _) => 
            <div className="d-inline mx-5 font-weight-bold hidden-link">
                <a className="font-monument" href={page.slug}>{circleNum(page.pageNumber)} {page.title}</a>
            </div>
        )}
    </div>
}
