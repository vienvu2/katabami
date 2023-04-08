import Banner from "@/src/layouts/banner";
import Contact from "@/src/layouts/contact";
import Footer from "@/src/layouts/footer";
import Header from "@/src/layouts/header";
import Breadcrumb from "@/src/components/breadcrumb";
import Link from "next/link";

export default function Intro() {
    return <main className="page">
        <Header tab="gioi-thieu" />
        <Banner left={<h4>Giới thiệu</h4>} />

        <Breadcrumb links={[
            {
                name: 'Trang chủ',
                link: '/'
            },
            {
                link: '/gioi-thieu',
                name: ' Giới thiệu'
            },
            {
                link: '/gioi-thieu/doi-ngu-bac-sy',
                name: 'Đội ngũ bác sĩ'
            },
           
        ]} />

        <section className="intro pt-8 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12 mb-4">
                        <h3 className="title">Đội ngũ bác sĩ</h3>

                    </div>
                    <div className="col-md-8 col-12  mb-4">
                        <p className="color-second bold mb-3">Bác sĩ đầu ngành</p>
                        <p>Trung tâm Katabami Clinic quy tụ đội ngũ chuyên gia, bác sĩ, dược sĩ và điều dưỡng có trình độ
                            chuyên môn cao, tận tâm với mỗi bệnh nhân. Vì chúng tôi hiểu rằng, niềm hạnh phúc và sự hài lòng
                            của người bệnh và gia đình người bệnh là sứ mệnh và muc tiêu hoạt động của chúng tôi.</p>
                    </div>
                </div>
                <div className="row">
                    {[1, 2, 3, 4, 5, 6].map(a => <div className="col-md-4 col-12 mb-4" key={a}>
                        <div className="product-item">
                            <div className="mb-1">
                                <img src="/images/doctor-2.jpeg" />
                            </div>
                            <div className="mb-1">
                                <Link href="/gioi-thieu/backsu/2132">
                                    <h5>BS TRAN TUAN</h5>
                                </Link>
                            </div>

                            <p className="mb-1 bold"> Giám đốc trung tâm / Chuyên gia Chiropractic</p>
                            <hr />
                            <p>PGS.TS.BS Phạm Nhật Thanh là một trong những
                                chuyên gia đầu ngành trong lĩnh vực (...)</p>
                        </div>
                    </div>)}

                </div>
            </div>

        </section>
        <Contact />
        <Footer />
    </main>
}