import Link from "next/link";

export default function Footer() {
    return <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-12 mb-6">
                    <div className="mb-4"><img alt="image" src="/img/logo.svg" /></div>

                    <p>Là một trong những trung tâm điều trị cơ xương khớp
                        chuẩn Mỹ hàng đầu tại Việt Nam, Katabami Clinic không
                        chỉ tự hào bởi sở hữu hệ thống phòng khám trải dài từ
                        Bắc tới Nam với đầy đủ trang thiết bị hiện đại nhất, mà
                        trên hết 100% bác sĩ tại USAC đều đến từ nước ngoài,
                        các nước có nền Y học phát triển vượt bậc như Mỹ,
                        Châu Âu, Nhật Bản. Đây chính là yếu tố giúp Katabami
                        Clinic trở nên vững tin và lớn mạnh trong lòng hàng trăm
                        ngàn bệnh nhân.</p>

                </div>


                <div className="col-md-9 col-12 mb-6">
                    <div className="menu mb-6">
                        <Link href='/'  >Trang chủ</Link>
                        <Link href='/gioi-thieu'  >Giới thiệu</Link>
                        <Link href='/dich-vu/te-bao-goc'  >Tế bào gốc</Link>
                        <Link href='/dich-vu/vat-ly-tri-lieu'  >Vật lý trị liệu</Link>
                        <Link href='/video'  >Video</Link>
                        <Link href='/tin-tuc'  >Tin tức</Link>
                        <Link href='/lien-he' >Liên hệ</Link>

                    </div>
                    <div className="row">
                        <div className="col-md-3 col-12 mb-2">
                            <h4>CHUYÊN KHOA</h4>
                            <div className="pl-1">
                                <p>
                                    <a> Thoái hóa cột sống</a></p>
                                <p>
                                    <a>
                                        Đau thần kinh tọa</a>
                                </p>
                                <p>
                                    <a>
                                        Thoát vị đĩa đệm</a>
                                </p>
                                <p>
                                    <a>  Đau đầu, cổ, vai, gáy</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-12  mb-2">
                            <h4>HỆ THỐNG PHÒNG KHÁM</h4>
                            <p className="bolder">Cơ sở 1</p>
                            <p className="pl-1">Toà nhà HPCons, 2/13A Đường
                                Bạch Đằng, Phường 2. Quận Tân
                                Bình, TP. HCM</p>
                            <p className="bolder">Cơ sở 1</p>
                            <p className="pl-1">Toà nhà HPCons, 2/13A Đường
                                Bạch Đằng, Phường 2. Quận Tân
                                Bình, TP. HCM</p>
                        </div>
                        <div className="col-md-3 col-12  mb-2">
                            <h4>TIN TỨC & SỰ KIỆN</h4>
                            <div className="pl-1">
                                <p>
                                    <a> Tin về dịch vụ   </a>
                                </p>
                                <p>
                                    <a>
                                        Tin khuyến mại
                                    </a>
                                </p>
                                <p>
                                    <a>
                                        Tin sự kiện
                                    </a>
                                </p>
                                <p>
                                    <a>
                                        Tuyển dụng
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="col-md-3 col-12  mb-2">
                            <h4>THÔNG TIN KHÁCH HÀNG</h4>
                            <p>Thời gian mở cửa</p>
                            <div className="pl-1">
                                <p>
                                    Monday - riday: 8.30 AM to 7 PM
                                </p>
                                <p>

                                    Saturday: 8:30 AM to 5 PM
                                </p>
                                <p>

                                    Sunday: 8.30 AM to 12.30 PM
                                </p>

                            </div>
                            <p>Tổng đài CSKH</p>
                            <a href="tel:1900001122">
                                <h4 className="pl-1">1900 00 11 22</h4>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 col-12 text-center">
                    <div className="socials">
                        <a href="https://facebook.com" target="_blank">
                            <img alt="image" src="/img/ic-fb.svg" />
                        </a>
                        <a href="https://facebook.com" target="_blank">
                            <img alt="image" src="/img/ic-in.svg" />
                        </a>
                        <a href="https://facebook.com" target="_blank">
                            <img alt="image" src="/img/ic-tw.svg" />
                        </a>
                        <a href="https://facebook.com" target="_blank">
                            <img alt="image" src="/img/ic-yt.svg" />
                        </a>
                        <a href="https://facebook.com" target="_blank">
                            <img alt="image" src="/img/ic-link.svg" />
                        </a>
                        <a href="https://facebook.com" target="_blank">
                            <img alt="image" src="/img/ic-tt.svg" />
                        </a>
                    </div>
                    <div>
                        <p className="copyright">© 2023 Katabami Clinic. All rights reservedCenter | Design by Amwind</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
}