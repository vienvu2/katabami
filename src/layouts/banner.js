export default function Banner({ left, img }) {
    return <div className="banner">
        <div className="banner-left">
            {left}
        </div>
        <div className="banner-right">
            {img}
        </div>
    </div>
}

