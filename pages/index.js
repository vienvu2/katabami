import Banner from "@/src/layouts/banner";
import Footer from "@/src/layouts/footer";
import Header from "@/src/layouts/header";

export default function Home() {
  return (
    <main className="page page-home">
      <Header />
      <Banner />
      <section>
        <div className="container">

          <div className="row">
            <div className="col-md-3 col-12">
              <h3 className="title">Tế bào gốc</h3>

            </div>
            <div className="col-md-9 col-12">
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
      <section>
        <div className="container">

          <div className="row">
            <div className="col-md-3 col-12">
              <h3>Vật lý trị liệu</h3>

            </div>
            <div className="col-md-9 col-12">
              <p>Trung tâm điều trị cơ xương khớp chuẩn Mỹ hàng đầu tại Việt Nam, Katabami Clinic
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
      <section>
        <div className="container">

          <div className="row">
            <div className="col-md-3 col-12">
              <h3>Đội ngũ bác sĩ</h3>

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
      <section>
        <div className="container">
          <h3>Điều Trị Dứt Điểm Các Bệnh Về
            Xương Khớp</h3>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-12">
              <h3>Tại sao nên lựa chọn
                Katabami Clinic ?</h3>

            </div>
            <div className="col-md-9 col-12">
              <p>Trung tâm điều trị cơ xương khớp chuẩn Mỹ hàng đầu tại Việt Nam, Katabami Clinic
                không chỉ tự hào bởi sở hữu hệ thống phòng khám trải dài từ Bắc tới Nam.</p>

              <div className="row">
                <div className="col-md-4">
                  <h3>15+</h3>
                  <p>Hơn 15 năm trong lĩnh
                    vực xương khớp</p>
                </div>
                <div className="col-md-4">
                  <h3>15+</h3>
                  <p>Hơn 15 năm trong lĩnh
                    vực xương khớp</p>
                </div>
                <div className="col-md-4">
                  <h3>15+</h3>
                  <p>Hơn 15 năm trong lĩnh
                    vực xương khớp</p>
                </div>
                <div className="col-md-4">
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


      <Footer />
    </main>
  )
}
