import { useState } from "react"

export default function Tabs() {
    const tabs = ['Tin tức nổi bật', 'Khuyến mãi & Sự kiện', 'Câu chuyện khách hàng']
    const [tab, setTab] = useState(tabs[0])

    return <div className="tabs">
        {tabs.map(a =>
            <div className={"tab " + (tab == a ? 'active' : '')} key={a} onClick={() => setTab(a)}>{a}</div>
        )}
    </div>
}