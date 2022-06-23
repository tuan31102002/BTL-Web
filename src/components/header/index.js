import React from "react";
import './style.css'
import cart from '../../components/header/assets/cart.png'
import logo from '../../components/header/assets/logo.webp'
import phone from '../../components/header/assets/phone.png'
import user from '../../components/header/assets/user.png'
import { Link } from "react-router-dom";


const li ={
    fontWeight:`500`,fontSize: `13px`,
}
const font ={
    fontSize: `16px`,
    color:`#fff`,
    fontWeight:`500`,
    
}


export default function Header(){
    return(
        <div>
        <div  className="container" >
            <div className="row">
                <div style={{width:`20%`}}>
                    <a href="/"><img  style={{width: `200px`, height:`70px`}} src={logo}  alt="logo.webp"/></a>
                    
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
                        <a className="nav-link dropdown" href="/"><img style={{width:`40px`, height:`40px`}} src={user} alt="user"/></a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li ><Link style={li}   className="nav-link dropdown" to="/dangnhap" >Đăng nhập</Link></li>
                            <li ><Link style={li}   className="nav-link dropdown" to="/dangki" >Đăng kí</Link></li>
                        </ul>
                     </li>

                    <li  className="nav-item dropdown">        
                        <Link style={li}   className="nav-link dropdown" to="/cart" ><img style={{width:`40px`, height:`40px`}} src={cart} alt="giỏ hàng"/></Link>
                         </li>
                        
                </div>
            </div>
        </div>




        <div style={{backgroundColor: `#03A9F4`,color: `aliceblue`,}}>
            <div className="container" style={{display: `flex`, justifyContent: `space-around`,}}>
                <li className="nav-item dropdown ">
                <Link  style={font}  className="nav-link dropdown" to="/" >TRANG CHỦ</Link>
                    


                 </li>

                <li   className="nav-item dropdown ">
                   
                    <Link  style={font}  className="nav-link dropdown" to="/gioithieu" >GIỚI THIỆU</Link>
                    
                </li>
                <li className="nav-item dropdown ">
                    <Link  style={font}  className="nav-link dropdown" to="/shop" >SẢN PHẨM</Link>
                 {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a style={li} className="dropdown-item" href="/">Kho Sách</a></li>
                    <li><a style={li} className="dropdown-item" href="/">Sách Tham Khảo</a></li>
                    <li><a style={li} className="dropdown-item" href="/">Dụng Cụ Học Tập</a></li>
                    <li><a style={li} className="dropdown-item" href="/">Văn Phòng Phẩm</a></li>
                    <li><a style={li} className="dropdown-item" href="/">Đồ Chơi </a></li>
                    <li><a style={li} className="dropdown-item" href="/">Lịch Tết</a></li>
                    <li><a style={li} className="dropdown-item" href="/">Quà Tặng & Phụ Kiện</a></li>
                 </ul> */}

                </li>
                 {/* <li style={li} className="nav-item dropdown ">
                    <a className="nav-link dropdown" href="/">
                    TƯ VẤN MUA SẮM
                     </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li style={li}><a className="dropdown-item" href="/">Review Sách</a></li>
                        <li style={li}><a className="dropdown-item" href="/">Đồ Chơi Cho Bé</a></li>
                        <li style={li}><a className="dropdown-item" href="/">Đồ Dùng Văn Phòng Phẩm</a></li>
                        <li style={li}><a className="dropdown-item" href="/">Khuyến Mại Và Ưu Đãi</a></li>
                     </ul>
                </li> */}

                <li className="nav-item dropdown ">
                    <Link  style={font}  className="nav-link dropdown" to="/trangchutuyendung" >TUYỂN DỤNG</Link>
                    <ul style={{width:`200px`}}  className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link style={li}   className="nav-link dropdown" to="/ketoannoibo" >KẾ TOÁN NỘI BỘ</Link></li>
                            <li ><Link style={li}   className="nav-link dropdown" to="/giamsatvanhanh" >GIÁM SÁT VẬN HÀNH</Link></li>

                            <li><Link style={li}   className="nav-link dropdown" to="/quanliquay" >QUẢN LÍ QUẦY</Link></li>
                            <li><Link style={li}   className="nav-link dropdown" to="/troligiamdoc" >TRỢ LÍ GIÁM ĐỐC</Link></li>
                            <li><Link style={li}   className="nav-link dropdown" to="/nhanvienkiemke" >NHÂN VIÊN KIỂM KÊ</Link></li>
                            
                    </ul>
                 </li>
                <li  className="nav-item dropdown ">
                <Link  style={font}  className="nav-link dropdown" to="/lienhe" >LIÊN HỆ</Link>
                    

                </li>
            </div>
        </div>
    </div>
    )
}