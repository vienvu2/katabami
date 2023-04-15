import Banner from "@/src/layouts/banner";
import Tabs from "@/src/components/tabs";
import Footer from "@/src/layouts/footer";
import Header from "@/src/layouts/header";
import Contact from "@/src/layouts/contact";
import Link from "next/link";

export default function Home() {
  return (
    <main className="page page-home">
      <Header tab="/" />
      <Banner
        left={
          <>
            <h5>KATABAMI CLINIC</h5>
            <h3>
              <strong>“Chiropractic -</strong>
              công nghệ trị liệu thần kinh cột sống đột phá từ mỹ ”
            </h3>

            <p>
              Trị liệu thần kinh cột sống hay còn gọi là công nghệ Chiropractic
              được xem là phương pháp chỉ định đầu tiên (...)
            </p>

            <Link className="btn btn-primary" href="/">XEM CHI TIẾT</Link>
          </>
        }
        img={<img alt="image" src="/images/banner1.jpeg" />}
      />
      <section className="home-cell-root py-8">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-4 col-12">
              <h3 className="title">Tế bào gốc</h3>
            </div>
            <div className="col-md-8 col-12">
              <p className="desc">
                Trung tâm điều trị cơ xương khớp chuẩn Mỹ hàng đầu tại Việt Nam,
                Katabami Clinic không chỉ tự hào bởi sở hữu hệ thống phòng khám
                trải dài từ Bắc tới Nam.
              </p>
            </div>
          </div>
          <div className="row mb-4">
            {[1, 2, 3].map((a) => (
              <div className="col-md-4 col-12" key={a}>
                <div className="product-item">
                  <Link href="/dich-vu/te-bao-goc/tri-lieu-than-kinh">
                    <img alt="image" src="/images/product.png" />
                  </Link>
                  <Link href="/dich-vu/te-bao-goc/tri-lieu-than-kinh">
                    <h5>PHỤC HỒI VÀ NGĂN CHẶN QUÁ TRÌNH THOÁI HOÁ KHỚP</h5>
                  </Link>

                  <p>
                    Chiropractic không phải là một phương pháp xuất hiện gần đây
                    mà thực sự là một chuyên ngành với nguồn gốc (...)
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/dich-vu/te-bao-goc" className="btn btn-primary">
              TẤT CẢ DỊCH VỤ
            </Link>
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
              <p className="desc">
                Trung tâm điều trị cơ xương khớp chuẩn Mỹ hàng đầu tại Việt Nam,
                Katabami Clinic không chỉ tự hào bởi sở hữu hệ thống phòng khám
                trải dài từ Bắc tới Nam.
              </p>
            </div>
          </div>
          <div className="row mb-4">
            {[1, 2, 3].map((a) => (
              <div className="col-md-4 col-12" key={a}>
                <div className="product-item">
                  <Link href="/dich-vu/vat-ly-tri-lieu/tri-lieu-than-kinh">
                    <img alt="image" src="/images/product.png" />
                  </Link>

                  <Link href="/dich-vu/vat-ly-tri-lieu/tri-lieu-than-kinh">
                    <h5>PHỤC HỒI VÀ NGĂN CHẶN QUÁ TRÌNH THOÁI HOÁ KHỚP</h5>
                  </Link>

                  <p>
                    Chiropractic không phải là một phương pháp xuất hiện gần đây
                    mà thực sự là một chuyên ngành với nguồn gốc (...)
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/dich-vu/vat-ly-tri-lieu" className="btn btn-primary">
              TẤT CẢ DỊCH VỤ
            </Link>
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
          <div className="row mb-4">
            {[1, 2, 3].map((a) => (
              <div className="col-md-4 col-12" key={a}>
                <div className="product-item">
                  <Link href="/gioi-thieu/doi-ngu-bac-sy/bs-tran-tuan">
                    <img alt="image" src="/images/doctor-2.jpeg" />
                  </Link>
                  <Link href="/gioi-thieu/doi-ngu-bac-sy/bs-tran-tuan">
                    <h5>DR. HO NGOC HUY</h5>
                  </Link>

                  <p>
                    Hoàn thành 4 năm đại học đại cương, 2 năm chuyên sâu về khoa
                    học và 4 năm chuyên ngành Chiropractic (...)
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/gioi-thieu/doi-ngu-bac-sy" className="btn btn-primary">
              XEM TẤT CẢ
            </Link>
          </div>
        </div>
      </section>
      <section className="home-sologan bg-primary py-6">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-12">
              <h3 className="title-white">
                Điều Trị Dứt Điểm Các Bệnh Về Xương Khớp
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="home-why py-8">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12 mb-4">
              <h3 className="title">Tại sao nên lựa chọn Katabami Clinic ?</h3>
            </div>
            <div className="col-md-8 col-12  mb-4">
              <p className="desc">
                Trung tâm điều trị cơ xương khớp chuẩn Mỹ hàng đầu tại Việt Nam,
                Katabami Clinic không chỉ tự hào bởi sở hữu hệ thống phòng khám
                trải dài từ Bắc tới Nam.
              </p>
            </div>
            <div className="col-md-4 col-12" />
            <div className="col-md-8 col-12 mb-4">
              <div className="row">
                <div className="col-md-3 col-6">
                  <h3 className="title-big">
                    15<span>+</span>
                  </h3>
                  <p className="desc-sm">
                    Hơn 15 năm trong lĩnh vực xương khớp
                  </p>
                </div>
                <div className="col-md-3 col-6">
                  <h3 className="title-big">
                    52K<span>+</span>
                  </h3>
                  <p className="desc-sm">Bệnh nhân điều tr</p>
                </div>
                <div className="col-md-3 col-6">
                  <h3 className="title-big">
                    99<span>%</span>
                  </h3>
                  <p className="desc-sm">Bệnh nhân hài lòng với dịch vụ</p>
                </div>
                <div className="col-md-3 col-6">
                  <h3 className="title-big">
                    120<span>+</span>
                  </h3>
                  <p className="desc-sm">Bác sĩ và nhân viên</p>
                </div>
              </div>
            </div>
          </div>

          <div className="sliders">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((a) => (
              <div key={a} className="px-1">
                <div className="product-item">
                  <Link href="/tin-tuc/te-bao-goc-la-gi">
                    <img alt="image" src="/images/banner1.jpeg" />
                  </Link>

                  <Link href="/tin-tuc/te-bao-goc-la-gi">
                    <h5>PHỤC HỒI VÀ NGĂN CHẶN QUÁ TRÌNH THOÁI HOÁ KHỚP {a}</h5>
                  </Link>

                  <p>
                    Chiropractic không phải là một phương pháp xuất hiện gần đây
                    mà thực sự là một chuyên ngành với nguồn gốc (...)
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-news py-8 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-12 mb-4">
              <h3 className="title">Tin tức</h3>
            </div>
            <div className="col-md-9 col-12 mb-4">
              <Tabs
                tabs={[
                  "Tin tức nổi bật",
                  "Khuyến mãi & Sự kiện",
                  "Câu chuyện khách hàng",
                ]}
              />
            </div>
          </div>
          <div className="sliders">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((a) => (
              <div key={a} className="px-1">
                <div className="product-item">
                  <Link href="/tin-tuc/te-bao-goc-la-gi">
                    <img alt="image" src="/images/banner1.jpeg" />
                  </Link>

                  <Link href="/tin-tuc/te-bao-goc-la-gi">
                    <h5>PHỤC HỒI VÀ NGĂN CHẶN QUÁ TRÌNH THOÁI HOÁ KHỚP {a}</h5>
                  </Link>

                  <p>
                    Chiropractic không phải là một phương pháp xuất hiện gần đây
                    mà thực sự là một chuyên ngành với nguồn gốc (...)
                  </p>

                  <p className="date">03 | 10 | 2021</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-video pt-8 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-12 mb-4">
              <h3 className="title">Video</h3>
            </div>
            <div className="col-md-9 col-12 mb-4">
              <Tabs tabs={["Tế bào gốc", "Vật lý trị liệu", "Tất cả"]} />
            </div>
          </div>
          <div className="sliders mb-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((a) => (
              <div key={a} className="px-1">
                <div className="product-item">
                  <a
                    href="https://www.youtube.com/watch?v=IhqKS1PBovQ&ab_channel=BGMGhibliStudio"
                    target="_blank"
                  >
                    <img alt="image" src="/images/banner1.jpeg" />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=IhqKS1PBovQ&ab_channel=BGMGhibliStudio"
                    target="_blank"
                  >
                    <img
                      alt="image"
                      src="/img/video.svg"
                      className="icon-video"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=IhqKS1PBovQ&ab_channel=BGMGhibliStudio"
                    target="_blank"
                  >
                    <h5>Tìm hiểu sơ lược về phương pháp Tế bào gốc?</h5>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/video" className="btn btn-primary">
              XEM TẤT CẢ
            </Link>
          </div>
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
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              className="image-grid-item"
              key={item}
              style={{ backgroundImage: `url('/images/banner1.jpeg')` }}
            >
              <div className="image-grid-content">
                <p>
                  Đến Katabami Clinic điều trị, tôi cảm thấy rất yên tâm vì ở
                  đây trị bệnh không phẫu thuật, không cần uống thuốc, an toàn
                  lắm.
                </p>
                <strong> Phạm Ngọc Lan</strong>
                <p>(Nội trợ)</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Contact />

      <Footer />
    </main>
  );
}
