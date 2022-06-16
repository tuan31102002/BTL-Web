import React from "react";
import './dangki.css'

export default function Dangki() {
    return (
        <div>
            <h3>ĐĂNG KÍ TÀI KHOẢN </h3>
            <div classname="banner">
                <img src="fb-btn.svg" />
                <img src="gp-btn.svg" />
            </div>
            <div className="content">
                <div className="row4">
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
                <div className="row1">
                    <p>SỐ ĐIỆN THOẠI*</p>
                    <input style={{ width: `600px`, height: `40px`, }} aria-label="Nhập số điện thoại " type="tel"
                        className="form-control" placeholder="Nhập số điện thoại " name="so dien thoai " required=""
                        autocomplete="off" />
                </div>
                <div classname="row2">
                    <p>Email*</p>
                    <input style={{ width: `600px`, height: `40px`, }} aria-label="Nhập địa chỉ email" type="email"
                        className="form-control" placeholder="Nhập địa chỉ email" name="EMAIL" required=""
                        autocomplete="off" />
                </div>
                <div classname="row3">
                    <p>MẬT KHẨU*</p>
                    <p style={{color: `black`}}>tuan</p>
                    <h3>duy</h3>
                    <input style={{ width: `600px`, height: `40px`, }} aria-label="Nhập mật khẩu" type="password"
                        className="form-control" placeholder="Nhập mật khẩu" name="password" required=""
                        autocomplete="off" />
                </div>
                <br />
                <div classname="d-grid gap-2">
                    <button className="btn btn-primary" style={{ width: `600px`, height: `40px`, backgroundColor: `#03a9f4`, }} type="button" >Tạo tài khoản</button>
                    <a style={{ textAlign: `center`, textDecoration: `none`, color: `#03a9f4`, }} href="">ĐĂNG NHẬP</a>
                </div>
            </div>
        </div>
    )
}