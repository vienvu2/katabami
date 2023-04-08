export default function Contact() {
    return <div className="contact py-8">
        <div className="container">

            <div className="row align-middle">
                <div className="col-md-6">
                    <h2 className="mb-1">Liên hệ tư vấn</h2>

                    <p className="mb-2">Vui lòng cung cấp thông tin,
                        bộ phận CSKH sẽ liên hệ lại trong thời gian sớm nhất</p>

                    <a className="phone">028 345 678 9</a>
                </div>
                <div className="col-md-6 pt-4">

                    <form className="custom-form">
                        <div className="row">
                            <div className="col-md-6 mb-2">
                                <input placeholder="Họ và tên" />
                            </div>
                            <div className="col-md-6  mb-2">
                                <input placeholder="Số điện thoại" />
                            </div>
                            <div className="col-md-12  mb-4">
                                <input placeholder="Nội dung" />
                            </div>
                            <div className="col-md-12  mb-2">
                                <button className="btn">Gửi</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
}