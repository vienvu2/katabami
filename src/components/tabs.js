import { useState } from "react"

export default function Tabs({ tabs = [] }) {
    return <div className="tabs">
        {tabs.map(a =>
            <div className="tab" key={a}>{a}</div>
        )}
    </div>
}