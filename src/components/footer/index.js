import React from "react";
import './footer.css';
import fb from '../../components/footer/assets/fb.png'
import ig from '../../components/footer/assets/instagram.png'
import Logo from '../../components/footer/assets/logo.webp'
import Logo2 from '../../components/footer/assets/logo2.webp'
import Logo3 from '../../components/footer/assets/logo3.png'
import twiter from '../../components/footer/assets/twiter.jpg'
import yt from '../../components/footer/assets/yt.png'
const row1 = {
    display: `flex`,
    justifyContent: `space-around`,
}



const logo = {
    display: `flex`,
    
}
const logo_img = {
    width: `60px`,
    height: `56px`,
    padding: `1px`
}

const h3 = {
    color: `white`
}
// const p = {
//     color: `white`
// }



export default function Footer(){
    return(
        <div>
            <div style={{backgroundColor:`#2E282E`,padding:`2cm`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h2 style={h3}>Đăng ký nhận tin</h2>
                            <p  style={h3}>Nhận thông tin sản phẩm mới nhất, tin khuyến mãi và nhiều hơn nữa.</p>
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


                        <div className="row1" style={row1}>
                            <div>
                                <img src={Logo} alt=""/>

                                <p  style={h3}>TIENTHOBOOK</p>
                                    <p  style={h3}>Hộ Kinh Doanh nhà sách Tiến Thọ</p>
                                    <p  style={h3}>GPKD số 01G8019354 do UBND Quận Cầu Giấy Cấp ngày 04/12/2019</p>
                                    <p  style={h3}>Địa chỉ: CS5: Cơ sở 5 : 50 Nguyễn Thị Lưu - T.P Bắc Giang - Hotline: 0948.555.050</p>
                                    <p  style={h3}>Địa chỉ: CS6 : 282a Lương Ngọc Quyến - Thái Nguyên - 0906.233.282</p>
                                    <p  style={h3}><a style={{textDecoration:`none`}} href="/#">Chính sách vận chuyển</a></p>
                                    <p  style={h3}><a style={{textDecoration:`none`}} href="/#">Chính sách vận chuyển</a></p>
                                    <p  style={h3}><a style={{textDecoration:`none`}} href="/#">Chính sách đổi trả</a></p>
                                    <p  style={h3}><a style={{textDecoration:`none`}} href="/#">Hình thức thanh toán</a></p>
                                    <div style={logo}>
                                        <a href="/#"><img className="rounded-circle" style={logo_img} src={fb} alt=""/></a>
                                        <a href="/#"><img className="rounded-circle" style={logo_img} src={twiter} alt=""/></a>
                                        <a href="/#"><img className="rounded-circle" style={logo_img} src={yt} alt=""/></a>
                                        <a href="/#"><img className="rounded-circle" style={logo_img} src={ig} alt=""/></a>
                                    </div>
                            </div>
                            <div style={{width:`30%` }}>
                                    <h3 style={h3}>Liên kết nhanh</h3>
                                    <hr/>
                                    <p  style={h3}>Kho Sách</p>
                                    <p  style={h3}>Sách Tham Khảo</p>
                                    <p  style={h3}>Dụng Cụ Học Tập</p>
                                    <p  style={h3}>Văn Phòng Phẩm</p>
                                    <p  style={h3}>Đồ Chơi</p>
                                    <p  style={h3}>Lịch Tết</p>
                                    <p  style={h3}>Quà Tặng & Phụ Kiện</p>
                                    <img src={Logo2} width="250px" height="100px" alt="" />
                            </div>
                                    <div style={{width:`35%` }}>
                                        <h3  style={h3}>Thông tin liên hệ</h3>
                                        <hr/>
                                            <p  style={h3}>Địa chỉ: CS1: 828 Đường Láng – Láng Thượng – Hà Nội - 094.1234.828</p>
                                            <p  style={h3}>Địa chỉ: CS2: 36 Xuân Thủy – Cầu Giấy – Hà Nội - 0934.173.636</p>
                                            <p  style={h3}>Địa chỉ: CS3: 424 Nguyễn Trãi - Thanh Xuân - Hà Nội - 0966.688.424</p>
                                            <p  style={h3}>Địa chỉ: CS4: 697 Giải Phóng - Hoàng Mai - Hà Nội - 0933.695.697</p>
                                            <p  style={h3}>Email: tienthobook@gmail.com</p>
                                            <p  style={h3}>Điện thoại: 094.1234.828</p>
                                            <p  style={h3}>Zalo: 0934.173.636</p>
                                    </div>
                        </div>
                    </div>
                </div>
            
                <div style={{backgroundColor:`#000000fa`,padding: `10px`}}>
                    <p   style={{textAlign: `center` , color: `white`}}>© Bản quyền thuộc về Nhà sách Tiến Thọ | Cung cấp bởi Sapo<img src={Logo3} alt=""/> </p>

                </div>
        </div>
        
            
    )
}