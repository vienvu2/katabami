import Breadcrumb from "@/src/components/breadcrumb";
import Banner from "@/src/layouts/banner";
import Contact from "@/src/layouts/contact";
import Footer from "@/src/layouts/footer";
import Header from "@/src/layouts/header";
import Link from "next/link";

export default function NewsDetailPage() {
    return <main className="page">
        <Header className="header-white" />
        <Breadcrumb links={[{
            name: 'Trang chủ',
            link: '/'
        },
        {
            link: '/tin-tuc',
            name: 'Tin tức'
        },
        {
            link: '/tin-tuc/te-bao-goc-la-gi',
            name: 'Tế bào gốc là gì? Vai trò, công dụng của tế bào gốc trong y học?'
        },]} />
        <section className="">

            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-12 mb-4">
                        <div className="news-detail">
                            <h2 className="title">Tế bào gốc là gì? Vai trò, công dụng
                                của tế bào gốc trong y học?</h2>

                            <p className="description">Lưu trữ tế bào gốc được xem là “bảo hiểm sinh học” trọn đời giúp phòng ngừa và điều trị nhiều bệnh
                                nan y cho trẻ và cả gia đình. Vậy tế bào gốc là gì? Công nghệ tế bào gốc hoạt động ra sao và ứng dụng
                                của tế bào gốc trong y khoa cụ thể là gì?</p>

                            <p className="date">By: Katabami Clinic | March 31 2023</p>

                            <img src="/images/banner1.jpeg" />

                            <h4>Tế bào gốc là gì?</h4>
                            <p>
                                Tế bào gốc là tế bào có khả năng tự đổi mới, tăng sinh và phát triển biệt hóa thành các loại tế bào
                                chuyên biệt để thực hiện chức năng trong một mô cụ thể. (1)</p>
                            <p>
                                Tế bào gốc có thể được phân lập từ nhiều nguồn khác nhau, trong đó nguồn tế bào gốc từ máu và mô
                                dây rốn cung cấp một lượng tế bào gốc đáng kể và có nhiều ưu điểm vượt trội. Trường hợp trẻ được
                                lưu trữ tế bào gốc, các tế bào này có thể được nhân nuôi tăng số lượng tế bào để phục vụ cho điều trị.
                                Từ máu dây rốn có thể tách được tế bào gốc tạo máu. Từ mô dây rốn có thể tách được tế bào gốc
                                trung mô. Tế bào gốc tạo máu khi được truyền vào cơ thể qua đường tĩnh mạch sẽ di chuyển đến tủy
                                xương. Tại đây, chúng sẽ tăng sinh và phát triển thành các tế bào máu mới thay thế cho các tế bào cũ
                                bị khiếm khuyết.
                            </p>
                            <img src="/images/banner1.jpeg" />
                            <p className="alt">Công dụng của tế bào gốc được ứng dụng trong nhiều lĩnh vực y khoa khác nhau
                            </p>
                            <h4 >Tế bào gốc là gì?</h4>
                            <p>
                                Tế bào gốc là tế bào có khả năng tự đổi mới, tăng sinh và phát triển biệt hóa thành các loại tế bào
                                chuyên biệt để thực hiện chức năng trong một mô cụ thể. (1)</p>
                            <p>
                                Tế bào gốc có thể được phân lập từ nhiều nguồn khác nhau, trong đó nguồn tế bào gốc từ máu và mô
                                dây rốn cung cấp một lượng tế bào gốc đáng kể và có nhiều ưu điểm vượt trội. Trường hợp trẻ được
                                lưu trữ tế bào gốc, các tế bào này có thể được nhân nuôi tăng số lượng tế bào để phục vụ cho điều trị.
                                Từ máu dây rốn có thể tách được tế bào gốc tạo máu. Từ mô dây rốn có thể tách được tế bào gốc
                                trung mô. Tế bào gốc tạo máu khi được truyền vào cơ thể qua đường tĩnh mạch sẽ di chuyển đến tủy
                                xương. Tại đây, chúng sẽ tăng sinh và phát triển thành các tế bào máu mới thay thế cho các tế bào cũ
                                bị khiếm khuyết.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 mb-4">
                        <div className="news-top mb-2">
                            <h4 className="title mb-3">Tin nổi bật</h4>

                            <div className="product-items">
                                {[1, 2, 3, 4, 5].map(a => <div className="product-item" key={a}>
                                    <Link href="/tin-tuc/te-bao-goc-la-gi">
                                        <img src="/images/banner1.jpeg" />
                                    </Link>
                                    <Link href="/tin-tuc/te-bao-goc-la-gi">
                                        <h5>BS TRAN TUAN</h5>
                                    </Link>
                                    <p>Tế bào gốc là tế bào có khả năng tự đổi mới, tăng sin</p>
                                </div>)}

                            </div>
                            <div className="text-center">
                                <a className="product-items-prev">
                                    <img src="/img/prev.svg" />
                                </a>
                                &nbsp;
                                &nbsp;
                                <a className="product-items-next">
                                    <img src="/img/next.svg" />
                                </a>
                            </div>
                        </div>

                        <div className="news-top">
                            <h4 className="title mb-3">Tin tức khác</h4>
                            {[1, 2, 3, 4].map(a => <div className="product-item mb-2" key={a}>
                                <Link href="/tin-tuc/te-bao-goc-la-gi">
                                    <img src="/images/banner1.jpeg" />
                                </Link>
                                <Link href="/tin-tuc/te-bao-goc-la-gi">
                                    <h5>BS TRAN TUAN</h5>
                                </Link>
                            </div>)}

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Contact />
        <Footer />
    </main>
}