import Banner from "@/src/layouts/banner";
import Tabs from "@/src/components/tabs";
import Footer from "@/src/layouts/footer";
import Header from "@/src/layouts/header";
import Contact from "@/src/layouts/contact";

export default function Home() {
  return (
    <main className="page page-home">
      <Header />
      <Banner />
      <section className="home-cell-root py-8">
        <div className="container">

          <div className="row mb-4">
            <div className="col-md-4 col-12">
              <h3 className="title">Tế bào gốc</h3>

            </div>
            <div className="col-md-8 col-12">
              <p className="desc">Trung tâm điều trị cơ xương khớp chuẩn Mỹ hàng đầu tại Việt Nam, Katabami Clinic
                không chỉ tự hào bởi sở hữu hệ thống phòng khám trải dài từ Bắc tới Nam.</p>
            </div>
          </div>
          <div className="row">
            {[1, 2, 3].map(a => <div className="col-md-4 col-12" key={a}>
              <div className="product-item">
                <img src="/images/banner1.jpeg" />

                <h5>PHỤC HỒI VÀ NGĂN CHẶN QUÁ
                  TRÌNH THOÁI HOÁ KHỚP</h5>

                <p>Chiropractic không phải là một phương pháp
                  xuất hiện gần đây mà thực sự là một chuyên
                  ngành với nguồn gốc (...)</p>
              </div>
            </div>)}
          </div>

          <div className="text-center">
            <button className="btn btn-primary">TẤT CẢ DỊCH VỤ</button>
          </div>

        </div>

      </section>
      <section className="home-physical-therapy py-8 bg-gray">
        <div className="container">

          <div className="row mb-4">
            <div className="col-md-4 col-12">
              <h3 className="title">Vật lý trị liệu</h3>

            </div>
            <div className="col-md-8 col-12">
              <p className="desc">Trung tâm điều trị cơ xương khớp chuẩn Mỹ hàng đầu tại Việt Nam, Katabami Clinic
                không chỉ tự hào bởi sở hữu hệ thống phòng khám trải dài từ Bắc tới Nam.</p>
            </div>
          </div>
          <div className="row">
            {[1, 2, 3].map(a => <div className="col-md-4 col-12" key={a}>
              <div className="product-item">
                <img src="/images/banner1.jpeg" />

                <h5>PHỤC HỒI VÀ NGĂN CHẶN QUÁ
                  TRÌNH THOÁI HOÁ KHỚP</h5>

                <p>Chiropractic không phải là một phương pháp
                  xuất hiện gần đây mà thực sự là một chuyên
                  ngành với nguồn gốc (...)</p>
              </div>
            </div>)}


          </div>

          <div className="text-center">
            <button className="btn btn-primary">TẤT CẢ DỊCH VỤ</button>
          </div>



        </div>
      </section>
      <section className="home-doctor py-8">
        <div className="container">

          <div className="row mb-4">
            <div className="col-md-12">
              <h3 className="title">Đội ngũ bác sĩ</h3>

            </div>
          </div>
          <div className="row">
            {[1, 2, 3].map(a => <div className="col-md-4 col-12" key={a}>
              <div className="product-item">
                <img src="/images/banner1.jpeg" />

                <h5>PHỤC HỒI VÀ NGĂN CHẶN QUÁ
                  TRÌNH THOÁI HOÁ KHỚP</h5>

                <p>Chiropractic không phải là một phương pháp
                  xuất hiện gần đây mà thực sự là một chuyên
                  ngành với nguồn gốc (...)</p>
              </div>
            </div>)}
          </div>

          <div className="text-center">
            <button className="btn btn-primary">TẤT CẢ DỊCH VỤ</button>
          </div>
        </div>
      </section>
      <section className="home-sologan bg-primary py-6"  >
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-12">
              <h3 className="title-white">Điều Trị Dứt Điểm Các Bệnh Về
                Xương Khớp</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="home-why py-8">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12">
              <h3 className="title">Tại sao nên lựa chọn  Katabami Clinic ?</h3>
            </div>
            <div className="col-md-8 col-12">
              <p className="desc">Trung tâm điều trị cơ xương khớp chuẩn Mỹ hàng đầu tại Việt Nam, Katabami Clinic
                không chỉ tự hào bởi sở hữu hệ thống phòng khám trải dài từ Bắc tới Nam.</p>

              <div className="row">
                <div className="col-md-3">
                  <h3>15+</h3>
                  <p>Hơn 15 năm trong lĩnh
                    vực xương khớp</p>
                </div>
                <div className="col-md-3">
                  <h3>15+</h3>
                  <p>Hơn 15 năm trong lĩnh
                    vực xương khớp</p>
                </div>
                <div className="col-md-3">
                  <h3>15+</h3>
                  <p>Hơn 15 năm trong lĩnh
                    vực xương khớp</p>
                </div>
                <div className="col-md-3">
                  <h3>15+</h3>
                  <p>Hơn 15 năm trong lĩnh
                    vực xương khớp</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {[1, 2, 3].map(a => <div className="col-md-4 col-12" key={a}>
              <div className="product-item">
                <img src="/images/banner1.jpeg" />

                <h5>PHỤC HỒI VÀ NGĂN CHẶN QUÁ
                  TRÌNH THOÁI HOÁ KHỚP</h5>

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

      <section className="home-news py-8 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-12">
              <h3 className="title">Tin tức</h3>

            </div>
            <div className="col-md-9 col-12">
              <Tabs />
            </div>
          </div>
        </div>
      </section>

      <section className="home-video py-8">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-12">
              <h3 className="title">Video</h3>

            </div>
            <div className="col-md-9 col-12">
              <Tabs />
            </div>
          </div>
        </div>
      </section>


      <section className="home-why  py-8">
        <div className="container">
          <h3 className="title">Tại sao nên lựa chọn
            Katabami Clinic ?</h3>
        </div>

      </section>

      <section className="home-thanks  pt-8">
        <div className="container mb-8">
          <div className="row">
            <div className="col-md-12 col-12">
              <h3 className="title">Cảm ơn Katabami Clinic</h3>


            </div>
          </div>
        </div>

        <div className="image-grid">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(item => <div
            className="image-grid-item"
            key={item} style={{ backgroundImage: `url('/images/banner1.jpeg')` }}>
              <div className="image-grid-content">
            <p>
              Đến Katabami Clinic điều trị, tôi
              cảm thấy rất yên tâm vì ở đây trị
              bệnh không phẫu thuật, không
              cần uống thuốc, an toàn lắm.
            </p>
            <strong> Phạm Ngọc Lan</strong>
            <p>
              (Nội trợ)
            </p>
            </div>
          </div>)}

        </div>
      </section>

      <Contact />

      <Footer />
    </main>
  )
}


