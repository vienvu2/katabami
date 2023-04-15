import Banner from "@/src/layouts/banner";
import Contact from "@/src/layouts/contact";
import Footer from "@/src/layouts/footer";
import Header from "@/src/layouts/header";

export default function Service() {
    return <main>
        <Header tab="dich-vu" />
        <Banner left={<h4>Dịch vụ</h4>}  img={<img alt="image" src="/images/banner3.jpeg" />} />
        <Contact />
        <Footer />
    </main>
}