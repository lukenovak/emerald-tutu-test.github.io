import circleNum from "./utils";
import Link from "next/link";
import SiteLogo from "./site-logo";

import { useState, useEffect } from "react";

// takes a second, blank arg because we give it the footer information
export default function Header({pages, _}) {

    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = (e) => {
        setScrollTop(e.target.documentElement.scrollTop);
        setScrolling(e.target.documentElement.scrollTop > scrollTop);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
    },[]);

    useEffect(() => {
    console.log(scrollTop);
    }, [scrollTop])
    
    const baseClass = "text-center bg-green header font-monument hidden-link w-100 position-fixed d-flex mx-auto px-5"

    return <div className=
        {scrollTop > 100 ? baseClass : baseClass + " d-none"}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <Link href="/">
            <SiteLogo text="Emerald Tutu"/>
        </Link>
        {pages?.map((page, _) => 
            <div className="d-inline mx-auto font-weight-bold hidden-link">
                <a className="font-monument" href={page.slug}>{circleNum(page.pageNumber)} {page.title}</a>
            </div>
        )}
        <div class="d-flex" onClick={()=> window.scrollTo({top: 0})}>
            <span class="material-symbols-outlined my-auto text-bold">
            arrow_upward
            </span>
        </div>
    </div>
}
