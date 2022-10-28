import Link from "next/link";

export default function Header() {
    return <div className="text-center bg-green header font-monument hidden-link w-100 position-fixed">
        <Link href="/">The Emerald Tutu</Link>
    </div>
}
