export default function Contact() {
    return <div className="contac">
        <div className="container">

            <div className="row">
                <div className="col-md-6">
                    <h2>Liên hệ tư vấn</h2>

                    <p>Vui lòng cung cấp thông tin,
                        bộ phận CSKH sẽ liên hệ lại trong thời gian sớm nhất</p>

                    <a>028 345 678 9</a>
                </div>
                <div className="col-md-6">

                    <form className="custom-form">
                        <div className="row">
                            <div className="col-md-6">
                                <input placeholder="Họ và tên" />
                            </div>
                            <div className="col-md-6">
                                <input placeholder="Số điện thoại" />
                            </div>
                            <div className="col-md-12">
                                <input placeholder="Nội dung" />
                            </div>
                            <div className="col-md-12">
                                <button className="btn">Gửi</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
}