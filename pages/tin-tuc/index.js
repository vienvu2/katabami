import Breadcrumb from "@/src/components/breadcrumb";
import Tabs from "@/src/components/tabs";
import Banner from "@/src/layouts/banner";
import Contact from "@/src/layouts/contact";
import Footer from "@/src/layouts/footer";
import Header from "@/src/layouts/header";
import Link from "next/link";

export default function ContactPage() {
    return <main className="page">
        <Header tab="tin-tuc" />
        <Banner left={<h4>Tin tức</h4>} />
        <Breadcrumb links={[{
            name: 'Trang chủ',
            link: '/'
        },
        {
            link: '/tin-tuc',
            name: 'Tin tức'
        },]} />
        <section className="pt-4 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4  col-12 mb-4">
                        <h3 className="title">Tin tức</h3>
                    </div>
                    <div className="col-md-8  col-12 mb-4">
                        <Tabs tabs={['Tin tức nổi bật', 'Khuyến mãi & Sự kiện', 'Câu chuyện khách hàng']} />
                    </div>
                </div>

                <div className="row">
                    {[1, 2, 3, 4, 5, 6, 6, 8, 9, 10, 11, 12].map(a => <div className="col-md-3 col-12 mb-4" key={a}>
                        <div className="product-item">
                            <div className="mb-1">
                                <img src="/images/banner1.jpeg" />
                            </div>
                            <div className="mb-1">
                                <Link href="/tin-tuc/2132">
                                    <h5>Bệnh viêm khớp ngày càng
                                        trẻ hóa, giải pháp nào điều
                                        trị sớm?</h5>
                                </Link>
                            </div>
                            <p>Thực tế, cứ 5 người trưởng thành
                                thì có 1 người bị viêm khớp (...)</p>

                            <p className="date">03 | 10 | 2021</p>
                        </div>
                    </div>)}

                </div>
            </div>
        </section>
        <Contact />
        <Footer />
    </main>
}