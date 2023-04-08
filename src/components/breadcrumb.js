import Link from "next/link";

export default function Breadcrumb({ links = [] }) {
    return <div className="container">
        <div className="breadcrumb">
            {
                links.map((a, idx) => <>
                    <Link href={a.link} key={a.name} className="breadcrumb-item">{a.name}</Link>
                    {idx < links.length - 1 && '|'}
                </>)
            }
        </div>
    </div>
}