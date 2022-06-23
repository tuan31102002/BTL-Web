import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../footer';
import Header from '../header';
import './style.css';



import h1 from '../../components/home/assets/home1.png'
import h2 from '../../components/home/assets/home2.png'
import h3 from '../../components/home/assets/home3.png'
import h4 from '../../components/home/assets/home4.png'
import h5 from '../../components/home/assets/home5.png'
import h6 from '../../components/home/assets/home6.png'
import h7 from '../../components/home/assets/home7.png'
import h8 from '../../components/home/assets/home8.png'
import h9 from '../../components/home/assets/home9.png'
import h10 from '../../components/home/assets/home10.png'
import h11 from '../../components/home/assets/home11.png'
import h12 from '../../components/home/assets/home12.png'
import h13 from '../../components/home/assets/home13.png'
import h14 from '../../components/home/assets/home14.png'
import h15 from '../../components/home/assets/home15.png'
import h16 from '../../components/home/assets/home16.png'
import h17 from '../../components/home/assets/home17.png'
import h18 from '../../components/home/assets/home18.png'
import h19 from '../../components/home/assets/home19.png'
import h20 from '../../components/home/assets/home20.png'
import h21 from '../../components/home/assets/home21.png'
import h22 from '../../components/home/assets/home22.png'
import h23 from '../../components/home/assets/home23.png'
import h24 from '../../components/home/assets/home24.png'
import h25 from '../../components/home/assets/home25.png'
import h26 from '../../components/home/assets/home26.png'
import h27 from '../../components/home/assets/home27.png'
import h28 from '../../components/home/assets/home28.png'
import h29 from '../../components/home/assets/home29.png'
import h30 from '../../components/home/assets/home30.png'
import h31 from '../../components/home/assets/home31.png'
import h32 from '../../components/home/assets/home32.png'
import h33 from '../../components/home/assets/home33.png'
import h34 from '../../components/home/assets/home34.png'
import h35 from '../../components/home/assets/home35.png'
import h36 from '../../components/home/assets/home36.png'
import h37 from '../../components/home/assets/home37.png'
import h38 from '../../components/home/assets/home38.png'
import h39 from '../../components/home/assets/home39.png'
import h40 from '../../components/home/assets/home40.png'
import h41 from '../../components/home/assets/home41.png'
import h42 from '../../components/home/assets/home42.png'
import h43 from '../../components/home/assets/home43.png'
import h44 from '../../components/home/assets/home44.png'
import h45 from '../../components/home/assets/home45.png'
import h46 from '../../components/home/assets/home46.png'
import h47 from '../../components/home/assets/home47.png'
import h48 from '../../components/home/assets/home48.png'
import h49 from '../../components/home/assets/home49.png'
import h50 from '../../components/home/assets/home50.png'
import h51 from '../../components/home/assets/home51.png'
import h52 from '../../components/home/assets/home52.png'
import h53 from '../../components/home/assets/home53.png'
import h54 from '../../components/home/assets/home54.png'
import h55 from '../../components/home/assets/home55.png'
import h56 from '../../components/home/assets/home56.png'
import h57 from '../../components/home/assets/home57.png'
import h58 from '../../components/home/assets/home58.png'
import h59 from '../../components/home/assets/home59.png'
import h60 from '../../components/home/assets/home60.png'
import h61 from '../../components/home/assets/home61.png'
import h62 from '../../components/home/assets/home62.png'
import h65 from '../../components/home/assets/home65.svg'
import h66 from '../../components/home/assets/home66.svg'
import h67 from '../../components/home/assets/home67.svg'
import h68 from '../../components/home/assets/home68.svg'


const row2 = {
    display: `flex`,
    flexWrap: `wrap`
}

const row3 = {
    display: `flex`,
    backgroundColor: `white`,
    justifyContent: `spaceBetween`
}


export default function Home() {


    



    return (
        <div>
            <Header />
            <div className="container">
                <img style={{width: `100%`,height:`350px`}} src={h1} alt="" />
            </div>
            <div style={{backgroundColor: `white`}}>
                <div className="container">
                    <div style={{paddingTop: `0.2cm`, display: `flex`,justifyContent: `spaceBetween`}}>
                        <img style={{width: `24.5%`,height:`141.09px`}} src={h2} alt="" />
                        <img style={{width: `24.5%`,height:`141.09px`}} src={h3} alt="" />
                        <img style={{width: `24.5%`,height:`141.09px`}} src={h4} alt="" />
                        <img style={{width: `24.5%`,height:`141.09px`}} src={h5} alt="" />
                                    </div>
                                    <div style={{paddingTop: `0.2cm`,paddingBottom: `0.2cm`, display: `flex`,justifyContent: `spaceBetween`}}>
                                        <div className="nav1">
                                            <img src={h6} alt="" />
                                                <h5>Danh mục nổi bật</h5>
                                        </div>
                                        <div className="nav2">
                                            <div className="nav3">
                                                <img  width="48px" height="48px"  src={h7} alt='' />
                                                    <p>Kho sách</p>
                                            </div>
                                            <div className="nav3">
                                                <img width="48px" height="48px" src={h8} alt='' />
                                                    <p>Sách tham khảo</p>
                                            </div>
                                        </div>
                                        <div className="nav2">
                                            <div className="nav3">
                                                <img width="48px" height="48px" src={h9}  alt='' />
                                                    <p>Dụng cụ học tập</p>
                                            </div>
                                            <div className="nav3">
                                                <img width="48px" height="48px" src={h10} alt='' />
                                                    <p>Văn phỏng phẩm</p>
                                            </div>
                                        </div>
                                        <div className="nav2">
                                            <div className="nav3">
                                                <img width="48px" height="48px" src={h11} alt='' />
                                                    <p>Đồ chơi</p>
                                            </div>
                                            <div className="nav3">
                                                <img width="48px" height="48px" src={h12} alt='' />
                                                    <p>Lịch tết</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{paddingTop: `1cm`}} className="container">
                                <div className="nav4">
                                    <div className="nav5">
                                        <p className="word3">TRUYỆN THIẾU NHI</p>
                                    </div>
                                </div>

                                <div style={{paddingTop: `0.5cm`}}>
                                    <div style={{display: `flex`,backgroundColor: `white`}}>
                                        <div style={{width: `25%`}}>
                                            <img style={{paddingBottom: `0.3cm`}} width="100%" src={h52} alt="" />
                                                <img width="100%" src={h53} alt="" />
                                                </div>
                                                <div style={{width: `75%`}}>
                                                    <div style={row2}>
                                                        <div style={{width: `25%`,height: `300px`}}>
                                                            <Link style={{textDecoration: `none`}}to="/shop/1">
                                                                <div className="container10">
                                                                    <img style={{paddingBottom: `0.3cm`}} width="100%" src={h54} alt="" />
                                                                        <div className="word2"><b>Doraemon Truyện Ngắn Tập 7</b></div>
                                                                        <div className="word1">
                                                                            <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>16.200 ₫</b></p>
                                                                        </div>
                                                                </div>
                                                            </Link>
                                                        </div>

                                                        <div style={{width: `25%`,height: `300px`}}>
                                                        <Link style={{textDecoration: `none`}}to="/shop/2">
                                                            <div className="container10">
                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src={h55} alt="" />

                                                                    <div className="word2"><b>Doraemon Chọn Lọc



                                                                    </b></div>
                                                                    <div className="word1">
                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>40.000₫</b></p>
                                                                    </div>
                                                            </div>
                                                        </Link>  
                                                        </div>
                                                        <div style={{width: `25%`,height: `300px`}}>
                                                        <Link style={{textDecoration: `none`}}to="/shop/3">
                                                            <div className="container10">
                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src={h56} alt="" />

                                                                    <div className="word2"><b>Doraemon Tranh Truyện Màu
                                                                    </b></div>
                                                                    <div className="word1">
                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>23.300 ₫</b></p>
                                                                    </div>
                                                            </div>
                                                        </Link>
                                                        </div>
                                                        <div style={{width: `25%`,height: `300px`}}>
                                                        <Link style={{textDecoration: `none`}}to="/shop/4">
                                                            <div className="container10">
                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src={h57} alt="" />

                                                                    <div className="word2"><b>Doraemon Truyện Ngắn Tập 5</b></div>
                                                                    <div className="word1">
                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>18.000 ₫
                                                                        </b></p>
                                                                    </div>
                                                            </div>
                                                        </Link>    
                                                        </div>
                                                        <div style={{width: `25%`,height: `300px`}}>
                                                        <Link style={{textDecoration: `none`}}to="/shop/5">
                                                            <div className="container10">
                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src={h58} alt="" />

                                                                    <div className="word2"><b>Doraemon Truyện Ngắn - Tập 6</b></div>
                                                                    <div className="word1">
                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>18.000₫</b></p>

                                                                    </div>
                                                            </div>
                                                        </Link>
                                                        </div>
                                                         <div style={{width: `25%`,height: `300px`}}>
                                                         <Link style={{textDecoration: `none`}}to="/shop/6">
                                                            <div className="container10">
                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src={h59} alt="" />

                                                                    <div className="word2"><b>Nobita Và Hành Tinh Thú
                                                                    </b></div>
                                                                    <div className="word1">
                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>16.200 ₫
                                                                        </b></p>

                                                                    </div>
                                                            </div>
                                                        </Link>
                                                        </div>
                                                         <div style={{width: `25%`,height: `300px`}}>
                                                         <Link style={{textDecoration: `none`}}to="/shop/7">
                                                            <div className="container10">
                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" height="100%"
                                                                    src={h60} alt="" />

                                                                    <div className="word2"><b>Doraemon - Kỉ Niệm Về Bà
                                                                    </b></div>
                                                                    <div className="word1">
                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>25.000 ₫
                                                                        </b></p>

                                                                    </div>
                                                            </div>
                                                        </Link>
                                                        </div>
                                                         <div style={{width: `25%`,height: `300px`}}>
                                                         <Link style={{textDecoration: `none`}}to="/shop/8">
                                                            <div className="container10">
                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src={h61} alt="" />

                                                                    <div className="word2"><b>Doraemon Học Tập</b></div>
                                                                    <div className="word1">
                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>40.000 ₫
                                                                        </b></p>
                                                                    </div>
                                                            </div>
                                                        </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>


                                </div>

                                <div style={{paddingTop: `1cm`}} className="container">
                                    <div className="nav4">
                                        <div className="nav5">
                                            <p className="word3">SÁCH GIÁO KHOA</p>
                                        </div>
                                    </div>

                                    <div style={{paddingTop: `0.5cm`}}>
                                        <div style={{display: `flex`,backgroundColor: `white`}}>
                                            <div style={{width: `25%`}}>
                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src={h12} alt="" />
                                                    <img width="100%" src={h13} alt="" />
                                                    </div>
                                                    <div style={{width: `75%`}}>
                                                        <div style={row2}>
                                                             <div style={{width: `25%`,height: `300px`}}>
                                                             <Link style={{textDecoration: `none`}}to="/shop/9">
                                                                <div className="container10">
                                                                    <img style={{paddingBottom: `0.3cm`}} width="100%" src={h14} alt="" />

                                                                        <div className="word2"><b>10 Chuyên Đề Bồi Dưỡng</b></div>
                                                                        <div className="word1">
                                                                            <p style={{paddingRight: `10px`,color: `#03A9F4`}}>27.000₫</p>
                                                                            <p style={{color: `#333333`}}><del>30.000₫</del></p>
                                                                        </div>
                                                                </div>
                                                            </Link>
                                                            </div>

                                                             <div style={{width: `25%`,height: `300px`}}>
                                                             <Link style={{textDecoration: `none`}}to="/shop/10">
                                                                <div className="container10">
                                                                    <img style={{paddingBottom: `0.3cm`}} width="100%" src={h15} alt="" />

                                                                        <div className="word2"><b>Tiếng Anh 8 - Tập 1</b></div>
                                                                        <div className="word1">
                                                                            <p style={{paddingRight: `10px`,color: `#03A9F4`}}>34.200₫</p>
                                                                            <p style={{color: `#333333`}}><del>38.000₫</del></p>
                                                                        </div>
                                                                </div>
                                                            </Link>
                                                            </div>
                                                             <div style={{width: `25%`,height: `300px`}}>
                                                             <Link style={{textDecoration: `none`}}to="/shop/11">
                                                                <div className="container10">
                                                                    <img style={{paddingBottom: `0.3cm`}} width="100%" src={h16} alt="" />

                                                                        <div className="word2"><b>Tiếng Anh 9 - Tập 2</b></div>
                                                                        <div className="word1">
                                                                            <p style={{paddingRight: `10px`,color: `#03A9F4`}}>107.100₫</p>
                                                                            <p style={{color: `#333333`}}><del>119.000₫</del></p>
                                                                        </div>
                                                                </div>
                                                            </Link>
                                                            </div>
                                                             <div style={{width: `25%`,height: `300px`}}>
                                                             <Link style={{textDecoration: `none`}}to="/shop/12">
                                                                <div className="container10">
                                                                    <img style={{paddingBottom: `0.3cm`}} width="100%" src={h17} alt="" />

                                                                        <div className="word2"><b>Bộ SGK lớp 8</b></div>
                                                                        <div className="word1">
                                                                            <p style={{paddingRight: `10px`,color: `#03A9F4`}}>103.500₫</p>
                                                                            <p style={{color: `#333333`}}><del>115.000₫</del></p>
                                                                        </div>
                                                                </div>
                                                            </Link>
                                                            
                                                            </div>
                                                             <div style={{width: `25%`,height: `300px`}}>
                                                             <Link style={{textDecoration: `none`}}to="/shop/13">
                                                                <div className="container10">
                                                                    <img style={{paddingBottom: `0.3cm`}} width="100%" src={h18} alt="" />

                                                                        <div className="word2"><b>150 Bài Tập Tiếng Việt 4</b></div>
                                                                        <div className="word1">
                                                                            <p style={{paddingRight: `10px`,color: `#03A9F4`}}>44.100₫</p>
                                                                            <p style={{color: `#333333`}}><del>49.000₫</del></p>
                                                                        </div>
                                                                </div>
                                                            </Link>
                                                            </div>
                                                             <div style={{width: `25%`,height: `300px`}}>
                                                             <Link style={{textDecoration: `none`}}to="/shop/14">
                                                                <div className="container10">
                                                                    <img style={{paddingBottom: `0.3cm`}} width="100%" src={h19} alt="" />

                                                                        <div className="word2"><b>150 Bài Văn Hay Lớp 3</b></div>
                                                                        <div className="word1">
                                                                            <p style={{paddingRight: `10px`,color: `#03A9F4`}}>39.600₫</p>
                                                                            <p style={{color: `#333333`}}><del>44.000₫</del></p>
                                                                        </div>
                                                                </div>
                                                            </Link>
                                                            </div>
                                                             <div style={{width: `25%`,height: `300px`}}>
                                                             <Link style={{textDecoration: `none`}}to="/shop/15">
                                                                <div className="container10">
                                                                    <img style={{paddingBottom: `0.3cm`}} width="100%" height="100%"
                                                                        src={h20} alt="" />

                                                                        <div className="word2"><b>155 Bài Làm Văn Tiếng Việt 4</b></div>
                                                                        <div className="word1">
                                                                            <p style={{paddingRight: `10px`,color: `#03A9F4`}}>43.200₫</p>
                                                                            <p style={{color: `#333333`}}><del>48.000₫</del></p>
                                                                        </div>
                                                                </div>
                                                            </Link>
                                                            </div>
                                                             <div style={{width: `25%`,height: `300px`}}>
                                                             <Link style={{textDecoration: `none`}}to="/shop/16">
                                                                <div className="container10">
                                                                    <img style={{paddingBottom: `0.3cm`}} width="100%" src={h21} alt="" />

                                                                        <div className="word2"><b>155 Bài Làm Văn Tiếng Việt 5</b></div>
                                                                        <div className="word1">
                                                                            <p style={{paddingRight: `10px`,color: `#03A9F4`}}>43.200₫</p>
                                                                            <p style={{color: `#333333`}}><del>48.000₫</del></p>
                                                                        </div>
                                                                </div>
                                                            </Link>  
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>



                                    </div>


                                    <div style={{paddingTop: `1cm`}} className="container">
                                        <div className="nav4">
                                            <div className="nav5">
                                                <p className="word3">VĂN PHÒNG PHẨM</p>
                                            </div>
                                        </div>

                                        <div style={{paddingTop: `0.5cm`}}>
                                            <div style={{display: `flex`,backgroundColor: `white`}}>
                                                <div style={{width: `25%`}}>
                                                    <img style={{paddingBottom: `0.3cm`}} width="100%" src={h42} alt="" />
                                                        <img width="100%" src={h43} alt="" />
                                                        </div>
                                                        <div style={{width: `75%`}}>
                                                            <div style={row2}>
                                                                 <div style={{width: `25%`,height: `300px`}}>
                                                                 <Link style={{textDecoration: `none`}}to="/shop/17">
                                                                    <div className="container10">
                                                                        <img style={{paddingBottom: `0.3cm`}} width="100%" src={h44} alt="" />

                                                                            <div className="word2"><b>Xe Đua Địa Hình Điều Khiển</b></div>
                                                                            <div className="word1">
                                                                                <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>86.000₫</b></p>
                                                                            </div>
                                                                    </div>
                                                                </Link>
                                                                </div>

                                                                 <div style={{width: `25%`,height: `300px`}}>
                                                                 <Link style={{textDecoration: `none`}}to="/shop/18">
                                                                    <div className="container10">
                                                                        <img style={{paddingBottom: `0.3cm`}} width="100%" src={h45} alt="" />

                                                                            <div className="word2"><b>Ống Chì Guangbo (36 màu)


                                                                            </b></div>
                                                                            <div className="word1">
                                                                                <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>22.000₫</b></p>
                                                                            </div>
                                                                    </div>
                                                                </Link>
                                                                </div>
                                                                 <div style={{width: `25%`,height: `300px`}}>
                                                                 <Link style={{textDecoration: `none`}}to="/shop/19">
                                                                    <div className="container10">
                                                                        <img style={{paddingBottom: `0.3cm`}} width="100%" src={h46} alt="" />

                                                                            <div className="word2"><b>Bút Sáp Màu (10 màu)
                                                                            </b></div>
                                                                            <div className="word1">
                                                                                <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>10.000₫</b></p>
                                                                            </div>
                                                                    </div>
                                                                </Link>
                                                                </div>
                                                                 <div style={{width: `25%`,height: `300px`}}>
                                                                 <Link style={{textDecoration: `none`}}to="/shop/20">
                                                                    <div className="container10">
                                                                        <img style={{paddingBottom: `0.3cm`}} width="100%" src={h47} alt="" />

                                                                            <div className="word2"><b>Bút Sáp Màu G-star</b></div>
                                                                            <div className="word1">
                                                                                <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>51.000₫</b></p>
                                                                            </div>
                                                                    </div>
                                                                </Link>
                                                                </div>
                                                                 <div style={{width: `25%`,height: `300px`}}>
                                                                 <Link style={{textDecoration: `none`}}to="/shop/21">
                                                                    <div className="container10">
                                                                        <img style={{paddingBottom: `0.3cm`}} width="100%" src={h48} alt="" />

                                                                            <div className="word2"><b>Bút Xóa Nước</b></div>
                                                                            <div className="word1">
                                                                                <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>15.000₫</b></p>

                                                                            </div>
                                                                    </div>
                                                                </Link>
                                                                </div>
                                                                 <div style={{width: `25%`,height: `300px`}}>
                                                                 <Link style={{textDecoration: `none`}}to="/shop/22">
                                                                    <div className="container10">
                                                                        <img style={{paddingBottom: `0.3cm`}} width="100%" src={h49} alt="" />

                                                                            <div className="word2"><b>Sổ Lò Xo Cool B5 200 Trang
                                                                            </b></div>
                                                                            <div className="word1">
                                                                                <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>35.000₫</b></p>

                                                                            </div>
                                                                    </div>
                                                                </Link>
                                                                </div>
                                                                 <div style={{width: `25%`,height: `300px`}}>
                                                                 <Link style={{textDecoration: `none`}}to="/shop/23">
                                                                    <div className="container10">
                                                                        <img style={{paddingBottom: `0.3cm`}} width="100%" height="100%"
                                                                            src={h50} alt="" />

                                                                            <div className="word2"><b>Bút Chì Màu 18 Màu Có Tẩy
                                                                            </b></div>
                                                                            <div className="word1">
                                                                                <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>33.000₫</b></p>

                                                                            </div>
                                                                    </div>
                                                                </Link>
                                                                </div>
                                                                 <div style={{width: `25%`,height: `300px`}}>
                                                                 <Link style={{textDecoration: `none`}}to="/shop/24">
                                                                    <div className="container10">
                                                                        <img style={{paddingBottom: `0.3cm`}} width="100%" src={h51} alt="" />

                                                                            <div className="word2"><b>Chì Màu Swaans 12 Màu Dài</b></div>
                                                                            <div className="word1">
                                                                                <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>79.000₫</b></p>
                                                                            </div>
                                                                    </div>
                                                                </Link>    
                                                                </div>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>


                                        </div>

                                        <div style={{paddingTop: `1cm`}} className="container">
                                            <div className="nav4">
                                                <div className="nav5">
                                                    <p className="word3">ĐỒ CHƠI</p>
                                                </div>
                                            </div>

                                            <div style={{paddingTop: `0.5cm`}}>
                                                <div style={{display: `flex`,backgroundColor: `white`}}>
                                                    <div style={{width: `25%`}}>
                                                        <img style={{paddingBottom: `0.3cm`}} width="100%" src={h32} alt="" />
                                                            <img width="100%" src={h33} alt="" />
                                                            </div>
                                                            <div style={{width: `75%`}}>
                                                                <div style={row2}>
                                                                     <div style={{width: `25%`,height: `300px`}}>
                                                                     <Link style={{textDecoration: `none`}}to="/shop/25">
                                                                        <div className="container10">
                                                                            <img style={{paddingBottom: `0.3cm`}} width="100%" src={h34} alt="" />

                                                                                <div className="word2"><b>Xe Đua Địa Hình Điều Khiển</b></div>
                                                                                <div className="word1">
                                                                                    <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>204.000₫</b></p>
                                                                                </div>
                                                                        </div>
                                                                    </Link>
                                                                    </div>

                                                                     <div style={{width: `25%`,height: `300px`}}>
                                                                     <Link style={{textDecoration: `none`}}to="/shop/26">  
                                                                        <div className="container10">
                                                                            <img style={{paddingBottom: `0.3cm`}} width="100%" src={h35} alt="" />

                                                                                <div className="word2"><b>Đồ Chơi Xe Sắt Cứu Hỏa
                                                                                </b></div>
                                                                                <div className="word1">
                                                                                    <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>87.000₫</b></p>
                                                                                </div>
                                                                        </div>
                                                                    </Link>
                                                                    </div>
                                                                     <div style={{width: `25%`,height: `300px`}}>
                                                                     <Link style={{textDecoration: `none`}}to="/shop/27">
                                                                        <div className="container10">
                                                                            <img style={{paddingBottom: `0.3cm`}} width="100%" src={h36} alt="" />

                                                                                <div className="word2"><b>Máy Bay Điều Khiển Từ Xa
                                                                                </b></div>
                                                                                <div className="word1">
                                                                                    <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>133.000₫</b></p>
                                                                                </div>
                                                                        </div>
                                                                    </Link>
                                                                    </div>
                                                                     <div style={{width: `25%`,height: `300px`}}>
                                                                     <Link style={{textDecoration: `none`}}to="/shop/28">
                                                                        <div className="container10">
                                                                            <img style={{paddingBottom: `0.3cm`}} width="100%" src={h37} alt="" />

                                                                                <div className="word2"><b>Vali Bác Sĩ Mika Xanh</b></div>
                                                                                <div className="word1">
                                                                                    <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>164.000₫</b></p>
                                                                                </div>
                                                                        </div>
                                                                    </Link>
                                                                    </div>
                                                                     <div style={{width: `25%`,height: `300px`}}>
                                                                    <Link style={{textDecoration: `none`}}to="/shop/29">
                                                                        <div className="container10">
                                                                            <img style={{paddingBottom: `0.3cm`}} width="100%" src={h38} alt="" />

                                                                                <div className="word2"><b>Mô Hình Lego Minecraft</b></div>
                                                                                <div className="word1">
                                                                                    <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>240.000₫</b></p>

                                                                                </div>
                                                                        </div>
                                                                    </Link>
                                                                    </div>
                                                                     <div style={{width: `25%`,height: `300px`}}>
                                                                     <Link style={{textDecoration: `none`}}to="/shop/30">
                                                                        <div className="container10">
                                                                            <img style={{paddingBottom: `0.3cm`}} width="100%" src={h39} alt="" />

                                                                                <div className="word2"><b>Mô Hình Lego Friends
                                                                                </b></div>
                                                                                <div className="word1">
                                                                                    <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>173.000₫</b></p>

                                                                                </div>
                                                                        </div>
                                                                     </Link>   
                                                                    </div>
                                                                     <div style={{width: `25%`,height: `300px`}}>
                                                                     <Link style={{textDecoration: `none`}}to="/shop/31">
                                                                        <div className="container10">
                                                                            <img style={{paddingBottom: `0.3cm`}} width="100%" height="100%"
                                                                                src={h40} alt="" />

                                                                                <div className="word2"><b>Con Quay Vô Cực</b></div>
                                                                                <div className="word1">
                                                                                    <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>93.000₫</b></p>

                                                                                </div>
                                                                        </div>
                                                                    </Link>
                                                                    </div>
                                                                     <div style={{width: `25%`,height: `300px`}}>
                                                                     <Link style={{textDecoration: `none`}}to="/shop/32">
                                                                        <div className="container10">
                                                                            <img style={{paddingBottom: `0.3cm`}} width="100%" src={h41} alt="" />

                                                                                <div className="word2"><b>Đồ Chơi Con Quay</b></div>
                                                                                <div className="word1">
                                                                                    <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>93.000₫</b></p>
                                                                                </div>
                                                                        </div>
                                                                    </Link>    
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    </div>
                                                </div>


                                            </div>

                                            <div style={{paddingTop: `1cm`}} className="container">
                                                <div className="nav4">
                                                    <div className="nav5">
                                                        <p className="word3">DỤNG CỤ HỌC TẬP</p>
                                                    </div>
                                                </div>

                                                <div style={{paddingTop: `0.5cm`}}>
                                                    <div style={{display: `flex`,backgroundColor: `white`}}>
                                                        <div style={{width: `25%`}}>
                                                            <img style={{paddingBottom: `0.3cm`}} width="100%" src={h22} alt="" />
                                                                <img width="100%" src={h23} alt="" />
                                                                </div>
                                                                <div style={{width: `75%`}}>
                                                                    <div style={row2}>
                                                                         <div style={{width: `25%`,height: `300px`}}>
                                                                         <Link style={{textDecoration: `none`}}to="/shop/33">
                                                                            <div className="container10">
                                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src={h24} alt="" />

                                                                                    <div className="word2"><b>Bút Bi Hoa Hướng Dương</b></div>
                                                                                    <div className="word1">
                                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>27.000₫</b></p>
                                                                                    </div>
                                                                            </div>
                                                                        </Link>    
                                                                        </div>

                                                                         <div style={{width: `25%`,height: `300px`}}>
                                                                         <Link style={{textDecoration: `none`}}to="/shop/34">
                                                                            <div className="container10">
                                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src={h25} alt="" />

                                                                                    <div className="word2"><b>Giá Đựng Bút Gỗ HX1039</b></div>
                                                                                    <div className="word1">
                                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>301.000₫</b></p>
                                                                                    </div>
                                                                            </div>
                                                                        </Link>    
                                                                        </div>
                                                                         <div style={{width: `25%`,height: `300px`}}>
                                                                         <Link style={{textDecoration: `none`}}to="/shop/35">
                                                                            <div className="container10">
                                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src={h26} alt="" />

                                                                                    <div className="word2"><b>Khay Đựng Bút Sắt Comic</b></div>
                                                                                    <div className="word1">
                                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>34.000₫</b></p>
                                                                                    </div>
                                                                            </div>
                                                                        </Link>
                                                                        </div>
                                                                         <div style={{width: `25%`,height: `300px`}}>
                                                                         <Link style={{textDecoration: `none`}}to="/shop/36">
                                                                            <div className="container10">
                                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src={h27} alt="" />

                                                                                    <div className="word2"><b>Ống Cắm Bút Đôi</b></div>
                                                                                    <div className="word1">
                                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>27.000₫</b></p>
                                                                                    </div>
                                                                            </div>
                                                                        </Link>
                                                                        </div>
                                                                         <div style={{width: `25%`,height: `300px`}}>
                                                                         <Link style={{textDecoration: `none`}}to="/shop/37">
                                                                            <div className="container10">
                                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src={h28} alt="" />

                                                                                    <div className="word2"><b>Bút Kĩ Thuật sensor Xanh Nhạt</b></div>
                                                                                    <div className="word1">
                                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>42.000₫</b></p>

                                                                                    </div>
                                                                            </div>
                                                                        </Link>    
                                                                        </div>
                                                                         <div style={{width: `25%`,height: `300px`}}>
                                                                         <Link style={{textDecoration: `none`}}to="/shop/38">
                                                                            <div className="container10">
                                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src={h29} alt="" />

                                                                                    <div className="word2"><b>Bút Bi Exam Grade Xanh</b></div>
                                                                                    <div className="word1">
                                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>22.000₫</b></p>

                                                                                    </div>
                                                                            </div>
                                                                        </Link>
                                                                        </div>
                                                                         <div style={{width: `25%`,height: `300px`}}>
                                                                         <Link style={{textDecoration: `none`}}to="/shop/39">
                                                                            <div className="container10">
                                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" height="100%"
                                                                                    src={h30} alt="" />

                                                                                    <div className="word2"><b>Bút Mài Thầy Ánh SH0234</b></div>
                                                                                    <div className="word1">
                                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>42.000₫</b></p>

                                                                                    </div>
                                                                            </div>
                                                                        </Link>
                                                                        </div>
                                                                         <div style={{width: `25%`,height: `300px`}}>
                                                                         <Link style={{textDecoration: `none`}}to="/shop/40">
                                                                            <div className="container10">
                                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src={h31} alt="" />

                                                                                    <div className="word2"><b>Bút Mài Thầy Ánh SH022</b></div>
                                                                                    <div className="word1">
                                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>83.000₫</b></p>
                                                                                    </div>
                                                                            </div>
                                                                        </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                        </div>
                                                    </div>


                                                </div>

                                                <div style={{paddingTop: `1cm`}} className="container">
                                                    <div className="nav4">
                                                        <div className="nav5">
                                                            <p className="word3">TƯ VẤN MUA SẮM</p>
                                                        </div>
                                                    </div>

                                                    <div style={{paddingTop: `0.5cm`}}>
                                                        <div style={row3}>
                                                      
                                                            <div style={{width: `30%`}}>
                                                                <img width="100%" src={h62} alt="" />
                                                                    <h6 className="word4">Top 20+ cuốn sách kinh doanh chứng khoán hay nhất mọi thời đại</h6>
                                                                    <p>Hiện nay, chứng khoán đang là thị trường ngách rất đa dạng và phong phú nhưng cũng đầy phức tạp. Đây là nơi...</p>
                                                                    <p>tuan</p>
                                                                    <a style={{textDecoration: `none`}} href="/#"><h6>ĐỌC TIẾP</h6></a>
                                                            </div>
                                                            <div style={{width: `30%`}}>
                                                                <img width="100%" src={h62} alt="" />
                                                                    <h6 className="word4">Top 20+ cuốn sách kinh doanh chứng khoán hay nhất mọi thời đại</h6>
                                                                    <p>Hiện nay, chứng khoán đang là thị trường ngách rất đa dạng và phong phú nhưng cũng đầy phức tạp. Đây là nơi...</p>
                                                                    <p>tuan</p>
                                                                    <a style={{textDecoration: `none`}} href="/#"><h6>ĐỌC TIẾP</h6></a>
                                                            </div>
                                                            <div style={{width: `30%`}}>
                                                                <img width="100%" src={h62} alt="" />
                                                                    <h6 className="word4">Top 20+ cuốn sách kinh doanh chứng khoán hay nhất mọi thời đại</h6>
                                                                    <p>Hiện nay, chứng khoán đang là thị trường ngách rất đa dạng và phong phú nhưng cũng đầy phức tạp. Đây là nơi...</p>
                                                                    <p>tuan</p>
                                                                    <a style={{textDecoration: `none`}} href="/#"><h6>ĐỌC TIẾP</h6></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div style={{paddingTop: `1cm`, paddingBottom: `0.5cm`}} className="container">
                                                    <div className="nav6">
                                                        <div style={{ display: `flex`,justifyContent: `spaceBetween`}}>
                                                            <div style={{width: `21%`}}>
                                                                <div className="d-flex justify-content-center">
                                                                    <img width="45px" height="45px" src={h65} alt="" />
                                                                        <div >
                                                                            <p style={{fontSize: `13px`}}>Giao hàng miễn phí nội thành cho đơn hàng trên 500.000 VNĐ</p>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                            <div style={{width: `21%`}}>
                                                                <div className="d-flex justify-content-center">
                                                                    <img width="45px" height="45px" src={h66} alt="" />
                                                                        <p style={{fontSize: `13px`}}>Nhiều quà tặng và khuyến mãi hấp dẫn khi mua hàng Online.</p>
                                                                </div>
                                                            </div>
                                                            <div style={{width: `21%`}}>
                                                                <div className="d-flex justify-content-center">
                                                                    <img width="45px" height="45px" src={h67} alt="" />
                                                                        <p style={{fontSize: `13px`}}>100% sản phẩm chính hãng. Thanh toán khi nhận hàng</p>
                                                                </div>
                                                            </div>
                                                            <div style={{width: `21%`}}>
                                                                <div className="d-flex justify-content-center">
                                                                    <img width="45px" height="45px" src={h68} alt="" />
                                                                        <p style={{fontSize: `13px`}}>Chính sách mua hàng hấp dẫn</p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                <Footer />

                                            </div>
                                            )
    }


