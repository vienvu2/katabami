import Breadcrumb from "@/src/components/breadcrumb";
import Banner from "@/src/layouts/banner";
import Contact from "@/src/layouts/contact";
import Footer from "@/src/layouts/footer";
import Header from "@/src/layouts/header";

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
            link: '/tin-tuc/213213232',
            name: 'Tế bào gốc là gì? Vai trò, công dụng của tế bào gốc trong y học?'
        },]} />
        <section></section>
        <Contact />
        <Footer />
    </main>
}