import React from "react";
import './dangnhap.css'
import fb from '../../components/dangnhap/assets/fb-btn.svg'
import gp from '../../components/dangnhap/assets/gp-btn.svg'
import Header from "../header";
import Footer from "../footer";
import { Link } from "react-router-dom";
const button = {
  color: `#FFFFF`,
  background:`#03a9F4`, 
}



export default function Dangnhap(){
    return(
        <div>
          <Header/>
            <h1 style={{textAlign:`center`,color:`#333333`, paddingTop: `1cm` , paddingBottom: `1cm` }}>ĐĂNG NHẬP TÀI KHOẢN </h1>
    <div style={{textAlign: `center`}} >
    
      <img style={{width: `129px` , height: `36.36px`}} src={fb} alt="" />
      <img style={{width: `129px` , height: `36.36px`}} src={gp} alt=""  />
    </div>
    <div className="container1" style={{marginLeft:`8.5cm`,marginRight:`8.5cm`}}>
      <form>
    
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">EMAIL*</label>
          <input style={{width: `100%`, height: `40px`}} type="email" className="form-control" placeholder="Nhập Địa chỉ email" id="exampleInputEmail1"
            aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">Email sai định dạng</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">MẬT KHẨU*</label>
          <input style={{width: `100%`, height: `40px`}} type="password" className="form-control" placeholder="Nhập mật khẩu" id="exampleInputPassword1" />
          <div className="newsletter" >
            <a href="/#"><b style={{color: `#03a9f4` }}>Quên mật khẩu?</b></a>
          </div>
        </div>
        {/* <div className="d-grid gap-2 col-6 mx-auto">
         <Link to="/admin" ><button style={{backgroundColor:`#03A9F4`,borderRadius:`0px` ,  type : "button"}}className="btn btn-primary" >ĐĂNG NHẬP</button></Link>
        </div> */}
        <div>
          <Link to="/admin" ><button style={{width: `100%`,backgroundColor:`#03A9F4`, borderColor: `#03A9F4`, height: `50px`}}><b style={{color: `white`, fontSize: `13px`}}>ĐĂNG NHẬP</b></button></Link>
        </div>
      </form>
    </div>
    <div className="intro">
      <p>Nhà sách Tiến Thọ cam kết bảo mật và sẽ không bao giờ đăng <br/> hay chia sẻ thông tin mà chưa có được sự đồng ý của bạn.</p>
    </div>
    <div className="callout" >
      <p>BẠN CHƯA CÓ TÀI KHOẢN. ĐĂNG KÝ <a href="/dangki">Tại đây</a></p>
    </div>
    <Footer/>
        </div>
    )
}