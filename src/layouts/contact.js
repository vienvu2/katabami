export default function Contact() {
    return <div className="contact py-8" id="contact-form">
        <div className="container">

            <div className="row align-middle">
                <div className="col-md-6 col-12">
                    <h2 className="mb-1">Liên hệ tư vấn</h2>

                    <p className="mb-2">Vui lòng cung cấp thông tin,
                        bộ phận CSKH sẽ liên hệ lại trong thời gian sớm nhất</p>

                    <a href="tel:0283456789" className="phone">028 345 678 9</a>
                </div>
                <div className="col-md-6 col-12 pt-4">

                    <form className="custom-form">
                        <div className="row">
                            <div className="col-md-6 mb-2 col-12">
                                <div className="input">
                                    <label>Họ và tên</label>
                                    <input />
                                </div>
                            </div>
                            <div className="col-md-6  mb-2 col-12">
                                <div className="input">
                                    <label>Số điện thoại</label>
                                    <input />
                                </div>
                            </div>
                            <div className="col-md-12  mb-4 col-12">
                                <div className="input">
                                    <label>Nội dung</label>
                                    <input />
                                </div>
                            </div>
                            <div className="col-md-12  mb-2 col-12">
                                <button className="btn btn-send">Gửi</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
}