import Banner from "@/src/layouts/banner";
import Contact from "@/src/layouts/contact";
import Footer from "@/src/layouts/footer";
import Header from "@/src/layouts/header";
import Breadcrumb from "@/src/components/breadcrumb";
import Link from "next/link";

export default function Intro() {
    return <main className="page">
        <Header tab="dich-vu/te-bao-goc" />
        <Banner left={<h4>Tế bào gốc</h4>} />

        <Breadcrumb links={[
            {
                name: 'Trang chủ',
                link: '/'
            },
            {
                link: '/dich-vu',
                name: ' Giới thiệu'
            },
            {
                link: '/dich-vu/te-bao-goc',
                name: 'Tế bào gốc'
            },

            {
                link: '/dich-vu/te-bao-goc/tri-lieu-than-kinh',
                name: 'Trị liệu thần kinh'
            },

        ]} />

        <section className="intro pt-8 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12 mb-4">
                        <h3 className="title">Trị liệu thần kinh</h3>

                    </div>
                    <div className="col-md-8 col-12  mb-4">
                        <p className="color-second bold mb-3">Chiropractic - Phương Pháp Chữa Xương Khớp Chuẩn Mỹ</p>
                        <p>Trị liệu thần kinh cột sống hay còn gọi là công nghệ Chiropractic được xem là phương pháp chỉ định
                            đầu tiên, trước tất cả các giải pháp nội khoa (dùng thuốc) hay ngoại khoa (phẫu thuật) để điều trị các
                            bệnh lý cơ, xương, khớp và cột sống một cách hiệu quả nhất. Vậy phương pháp Chiropractic là gì và
                            có ưu điểm ra sao… Hãy cùng Katabami Clinic tìm hiểu qua bài viết hôm nay nhé!</p>

                        <button className="btn btn-block">ĐẶT LỊCH NGAY HÔM NAY</button>
                    </div>
                </div>
                <div className="row">
                    {[1, 2, 3, 4, 5, 6].map(a => <div className="col-md-4 col-12 mb-4" key={a}>
                        <div className="product-item">
                            <div className="mb-1">
                                <img src="/images/banner1.jpeg" />
                            </div>
                            <div className="mb-1">
                                <Link href="/dich-vu/te-bao-goc/2132">
                                    <h5>CHIROPRACTIC – CÔNG NGHỆ
                                        TRỊ LIỆU THẦN KINH CỘT SỐNG</h5>
                                </Link>
                            </div>

                        </div>
                    </div>)}

                </div>
            </div>

        </section>
        <Contact />
        <Footer />
    </main>
}