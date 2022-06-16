import React from "react";
import './dangnhap.css'



export default function Dangnhap(){
    return(
        <div>
            <h3>ĐĂNG NHẬP TÀI KHOẢN </h3>
    <div className="banner">
    
      <img src="fb-btn.svg" />
      <img src="gp-btn.svg" alt="" />
    </div>
    <div className="container1">
      <form>
    
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">EMAIL*</label>
          <input type="email" className="form-control" placeholder="Nhập Địa chỉ email" id="exampleInputEmail1"
            aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">Email sai định dạng</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">MẬT KHẨU*</label>
          <input type="password" className="form-control" placeholder="Nhập mật khẩu" id="exampleInputPassword1" />
          <div className="newsletter" >
            <a href="">Quên mật khẩu?</a>
          </div>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button style={{backgroundColor:`#03A9F4` ,  type : "button"}}className="btn btn-primary" >ĐĂNG NHẬP</button>
          
        </div>
      </form>
    </div>
    <div className="intro">
      <p>Nhà sách Tiến Thọ cam kết bảo mật và sẽ không bao giờ đăng <br/> hay chia sẻ thông tin mà chưa có được sự đồng ý của bạn.</p>
    </div>
    <div className="callout">
      <p>BẠN CHƯA CÓ TÀI KHOẢN. ĐĂNG KÝ <a href="">Tại đây</a></p>
    </div>
        </div>
    )
}