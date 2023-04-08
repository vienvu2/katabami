export default function Header() {
    return <div className="header">
        <div className="container">
            <div className="header-inner">
                <div className="logo">
                    <img src="/img/logo.svg" />
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <a href='/' className="active">Trang chủ</a>
                            <a href='/'>Giới thiệu</a>
                            <a href='/'>Tế bào gốc</a>
                            <a href='/'>Vật lý trị liệu</a>
                            <a href='/'>Video</a>
                            <a href='/'>Tin tức</a>
                            <a href='/'>Liên hê</a>
                        </li>
                    </ul>

                </div>
                <div className="action">
                    <div className="">
                        <a>Đăng ký tư vấn</a>
                    </div>
                    <div>
                        CSKH
                        <a>1900 100728</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}