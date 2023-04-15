import Banner from "@/src/layouts/banner";
import Contact from "@/src/layouts/contact";
import Footer from "@/src/layouts/footer";
import Header from "@/src/layouts/header";
import Breadcrumb from "@/src/components/breadcrumb";
import Link from "next/link";

export default function Intro() {
    return <main className="page">
        <Header tab="dich-vu/te-bao-goc" />
        <Banner left={<h4>Tế bào gốc</h4>} img={<img alt="image" src="/images/banner3.jpeg" />} />

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

        <section className="service pt-4 pb-4">
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

                        <img alt="image" src="/images/banner1.jpeg" className="border-round" />

                        <a href="#book" className="btn btn-block">ĐẶT LỊCH NGAY HÔM NAY
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section className="service-detail">

            {[1, 2, 3, 4, 5, 6].map(a => <div className={a == 1 ? 'active service-detail-item' : ' service-detail-item'} key={a}>
                <div className="container">
                    <div className="service-detail-inner">
                        <div className="service-detail-plus" />
                        <div className="service-detail-main">
                            <h4 className="service-detail-title">Nguyên lý điều trị
                                của phương pháp Chiropractic</h4>
                            <div className="service-detail-content">
                                <p>Chiropractic ra đời vào năm 1895 bởi Daniel David Palmer, một
                                    bác sĩ chỉnh hình người Mỹ gốc Canada. Ở văn phòng ông làm
                                    việc lúc bấy giờ có một người gác cổng tên Harvey Lillard bị điếc
                                    trong 17 năm. Một ngày nọ, Harvey nói với bác sỹ Palmer rằng
                                    ông nghe thấy tiếng rắc ở cổ trong một lần cúi xuống đột ngột và
                                    đã xuất hiện một vết sưng ở đó. Bác sỹ Daniel đề nghị giúp đỡ
                                    Harvey bằng cách nắn chỉnh cổ: ông đặt tay vào điểm sưng,
                                    thực hiện một số thao tác nắn chỉnh và điều kỳ diệu đã xảy ra khi
                                    thính giác của Harvey được khôi phục một cách thần kỳ. Ngành
                                    nắn chỉnh cột sống chính thức được biết đến rộng rãi từ đó.
                                </p>
                                <p>
                                    Có thể nói, Chiropractic không phải là một phương pháp xuất
                                    hiện gần đây mà thực sự là một chuyên ngành với nguồn gốc
                                    hình thành và bề dày lịch sử đáng kinh ngạc. Và mặc dù khởi đầu
                                    với những thao tác nắn chỉnh bằng tay (Chiropractic - tên gọi
                                    ghép từ các từ ngữ Hy Lạp, có nghĩa là “thực hiện bằng tay”)
                                    nhưng phương pháp này hiện đã được mở rộng thêm với các
                                    dụng cụ hỗ trợ khác.</p>
                            </div>
                        </div>
                        <div className="service-detail-image">
                            <img alt="image" src="/images/banner1.jpeg" />
                        </div>
                    </div>
                </div>
            </div>
            )}
        </section>
        <section className="service-contact py-6 pb-6 bg-gray" id="book">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <h3 className="title">Đặt lịch hẹn</h3>
                    </div>
                    <div className="col-md-8 col-12">
                        <p className="bold color-second">Điền đầy đủ thông tin để nhận ngay ưu đãi giảm 50% phí
                            thăm khám với bác sĩ nước ngoài.</p>

                        <form className="custom-form">
                            <div className="row">
                                <div className="col-md-6 mb-2 col-12">
                                    <div className="input">
                                        <label>Họ và tên</label>
                                        <input />
                                    </div>
                                </div>
                                <div className="col-md-6  mb-2 col-12">
                                    <div className="input">
                                        <label>Số điện thoại</label>
                                        <input />
                                    </div>
                                </div>
                                <div className="col-md-12  mb-4 col-12">
                                    <div className="input">
                                        <label>Nội dung</label>
                                        <input />
                                    </div>
                                </div>
                                <div className="col-md-12 col-12">

                                    <button className="btn">ĐẶT LỊCH</button>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <section className="service-contact py-6">
            <div className="container ">
                <h3 className="title mb-4">Dịch vụ khác</h3>
                <div className="row">
                    {[1, 2, 3].map(a => <div className="col-md-4 col-12 mb-2" key={a}>
                        <div className="product-item">
                            <Link href="/dich-vu/te-bao-goc/tri-lieu-than-kinh">
                                <img alt="image" src="/images/product.png" />
                            </Link>
                            <Link href="/dich-vu/te-bao-goc/tri-lieu-than-kinh">
                                <h5>CHIROPRACTIC - CÔNG NGHỆ
                                    TRỊ LIỆU THẦN KINH CỘT SỐNG</h5>
                            </Link>

                        </div>
                    </div>)}
                </div>

            </div>

        </section>

        <Contact />
        <Footer />
    </main>
}