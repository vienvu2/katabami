export default function Header({tab}) {
    return <div className="header">
        <div className="container">
            <div className="header-inner">
                <div className="logo">
                    <img src="/img/logo.svg" />
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <a href='/' className={tab == '/' && "active"}>Trang chủ</a>
                            <a href='/gioi-thieu'  className={tab == 'gioi-thieu' && "active"}>Giới thiệu</a>
                            <a href='/dich-vu/te-bao-goc'>Tế bào gốc</a>
                            <a href='/dich-vu/vat-ly-tri-lieu'>Vật lý trị liệu</a>
                            <a href='/video'>Video</a>
                            <a href='/tin-tuc'>Tin tức</a>
                            <a href='/lien-he'>Liên hê</a>
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