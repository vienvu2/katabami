export default function Banner({ left }) {
    return <div className="banner">
        <div className="banner-left">
            {left}
        </div>
        <div className="banner-right">
            <img src="/images/banner1.jpeg" />
        </div>
    </div>
}

