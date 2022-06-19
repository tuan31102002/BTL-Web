import React from "react";
import './style.css'
import cart from '../../components/header/assets/cart.png'
import logo from '../../components/header/assets/logo.webp'
import phone from '../../components/header/assets/phone.png'
import user from '../../components/header/assets/user.png'


const li ={
    listStyle: `none`
}


export default function Header(){
    return(
        <div>
        <div className="container" style={{marginTop: `10px`}}>
            <div className="row">
                <div style={{width:`20%`}}>
                    <a href="/#"><img  style={{width: `200px`, height:`70px`}} src={logo}  alt="logo.webp"/></a>
                    
                </div>
                <div style={{width:`47%`,}}>
                    <div style={{marginTop: `20px`,}} className="d-flex">
                        <input style={{width: `450px`,height:`40px`,marginLeft:`1cm`}} className="form-control me-2" type="search" placeholder="Search"
                                 aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                     </div>
                </div>
                <div style={{width:`20%`,}}>
                    <p style={{fontSize:`13px`,color: `black`}}>Giờ mở cửa (08.00-22.00)</p>
                    <p style={{fontSize:`18px`,color: `#03A9F4`,}}><img width="30px" height="30px" src={phone} alt=""/>0941231828</p>
                             
                        
                    
                </div>
                 <div style={{width:`10%`,display:`flex` ,listStyle:`center`,}}>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown" href="/#"><img style={{width:`40px`, height:`40px`}} src={user} alt="user"/></a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li style={li}><a className="dropdown-item" href="/dangnhap">Đăng Nhập</a></li>
                            <li style={li}><a className="dropdown-item" href="/dangki">Đăng Kí</a></li>
                        </ul>
                     </li>

                    <li style={li} className="nav-item dropdown">
                        <a className="nav-link dropdown" href="/cart"><img style={{width:`40px`, height:`40px`}} src={cart} alt="giỏ hàng"/></a>
                         </li>
                        
                </div>
            </div>
        </div>




        <div style={{backgroundColor: `#03A9F4`,color: `aliceblue`,}}>
            <div className="container" style={{display: `flex`, justifyContent: `space-around`,}}>
                <li style={li} className="nav-item dropdown ">
                    <a className="nav-link dropdown" href="/">
                         TRANG CHỦ
                    </a> 
                    


                 </li>

                <li style={li} className="nav-item dropdown ">
                    <a className="nav-link dropdown" href="/">
                         GIỚI THIỆU
                    </a>
                    
                </li>
                <li style={li} className="nav-item dropdown ">
                    <a className="nav-link dropdown" href="/#">
                        SẢN PHẨM
                    </a>
                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li style={li}><a className="dropdown-item" href="/#">Kho Sách</a></li>
                    <li style={li}><a className="dropdown-item" href="/#">Sách Tham Khảo</a></li>
                    <li style={li}><a className="dropdown-item" href="/#">Dụng Cụ Học Tập</a></li>
                    <li style={li}><a className="dropdown-item" href="/#">Văn Phòng Phẩm</a></li>
                    <li style={li}><a className="dropdown-item" href="/#">Đồ Chơi </a></li>
                    <li style={li}><a className="dropdown-item" href="/#">Lịch Tết</a></li>
                    <li style={li}><a className="dropdown-item" href="/#">Quà Tặng & Phụ Kiện</a></li>
                 </ul>

                </li>
                 {/* <li style={li} className="nav-item dropdown ">
                    <a className="nav-link dropdown" href="/#">
                    TƯ VẤN MUA SẮM
                     </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li style={li}><a className="dropdown-item" href="/#">Review Sách</a></li>
                        <li style={li}><a className="dropdown-item" href="/#">Đồ Chơi Cho Bé</a></li>
                        <li style={li}><a className="dropdown-item" href="/#">Đồ Dùng Văn Phòng Phẩm</a></li>
                        <li style={li}><a className="dropdown-item" href="/#">Khuyến Mại Và Ưu Đãi</a></li>
                     </ul>
                </li> */}

                <li style={li} className="nav-item dropdown ">
                    <a className="nav-link dropdown" href="/#">
                     TUYỂN DỤNG
                     </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li style={li}><a className="dropdown-item" href="/ketoannoibo">Kế Toán Nội Bộ</a></li>
                        <li style={li}><a className="dropdown-item" href="/giamsatvanhanh">Giám Sát Vận Hành</a></li>

                        <li style={li}><a className="dropdown-item" href="/quanliquay">Quản Lí Quầy</a></li>
                        <li style={li}><a className="dropdown-item" href="/troligiamdoc">TRỢ LÍ GIÁM ĐỐC</a></li>
                        <li style={li}><a className="dropdown-item" href="/nhanvienthumua">NHÂN VIÊN THU MUA</a></li>
                        <li style={li}><a className="dropdown-item" href="/nhanvienkiemke">Nhân Viên Kiểm Kê</a></li>
                    </ul>
                 </li>
                <li style={li} className="nav-item dropdown ">
                     <a className="nav-link dropdown" href="/lienhe">
                      LIÊN HỆ
                    </a>

                </li>
            </div>
        </div>
    </div>
    )
}