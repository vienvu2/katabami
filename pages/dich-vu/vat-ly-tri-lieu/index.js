import Banner from "@/src/layouts/banner";
import Contact from "@/src/layouts/contact";
import Footer from "@/src/layouts/footer";
import Header from "@/src/layouts/header";
import Breadcrumb from "@/src/components/breadcrumb";
import Link from "next/link";

export default function Intro() {
    return <main className="page">
        <Header tab="dich-vu/vat-ly-tri-lieu" />
        <Banner left={<h4>Vật lý trị liệu</h4>} />

        <Breadcrumb links={[
            {
                name: 'Trang chủ',
                link: '/'
            },
            {
                link: '/dich-vu',
                name: ' Dịch vụ'
            },
            {
                link: '/dich-vu/vat-ly-tri-lieu',
                name: 'Vật lý trị liệu'
            },

        ]} />

        <section className="intro pt-4 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12 mb-4">
                        <h3 className="title">Tế bào gốc</h3>

                    </div>
                    <div className="col-md-8 col-12  mb-4">
                        <p className="color-second bold mb-3">Dịch vụ chuyên nghiệp</p>
                        <p>Trung tâm Katabami Clinic quy tụ đội ngũ chuyên gia, bác sĩ, dược sĩ và điều dưỡng có trình độ
                            chuyên môn cao, tận tâm với mỗi bệnh nhân. Vì chúng tôi hiểu rằng, niềm hạnh phúc và sự hài lòng
                            của người bệnh và gia đình người bệnh là sứ mệnh và muc tiêu hoạt động của chúng tôi</p>
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
                                    <h5>CHIROPRACTIC - CÔNG NGHỆ
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