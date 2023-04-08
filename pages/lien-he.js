import Breadcrumb from "@/src/components/breadcrumb";
import Banner from "@/src/layouts/banner";
import Contact from "@/src/layouts/contact";
import Footer from "@/src/layouts/footer";
import Header from "@/src/layouts/header";

export default function ContactPage() {
    return <main className="page">
        <Header tab="lien-he" />
        <Banner left={<h4>Liên hệ</h4>} />

        <Breadcrumb links={[
            {
                name: 'Trang chủ',
                link: '/'
            },
            {
                link: '/lien-he',
                name: 'Liên hệ'
            },]} />
        <section className="pt-5">
            <div className="container">
                <h3 className="title">Katabami Clinic <br />   Center</h3>
            </div>
            <div>
                <p>Katabami Clinic Center</p>
                <p>
                    HPCons Building. 2/13A Bach Dang Street,
                    Ward 2, Tan Binh District, Ho Chi Minh City</p>
                <p><a>1900 1007 28
                </a></p>
                <p><a>
                    1900 1007 29</a></p>
                <p><a>info@katabamiclinic.com.vn</a></p>

            </div>
            <iframe></iframe>
        </section>
        <Contact />
        <Footer />
    </main>
}