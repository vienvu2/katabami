import Link from "next/link";
import React from "react";

export default function Breadcrumb({ links = [] }) {
    return <div className="container">
        <div className="breadcrumb">
            {
                links.map((a, idx) => <React.Fragment key={a.name}>
                    <Link href={a.link} className="breadcrumb-item">{a.name}</Link>
                    {idx < links.length - 1 && '|'}
                </React.Fragment>)
            }
        </div>
    </div>
}