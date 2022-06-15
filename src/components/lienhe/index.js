import React from "react";
import './style.css'

// class -> className , style={{width: 30% , height: `1cm`}} style="width:30%" 

export default function Lienhe(){
    return(
        <div className="container">
            <div className="row1">
                <div className="row2"  style={{width: `30%`}}>
                    <h3 style={{ marginBottom : `30px`}}>ĐỂ LẠI TIN NHẮN</h3>
                    <p><img src="diachi.svg" width="30px" height="30px" alt="" />CS1: 828 Đường Láng – Láng Thượng – Hà Nội -
                    094.1234.828</p>
                    <p><img src="diachi.svg" width="30px" height="30px" alt="" />CS2: 36 Xuân Thủy – Cầu Giấy – Hà Nội -
                    0934.173.636</p>
                    <p><img src="diachi.svg" width="30px" height="30px" alt="" />CS3: 424 Nguyễn Trãi - Thanh Xuân - Hà Nội -
                    0966.688.424</p>
                    <p><img src="diachi.svg" width="30px" height="30px" alt="" />CS4: 697 Giải Phóng - Hoàng Mai - Hà Nội -
                    0933.695.697</p>
                    <p><img src="phone.png" width="30px" height="30px" alt="" /> 0915616688</p>
                    <p><img src="phone.png" width="30px" height="30px" alt="" />094.1234.828 - -</p>
                    <p><img src="mail.svg" width="30px" height="30px" alt="" /> tienthobook@gmail.com</p>
                </div>

                {/* <div style={{marginLeft: `1cm`}}> */}
                <div>
                    <div className="row1">
                        <div style={{marginRight: `1cm`}}>
                            <p>Họ và tên*</p>
                            <input style={{width: `200px`,height: `40px`}} aria-label="Nhập họ và tên" type="ten"
                            className="form-control" placeholder="Nhập họ và tên" name="HO TEN" required=""
                            autocomplete="off" />

                        </div>
                        <div style={{marginRight: `1cm`}}>
                            <p>Email*</p>
                            <input style={{width: `200px`,height: `40px`}} aria-label="Nhập địa chỉ email" type="email"
                            className="form-control" placeholder="Nhập địa chỉ email" name="EMAIL" required=""
                            autocomplete="off" />

                        </div>
                        <div>
                            <p>Điện thoại*</p>
                            <input style={{width: `200px`,height: `40px`}} aria-label="Nhập số điện thoại" type="dienthoai"
                            className="form-control" placeholder="Nhập số điện thoại" name="" required=""
                            autocomplete="off" />

                        </div>
                    </div>
                    <div style={{marginTop: `10px`}}>
                        <p>Nội dung*</p>
                        <input style={{width: `700px`,height: `150px`}} aria-label="Nội dung liên hệ" type="noidung"
                        className="form-control" placeholder="Nội dung liên hệ" name="" required="" autocomplete="off" />
                        <button className="btn" style={{backgroundColor: `#03a9f4`, marginTop: `1cm` , color: `white` , height: `50px`}}>GỬI TIN NHẮN</button>
                    </div>
                </div>


            </div>
            {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.338022202922!2d105.79815902218003!3d21.019156741235737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab5dcad13da7%3A0xa6962ec4bc4a5854!2zODI4IMSQLiBMw6FuZywgTMOhbmcgVGjGsOG7o25nLCDEkOG7kW5nIMSQYSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1655090512302!5m2!1svi!2s"
            width="100%" height="300" style="border:0; margin-top: 1cm;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
        
    )
}