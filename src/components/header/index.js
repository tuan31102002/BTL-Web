import React from "react";
import './style.css'

export default function Header(){
    return(
        <div>
        <div className="container" style="margin-top:10px">
            <div className=" row ">
                <div style={{width:`20%`}}>
                    <a href="#"><img style={{width: `200px`, height:`70px`}} src="image/logo.webp" alt=""/></a>

                </div>
                <div style={{width:`50%`,}}>
                    <div style={{marginTop: `20px`,}} className="d-flex">
                        <input style={{width: `400px`,}} className="form-control me-2" type="search" placeholder="Search"
                                 aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                     </div>
                </div>
                <div style={{width:`20%`,}}>
                     <ul/>
                        <li>
                            <a>
                                <p style={{fontSize:`13px`}}>Giờ mở cửa (08.00-22.00)</p>
                                <p style={{fontSize:`18px`,color: `#03A9F4`,}}> <img width="30px" height="30px"
                                 src="image/phone.png" alt=""/>
                                 0941231828</p>
                             </a>
                        </li>
                </div>
                 <div style={{width:`10%`,display: flex ,listStyleCenter,}}>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown" href="#"><img src="image/user.png" alt=""/></a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Đăng Nhập</a></li>
                            <li><a className="dropdown-item" href="#">Đăng Ký</a></li>
                        </ul>
                     </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown" href="#"><img src="image/cart.png" alt=""/></a>
                         </li>
                        
                </div>
            </div>
        </div>




        <div style={{backgroundColor: `#03A9F4`,color: aliceblue,}}>
            <div className="container" style={{display: flex, justifyContent: space-around,}}>
                <li className="nav-item dropdown ">
                    <a className="nav-link dropdown" href="#">
                         TRANG CHỦ
                    </a> 

                 </li>

                <li className="nav-item dropdown ">
                    <a className="nav-link dropdown" href="#">
                         GIỚI THIỆU
                    </a>

                </li>
                <li className="nav-item dropdown ">
                    <a className="nav-link dropdown" href="#">
                        SẢN PHẨM
                    </a>
                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Kho Sách</a></li>
                    <li><a className="dropdown-item" href="#">Sách Tham Khảo</a></li>
                    <li><a className="dropdown-item" href="#">Dụng Cụ Học Tập</a></li>
                    <li><a className="dropdown-item" href="#">Văn Phòng Phẩm</a></li>
                    <li><a className="dropdown-item" href="#">Đồ Chơi </a></li>
                    <li><a className="dropdown-item" href="#">Lịch Tết</a></li>
                    <li><a className="dropdown-item" href="#">Quà Tặng & Phụ Kiện</a></li>
                 </ul>

                </li>
                 <li className="nav-item dropdown ">
                    <a className="nav-link dropdown" href="#">
                    TƯ VẤN MUA SẮM
                     </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Review Sách</a></li>
                        <li><a className="dropdown-item" href="#">Đồ Chơi Cho Bé</a></li>
                        <li><a className="dropdown-item" href="#">Đồ Dùng Văn Phòng Phẩm</a></li>
                        <li><a className="dropdown-item" href="#">Khuyến Mại Và Ưu Đãi</a></li>
                     </ul>
                </li>

                <li className="nav-item dropdown ">
                    <a className="nav-link dropdown" href="#">
                     TUYỂN DỤNG
                     </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Kế Toán Nội Bộ</a></li>
                        <li><a className="dropdown-item" href="#">Giám Sát Vận Hành</a></li>

                        <li><a className="dropdown-item" href="#">Quản Lí Quầy</a></li>
                        <li><a className="dropdown-item" href="#">TRỢ LÍ GIÁM ĐỐC</a></li>
                        <li><a className="dropdown-item" href="#">NHÂN VIÊN THU MUA</a></li>
                        <li><a className="dropdown-item" href="#">Nhân Viên Kiểm Kê</a></li>
                    </ul>
                 </li>
                <li className="nav-item dropdown ">
                     <a className="nav-link dropdown" href="#">
                      LIÊN HỆ
                    </a>

                </li>
            </div>
        </div>
    </div>
    )
}