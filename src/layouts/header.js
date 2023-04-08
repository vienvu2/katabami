import Link from "next/link";

export default function Header({ tab, className }) {
    return <div className={"header "+ className}>
        <div className="logo">
            <img src="/img/logo.svg" />
        </div>
        <div className="menu">
            <ul>
                <li>
                    <Link href='/' className={tab == '/' && "active"}>Trang chủ</Link>
                </li>
                <li>
                    <Link href='/gioi-thieu' className={tab == 'gioi-thieu' && "active"}>Giới thiệu</Link>
                </li>
                <li>
                    <Link href='/dich-vu/te-bao-goc' className={tab == 'dich-vu/te-bao-goc' && "active"}>Tế bào gốc</Link>
                </li>
                <li>
                    <Link href='/dich-vu/vat-ly-tri-lieu' className={tab == 'dich-vu/vat-ly-tri-lieu' && "active"}>Vật lý trị liệu</Link>
                </li><li>
                    <Link href='/video' className={tab == 'video' && "active"}>Video</Link>
                </li><li>
                    <Link href='/tin-tuc' className={tab == 'tin-tuc' && "active"}>Tin tức</Link>
                </li><li>
                    <Link href='/lien-he' className={tab == 'lien-he' && "active"}>Liên hệ</Link>
                </li>
            </ul>

        </div>
        <div className="action">
            <div className="action-item">
                <Link href='/'>Đăng ký tư vấn</Link>
            </div>
            <div className="action-item">
                <p>CSKH</p>
                <Link href="/">1900 100728</Link>
            </div>
        </div>
    </div>
}