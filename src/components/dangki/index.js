import React from "react";
import './dangki.css'
import fb from '../../components/dangki/assets/fb-btn.svg'
import gp from '../../components/dangki/assets/gp-btn.svg'
import Header from "../header";
import Footer from "../footer";



export default function Dangki() {
    return (
        <div>
            <Header/>
            <h3 style= {{textAlign:`center`}}>ĐĂNG KÍ TÀI KHOẢN </h3>
            <div classname="banner" style={{display:`flex`,maxWidth:`130px`,marginLeft:`16.5cm`,marginRight:`16.5cm`,borderSpacing:`2cm`,}}>
                <img src={fb} />
                <img src={gp} />
            </div>
            <div style={{marginLeft:`12.5cm`,marginRight:`12.5cm`,}} >
                <div style={{display:`flex`}} >
                    <div>
                        <p>HỌ*</p>
                        <input style={{ width: `300px`, height: `40px`, }} aria-label="Nhập họ " type="ho"
                            className="form-control" placeholder="Nhập họ " name="HO " required=""
                            autocomplete="off" />

                    </div>
                    <div>
                        <p>TÊN*</p>
                        <input style={{ width: `300px`, height: `40px`, }} aria-label="Nhập tên " type="ten"
                            className="form-control" placeholder="Nhập tên " name="ten " required=""
                            autocomplete="off" />
                    </div>
                </div>
                <div>
                    <p>SỐ ĐIỆN THOẠI*</p>
                    <input style={{ width: `600px`, height: `40px`, }} aria-label="Nhập số điện thoại " type="tel"
                        className="form-control" placeholder="Nhập số điện thoại " name="so dien thoai " required=""
                        autocomplete="off" />
                </div>
                <div>
                    <p>Email*</p>
                    <input style={{ width: `600px`, height: `40px`, }} aria-label="Nhập địa chỉ email" type="email"
                        className="form-control" placeholder="Nhập địa chỉ email" name="EMAIL" required=""
                        autocomplete="off" />
                </div>
                <div>
                    <p>MẬT KHẨU*</p>
                    
                    <input style={{ width: `600px`, height: `40px`, }} aria-label="Nhập mật khẩu" type="password"
                        className="form-control" placeholder="Nhập mật khẩu" name="password" required=""
                        autocomplete="off" />
                </div>
                <br />
                <div classname="d-grid gap-2">
                    <button className="btn btn-primary" style={{ width: `600px`, height: `40px`, backgroundColor: `#03a9f4`, borderRadius:`0px`, }} type="button" >Tạo tài khoản</button>
                    {/* <a style={{ textAlign: `center`, textDecoration: `none`, color: `#03a9f4`, }} href="/#">ĐĂNG NHẬP</a> */}
                    <div style={{textAlign: `center`,}}>
                        <a style={{textDecoration: `none`, color: `#03a9f4`,}} href="/dangnhap">ĐĂNG NHẬP</a>
                    </div>
                    

                    
                </div>
            </div>
            <Footer />
        </div>
    )
}