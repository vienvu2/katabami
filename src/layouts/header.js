import Link from "next/link";

export default function Header({ tab, className }) {
    return <div className={"header " + className}>
        <div className="logo">
            <Link href="/">
                {
                    className ? <img src="/img/logo2.svg" /> : <img src="/img/logo.svg" />
                }

            </Link>
        </div>
        <div className="menu">
            <ul>
                <li>
                    <Link href='/' className={tab == '/' ? "active" : ''}>Trang chủ</Link>
                </li>
                <li>
                    <Link href='/gioi-thieu' className={tab == 'gioi-thieu' ? "active" : ''}>Giới thiệu</Link>
                </li>
                <li>
                    <Link href='/dich-vu/te-bao-goc' className={tab == 'dich-vu/te-bao-goc' ? "active" : ''}>Tế bào gốc</Link>
                </li>
                <li>
                    <Link href='/dich-vu/vat-ly-tri-lieu' className={tab == 'dich-vu/vat-ly-tri-lieu' ? "active" : ''}>Vật lý trị liệu</Link>
                </li><li>
                    <Link href='/video' className={tab == 'video' ? "active" : ''}>Video</Link>
                </li><li>
                    <Link href='/tin-tuc' className={tab == 'tin-tuc' ? "active" : ''}>Tin tức</Link>
                </li><li>
                    <Link href='/lien-he' className={tab == 'lien-he' ? "active" : ''}>Liên hệ</Link>
                </li>
            </ul>

        </div>
        <div className="action">
            <div className="action-item">
                <a href='#contact-form'>Đăng ký tư vấn</a>
            </div>
            <div className="action-item">
                <p>CSKH</p>
                <a href="tel:1900100728">1900 100728</a>
            </div>
        </div>

        <div className="menu-mobile">
            <img src="/img/menu.svg" />
        </div>

        <div className="menu-sider">
            <div className="menu-wrap">
                <Link href='/' className={tab == '/' ? "active" : ''}>Trang chủ</Link>
                <Link href='/gioi-thieu' className={tab == 'gioi-thieu' ? "active" : ''}>Giới thiệu</Link>
                <Link href='/dich-vu/te-bao-goc' className={tab == 'dich-vu/te-bao-goc' ? "active" : ''}>Tế bào gốc</Link>
                <Link href='/dich-vu/vat-ly-tri-lieu' className={tab == 'dich-vu/vat-ly-tri-lieu' ? "active" : ''}>Vật lý trị liệu</Link>
                <Link href='/video' className={tab == 'video' ? "active" : ''}>Video</Link>
                <Link href='/tin-tuc' className={tab == 'tin-tuc' ? "active" : ''}>Tin tức</Link>
                <Link href='/lien-he' className={tab == 'lien-he' ? "active" : ''}>Liên hệ</Link>
                <a href='#contact-form'>Đăng ký tư vấn</a>
                <a href="tel:1900100728">CSKH: 1900 100728</a>

            </div>
        </div>
    </div>
}