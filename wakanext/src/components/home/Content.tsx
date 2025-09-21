import Link from "next/link";


export default function Content() {

    return (
        <div className="white-background">
            <div className="content-background mb-2 p-3">
                <Link href="/about" className="text-sm underline hover:text-orange-600">
                    About
                </Link>
            </div>
            <div className="content-background mb-2 p-3">
                <Link href="/progress" className="text-sm underline hover:text-orange-600">
                    Progress
                </Link>
            </div>
        </div>
    )
}
