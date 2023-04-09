import Banner from "@/src/layouts/banner";
import Tabs from "@/src/components/tabs";
import Footer from "@/src/layouts/footer";
import Header from "@/src/layouts/header";
import Contact from "@/src/layouts/contact";
import Breadcrumb from "@/src/components/breadcrumb";
import Link from "next/link";

export default function Home() {
  return (
    <main className="page page-intro">
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

      ]} />

      <section className="intro pt-4 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12 mb-4">
              <h3 className="title">Katabami <br /> Clinic</h3>
            </div>
            <div className="col-md-8 col-12  mb-4">
              <p className="bold color-second mb-2">  “Sự hài lòng của người bệnh là trung tâm của mọi hoạt động, mọi cải tiến”</p>
              <p>
                Trung tâm Katabami Clinic luôn tiếp cận, ứng dụng những tiến bộ kỹ thuật của y học để hỗ trợ người
                bệnh trong suốt quá trình điều trị, chữa lành và bảo vệ sức khỏe.
                Bằng nhiều hình thức (hội thảo, tự học tự nghiên cứu, chuyển giao kỹ thuật y học tại chỗ…), đội ngũ
                y bác sĩ, điều dưỡng củaTrung tâm Katabami Clinic đã tích cực học hỏi để bồi dưỡng y thuật, kinh
                nghiệm chuyên môn. Đến nay, đội ngũ cán bộ, công nhân viên Bệnh viện đã không ngừng trưởng
                thành về mọi mặt, trình độ vững vàng, đạo đức nghề nghiệp trong sáng. Nhờ đó, hằng năm Bệnh
                viện đều nhận được giải thưởng công nhận đơn vị xuất sắc của Bộ Y tế và Ủy ban nhân dân TP.HCM
                trao tặng
              </p>
            </div>
          </div>
          <div className="row">
            {[1, 2, 3, 4, 5, 6].map(a => <div className="col-md-4 col-12 mb-4" key={a}>
              <div className="product-item">
                <img src="/images/banner1.jpeg" />
                <Link href="/gioi-thieu/test">
                  <h5>LỊCH SỬ HÌNH THÀNH VÀ PHÁT TRIỂN</h5>
                </Link>
              </div>
            </div>)}

          </div>
        </div>

      </section>

      <section className="home-why py-8 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12 mb-4">
              <h3 className="title">Tại sao nên lựa chọn  Katabami Clinic ?</h3>
            </div>
            <div className="col-md-8 col-12  mb-4">
              <p className="desc">Trung tâm điều trị cơ xương khớp chuẩn Mỹ hàng đầu tại Việt Nam, Katabami Clinic
                không chỉ tự hào bởi sở hữu hệ thống phòng khám trải dài từ Bắc tới Nam.</p>
            </div>
            <div className="col-md-4 col-12" />
            <div className="col-md-8 col-12 mb-4">
              <div className="row">
                <div className="col-md-3">
                  <h3 className="title-big">15+</h3>
                  <p className="desc-sm">Hơn 15 năm trong lĩnh
                    vực xương khớp</p>
                </div>
                <div className="col-md-3">
                  <h3 className="title-big">15+</h3>
                  <p className="desc-sm">Hơn 15 năm trong lĩnh
                    vực xương khớp</p>
                </div>
                <div className="col-md-3">
                  <h3 className="title-big">15+</h3>
                  <p className="desc-sm">Hơn 15 năm trong lĩnh
                    vực xương khớp</p>
                </div>
                <div className="col-md-3">
                  <h3 className="title-big">15+</h3>
                  <p className="desc-sm">Hơn 15 năm trong lĩnh
                    vực xương khớp</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {[1, 2, 3, 4].map(a => <div className="col-md-3 col-12" key={a}>
              <div className="product-item">
                <img src="/images/banner1.jpeg" />
                <a>

                  <h5>PHỤC HỒI VÀ NGĂN CHẶN QUÁ
                    TRÌNH THOÁI HOÁ KHỚP</h5>
                </a>

                <p>Chiropractic không phải là một phương pháp
                  xuất hiện gần đây mà thực sự là một chuyên
                  ngành với nguồn gốc (...)</p>
              </div>
            </div>)}
          </div>

          <div className="row">

          </div>
        </div>

      </section>


      <Contact />

      <Footer />
    </main>
  )
}


