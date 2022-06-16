import React from "react";
import './style.css'

export default function Footer(){
    return(
        <div>
            <div style={{backgroundColor:`#2E282E`,padding:`2cm` }}>
                <div className="container">
                    <div className=" row ">
                        <div className="col-6">
                            <h3>Đăng ký nhận tin</h3>
                            <p>Nhận thông tin sản phẩm mới nhất, tin khuyến mãi và nhiều hơn nữa.</p>
                        </div>
                        <div className="col-6">
                            <div className="input-group">
                                 <input style={{ height:`60px`}} aria-label="Địa chỉ Email" type="email" className="form-control"
                                    placeholder="Địa chỉ Email" name="EMAIL" required="" autocomplete="off"/>
                                    <span className="input-group-append">
                                        <button style={{backgroundColor: `#03a9f4`,height:`60px`,}} className="btn btn-default" type="submit"
                                        aria-label="Đăng ký nhận tin" name="subscribe">Đăng ký</button>
                                    </span>
                            </div>

                        </div>
                    </div>
                    <hr/>


                        <div className="row1">
                            <div>
                                <img src="image/logo.webp" alt=""/>

                                    <p>TIENTHOBOOK</p>
                                    <p>Hộ Kinh Doanh nhà sách Tiến Thọ</p>
                                    <p>GPKD số 01G8019354 do UBND Quận Cầu Giấy Cấp ngày 04/12/2019</p>
                                    <p>Địa chỉ: CS5: Cơ sở 5 : 50 Nguyễn Thị Lưu - T.P Bắc Giang - Hotline: 0948.555.050</p>
                                    <p>Địa chỉ: CS6 : 282a Lương Ngọc Quyến - Thái Nguyên - 0906.233.282</p>
                                    <p>Chính sách bảo mật</p>
                                    <p><a href="/#">Chính sách vận chuyển</a></p>
                                    <p><a href="/#">Chính sách đổi trả</a></p>
                                    <p><a href="/#">Hình thức thanh toán</a></p>
                                    <div className="logo">
                                        <a href="/#"><img src="image/fb.png" alt=""/></a>
                                        <a href="/#"><img src="image/twiter.jpg" alt=""/></a>
                                        <a href="/#"><img src="image/yt.png" alt=""/></a>
                                        <a href="/#"><img src="image/instagram.png" alt=""/></a>
                                    </div>
                            </div>
                            <div style={{width:`30%` }}>
                                    <h3>Liên kết nhanh</h3>
                                    <hr/>
                                    <p>Kho Sách</p>
                                    <p>Sách Tham Khảo</p>
                                    <p>Dụng Cụ Học Tập</p>
                                    <p>Văn Phòng Phẩm</p>
                                    <p>Đồ Chơi</p>
                                    <p>Lịch Tết</p>
                                    <p>Quà Tặng & Phụ Kiện</p>
                                    <img src="image/logo2.webp" width="250px" height="100px" alt="" />
                            </div>
                                    <div style={{width:`35%` }}>
                                        <h3>Thông tin liên hệ</h3>
                                        <hr/>
                                            <p>Địa chỉ: CS1: 828 Đường Láng – Láng Thượng – Hà Nội - 094.1234.828</p>
                                            <p>Địa chỉ: CS2: 36 Xuân Thủy – Cầu Giấy – Hà Nội - 0934.173.636</p>
                                            <p>Địa chỉ: CS3: 424 Nguyễn Trãi - Thanh Xuân - Hà Nội - 0966.688.424</p>
                                            <p>Địa chỉ: CS4: 697 Giải Phóng - Hoàng Mai - Hà Nội - 0933.695.697</p>
                                            <p>Email: tienthobook@gmail.com</p>
                                            <p>Điện thoại: 094.1234.828</p>
                                            <p>Zalo: 0934.173.636</p>
                                    </div>
                        </div>
                    </div>
                </div>
            
                <div style={{backgroundColor:`#000000fa`,padding: `10px`}}>
                    <p style={{textAlign: `center`}}>© Bản quyền thuộc về Nhà sách Tiến Thọ | Cung cấp bởi Sapo<img src="image/logo3.png" alt=""/> </p>

                </div>
        </div>
        
            
    )
}