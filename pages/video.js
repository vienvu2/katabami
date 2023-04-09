import Breadcrumb from "@/src/components/breadcrumb";
import Tabs from "@/src/components/tabs";
import Banner from "@/src/layouts/banner";
import Contact from "@/src/layouts/contact";
import Footer from "@/src/layouts/footer";
import Header from "@/src/layouts/header";
import Link from "next/link";

export default function ContactPage() {
    return <main className="page">
        <Header tab="video" />
        <Banner left={<h4>Video</h4>} />
        <Breadcrumb links={[{
            name: 'Trang chủ',
            link: '/'
        },
        {
            link: '/video',
            name: ' Video'
        },]} />
        <section className="pt-8 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4   col-12 mb-4">
                        <h3 className="title">Video</h3>
                    </div>
                    <div className="col-md-8  col-12 mb-4">
                        <Tabs tabs={['Tế bào gốc', 'Vật lý trị liệu', 'Tất cả']} />


                    </div>
                </div>

                <div className="row">
                    {[1, 2, 3, 4, 5, 6].map(a => <div className="col-md-4 col-12 mb-4" key={a}>
                        <div className="product-item">
                            <div className="mb-1">
                                <img src="/images/banner1.jpeg" />
                            </div>
                            <div className="mb-1">
                                <Link href="/video/2132">
                                    <h5>BS TRAN TUAN</h5>
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