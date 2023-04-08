import Banner from "@/src/layouts/banner";
import Contact from "@/src/layouts/contact";
import Breadcrumb from "@/src/components/breadcrumb";
import Footer from "@/src/layouts/footer";
import Header from "@/src/layouts/header";

export default function IntroItem() {
    return <main className="page">
        <Header />
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
            {
                link: '/gioi-thieu/doi-ngu-bac-sy/bs-pham-nhat-thanh',
                name: 'PGS.TS.BS Phạm Nhật Thanh'
            }
        ]} />
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <img src="/images/doctor-2.jpeg" />
                        <h3 className="title">Kinh nghiệm</h3>
                    </div>
                    <div className="col-md-8 mb-4">
                        <h3 className="title">PGS.TS.BS Phạm Nhật Thanh</h3>
                        <p><b>Giám đốc trung tâm / Chuyên gia Chiropractic</b></p>

                        <p>PGS. TS.BS Phạm Nhật Thanh có 40 năm kinh nghiệm giảng dạy trong lĩnh vực Tim mạch tại Đại học
                            Y dược TP HCM, Bệnh viện Chợ Rẫy. GS Nhân đã tu nghiệp dài hạn về Tim mạch và Tim mạch Can
                            thiệp. Đặc biệt, năm 2017, PGS. TS.BS Phạm Nhật Thanh` là chuyên gia của Việt Nam được trao
                            chứng nhận quốc tế là có thể thực hiện độc lập cùng như đi đào tạo, chuyển giao kỹ thuật lại cho các
                            cơ sở khác về kỹ thuật thay van động mạch chủ qua da (TAVI). Đây là một trong những kỹ thuật can
                            thiệp tim mạch phức tạp nhất trên thế giới, áp dụng cho bệnh hẹp van động mạch chủ nặng mà
                            không cần mổ. Đồng thời, ông cũng là người việc triển khai các kỹ thuật tim mạch mới, chuyên sâu
                            như kỹ thuật sửa van hai lá qua đường ống thông - MitraClip, đặt Stent Graft điều trị bệnh lý động
                            mạch chủ…</p>

                        <p>
                            <b>1984 - 2010:</b> Giảng viên chính - Giáo vụ Sau Đại học bộ môn Nội tại Đại học Y Dược TP HCM. Kiêm
                            nhiệm Phó khoa Tim mạch Bệnh Viện Chợ Rẫy từ 2001 - 2005 và được phong học hàm Phó Giáo sư
                            năm 2005.</p>
                        <p>
                            <b> 2005 - 2015:</b> Kiêm nhiệm Trưởng khoa Tim mạch Can thiệp Bệnh Viện Chợ Rẫy.</p>
                        <p>
                            <b>2010 - 2015:</b> Phó trưởng bộ môn Lão khoa tại ĐH Y Dược TP HCM.
                        </p>
                        <p>
                            Giám đốc Trung tâm Tế bào gốc, Katabami Clinic.</p>

                        <img src="/images/banner1.jpeg" />
                    </div>
                    <div className="col-md-4 mb-4">
                        <h3 className="title">Thành tựu</h3>
                    </div>
                    <div className="col-md-8 mb-4">

                        <p>
                            <b>1984 - 2010:</b> Giảng viên chính - Giáo vụ Sau Đại học bộ môn Nội tại Đại học Y Dược TP HCM. Kiêm
                            nhiệm Phó khoa Tim mạch Bệnh Viện Chợ Rẫy từ 2001 - 2005 và được phong học hàm Phó Giáo sư
                            năm 2005.</p>
                        <p>
                            <b> 2005 - 2015:</b> Kiêm nhiệm Trưởng khoa Tim mạch Can thiệp Bệnh Viện Chợ Rẫy.</p>
                        <p>
                            <b>2010 - 2015:</b> Phó trưởng bộ môn Lão khoa tại ĐH Y Dược TP HCM.
                        </p>
                        <p>
                            Giám đốc Trung tâm Tế bào gốc, Katabami Clinic.</p>
                    </div>
                </div>
            </div>
        </section>
        <Contact />
        <Footer />
    </main>
}