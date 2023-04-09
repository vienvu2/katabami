import { useState } from "react"

export default function Tabs({ tabs = [] }) {
    return <div className="tabs">
        {tabs.map((a, idx) =>
            <div className={"tab " + (idx == 0 ? 'active' : '')} key={a}>{a}</div>
        )}
    </div>
}