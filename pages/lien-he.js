import Breadcrumb from "@/src/components/breadcrumb";
import Banner from "@/src/layouts/banner";
import Contact from "@/src/layouts/contact";
import Footer from "@/src/layouts/footer";
import Header from "@/src/layouts/header";

export default function ContactPage() {
    return <main className="page page-contract">
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
                <div className="row">
                    <div className="col-md-8">
                        <h3 className="title">Katabami Clinic <br />   Center</h3>
                    </div>
                    <div className="col-md-4">
                        <div className="block-address">
                            <h5>Katabami Clinic Center</h5>
                            <p>
                                HPCons Building. 2/13A Bach Dang Street,
                                Ward 2, Tan Binh District, Ho Chi Minh City</p>
                            <h5><a>1900 1007 28
                            </a></h5>
                            <h5><a>
                                1900 1007 29</a></h5>
                            <p><a>info@katabamiclinic.com.vn</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.9518872122876!2d106.66861331513128!3d10.814993992295395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175291f295b0337%3A0xc92b056244175af6!2zMi8xMyBC4bqhY2ggxJDhurFuZywgUGjGsOG7nW5nIDIsIFTDom4gQsOsbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MzY0NjQsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1680938496014!5m2!1svi!2s" width="100%" height="700" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                
            </iframe>
        </section>
        <Contact />
        <Footer />
    </main>
}