import React from 'react'
// import { Link } from 'react-router-dom';
import Footer from '../footer';
import Header from '../header';
import './style.css'

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
                <img style={{width: `100%`,height:`350px`}} src="/src/assets/home1.png" alt="" />
            </div>
            <div style={{backgroundColor: `white`}}>
                <div className="container">
                    <div style={{paddingTop: `0.2cm`, display: `flex`,justifyContent: `spaceBetween`}}>
                        <img style={{width: `24.5%`,height:`141.09px`}} src="/src/assets/home2.png" alt="" />
                        <img style={{width: `24.5%`,height:`141.09px`}} src="/src/assets/home3.png" alt="" />
                        <img style={{width: `24.5%`,height:`141.09px`}} src="/src/assets/home4.png" alt="" />
                        <img style={{width: `24.5%`,height:`141.09px`}} src="/src/assets/home5.png" alt="" />
                                    </div>
                                    <div style={{paddingTop: `0.2cm`,paddingBottom: `0.2cm`, display: `flex`,justifyContent: `spaceBetween`}}>
                                        <div className="nav1">
                                            <img src="/src/assets/home6.png" alt="" />
                                                <h5>Danh mục nổi bật</h5>
                                        </div>
                                        <div className="nav2">
                                            <div className="nav3">
                                                <img  width="48px" height="48px"  src="/src/assets/home7.png" alt='' />
                                                    <p>Kho sách</p>
                                            </div>
                                            <div className="nav3">
                                                <img width="48px" height="48px" src="/src/assets/home8.png" alt='' />
                                                    <p>Sách tham khảo</p>
                                            </div>
                                        </div>
                                        <div className="nav2">
                                            <div className="nav3">
                                                <img width="48px" height="48px" src="/src/assets/home9.png"  alt='' />
                                                    <p>Dụng cụ học tập</p>
                                            </div>
                                            <div className="nav3">
                                                <img width="48px" height="48px" src="/src/assets/home10.png" alt='' />
                                                    <p>Văn phỏng phẩm</p>
                                            </div>
                                        </div>
                                        <div className="nav2">
                                            <div className="nav3">
                                                <img width="48px" height="48px" src="/src/assets/home11.png" alt='' />
                                                    <p>Đồ chơi</p>
                                            </div>
                                            <div className="nav3">
                                                <img width="48px" height="48px" src="/src/assets/home12.png" alt='' />
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
                                            <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home52.png" alt="" />
                                                <img width="100%" src="/src/assets/home53.png" alt="" />
                                                </div>
                                                <div style={{width: `75%`}}>
                                                    <div style={row2}>
                                                        <div style={{width: `25%`,height: `300px`}}>
                                                            <div className="container10">
                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home54.png" alt="" />

                                                                    <div className="word2"><b>Doraemon Truyện Ngắn Tập 7</b></div>
                                                                    <div className="word1">
                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>16.200 ₫</b></p>
                                                                    </div>
                                                            </div>
                                                        </div>

                                                        <div style={{width: `25%`,height: `300px`}}>
                                                            <div className="container10">
                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home55.png" alt="" />

                                                                    <div className="word2"><b>Doraemon Chọn Lọc



                                                                    </b></div>
                                                                    <div className="word1">
                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>40.000₫</b></p>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                        <div style={{width: `25%`,height: `300px`}}>
                                                            <div className="container10">
                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home56.png" alt="" />

                                                                    <div className="word2"><b>Doraemon Tranh Truyện Màu
                                                                    </b></div>
                                                                    <div className="word1">
                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>23.300 ₫</b></p>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                        <div style={{width: `25%`,height: `300px`}}>
                                                            <div className="container10">
                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home57.png" alt="" />

                                                                    <div className="word2"><b>Doraemon Truyện Ngắn Tập 5</b></div>
                                                                    <div className="word1">
                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>18.000 ₫
                                                                        </b></p>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                        <div style={{width: `25%`,height: `300px`}}>
                                                            <div className="container10">
                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home58.png" alt="" />

                                                                    <div className="word2"><b>Doraemon Truyện Ngắn - Tập 6</b></div>
                                                                    <div className="word1">
                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>18.000₫</b></p>

                                                                    </div>
                                                            </div>
                                                        </div>
                                                         <div style={{width: `25%`,height: `300px`}}>
                                                            <div className="container10">
                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home59.png" alt="" />

                                                                    <div className="word2"><b>Nobita Và Hành Tinh Thú
                                                                    </b></div>
                                                                    <div className="word1">
                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>16.200 ₫
                                                                        </b></p>

                                                                    </div>
                                                            </div>
                                                        </div>
                                                         <div style={{width: `25%`,height: `300px`}}>
                                                            <div className="container10">
                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" height="100%"
                                                                    src="/src/assets/home60.png" alt="" />

                                                                    <div className="word2"><b>Doraemon - Kỉ Niệm Về Bà
                                                                    </b></div>
                                                                    <div className="word1">
                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>25.000 ₫
                                                                        </b></p>

                                                                    </div>
                                                            </div>
                                                        </div>
                                                         <div style={{width: `25%`,height: `300px`}}>
                                                            <div className="container10">
                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home61.png" alt="" />

                                                                    <div className="word2"><b>Doraemon Học Tập</b></div>
                                                                    <div className="word1">
                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>40.000 ₫
                                                                        </b></p>
                                                                    </div>
                                                            </div>
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
                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home12.png" alt="" />
                                                    <img width="100%" src="/src/assets/home13.png" alt="" />
                                                    </div>
                                                    <div style={{width: `75%`}}>
                                                        <div style={row2}>
                                                             <div style={{width: `25%`,height: `300px`}}>
                                                                <div className="container10">
                                                                    <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home14.png" alt="" />

                                                                        <div className="word2"><b>10 Chuyên Đề Bồi Dưỡng</b></div>
                                                                        <div className="word1">
                                                                            <p style={{paddingRight: `10px`,color: `#03A9F4`}}>27.000₫</p>
                                                                            <p style={{color: `#333333`}}><del>30.000₫</del></p>
                                                                        </div>
                                                                </div>
                                                            </div>

                                                             <div style={{width: `25%`,height: `300px`}}>
                                                                <div className="container10">
                                                                    <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home15.png" alt="" />

                                                                        <div className="word2"><b>Tiếng Anh 8 - Tập 1</b></div>
                                                                        <div className="word1">
                                                                            <p style={{paddingRight: `10px`,color: `#03A9F4`}}>34.200₫</p>
                                                                            <p style={{color: `#333333`}}><del>38.000₫</del></p>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                             <div style={{width: `25%`,height: `300px`}}>
                                                                <div className="container10">
                                                                    <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home16.png" alt="" />

                                                                        <div className="word2"><b>Tiếng Anh 9 - Tập 2</b></div>
                                                                        <div className="word1">
                                                                            <p style={{paddingRight: `10px`,color: `#03A9F4`}}>107.100₫</p>
                                                                            <p style={{color: `#333333`}}><del>119.000₫</del></p>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                             <div style={{width: `25%`,height: `300px`}}>
                                                                <div className="container10">
                                                                    <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home17.png" alt="" />

                                                                        <div className="word2"><b>Bộ SGK lớp 8</b></div>
                                                                        <div className="word1">
                                                                            <p style={{paddingRight: `10px`,color: `#03A9F4`}}>103.500₫</p>
                                                                            <p style={{color: `#333333`}}><del>115.000₫</del></p>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                             <div style={{width: `25%`,height: `300px`}}>
                                                                <div className="container10">
                                                                    <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home18.png" alt="" />

                                                                        <div className="word2"><b>150 Bài Tập Tiếng Việt 4</b></div>
                                                                        <div className="word1">
                                                                            <p style={{paddingRight: `10px`,color: `#03A9F4`}}>44.100₫</p>
                                                                            <p style={{color: `#333333`}}><del>49.000₫</del></p>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                             <div style={{width: `25%`,height: `300px`}}>
                                                                <div className="container10">
                                                                    <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home19.png" alt="" />

                                                                        <div className="word2"><b>150 Bài Văn Hay Lớp 3</b></div>
                                                                        <div className="word1">
                                                                            <p style={{paddingRight: `10px`,color: `#03A9F4`}}>39.600₫</p>
                                                                            <p style={{color: `#333333`}}><del>44.000₫</del></p>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                             <div style={{width: `25%`,height: `300px`}}>
                                                                <div className="container10">
                                                                    <img style={{paddingBottom: `0.3cm`}} width="100%" height="100%"
                                                                        src="/src/assets/home20.png" alt="" />

                                                                        <div className="word2"><b>155 Bài Làm Văn Tiếng Việt 4</b></div>
                                                                        <div className="word1">
                                                                            <p style={{paddingRight: `10px`,color: `#03A9F4`}}>43.200₫</p>
                                                                            <p style={{color: `#333333`}}><del>48.000₫</del></p>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                             <div style={{width: `25%`,height: `300px`}}>
                                                                <div className="container10">
                                                                    <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home21.png" alt="" />

                                                                        <div className="word2"><b>155 Bài Làm Văn Tiếng Việt 5</b></div>
                                                                        <div className="word1">
                                                                            <p style={{paddingRight: `10px`,color: `#03A9F4`}}>43.200₫</p>
                                                                            <p style={{color: `#333333`}}><del>48.000₫</del></p>
                                                                        </div>
                                                                </div>
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
                                                    <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home42.png" alt="" />
                                                        <img width="100%" src="/src/assets/home43.png" alt="" />
                                                        </div>
                                                        <div style={{width: `75%`}}>
                                                            <div style={row2}>
                                                                 <div style={{width: `25%`,height: `300px`}}>
                                                                    <div className="container10">
                                                                        <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home44.png" alt="" />

                                                                            <div className="word2"><b>Xe Đua Địa Hình Điều Khiển</b></div>
                                                                            <div className="word1">
                                                                                <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>86.000₫</b></p>
                                                                            </div>
                                                                    </div>
                                                                </div>

                                                                 <div style={{width: `25%`,height: `300px`}}>
                                                                    <div className="container10">
                                                                        <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home45.png" alt="" />

                                                                            <div className="word2"><b>Ống Chì Guangbo (36 màu)


                                                                            </b></div>
                                                                            <div className="word1">
                                                                                <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>22.000₫</b></p>
                                                                            </div>
                                                                    </div>
                                                                </div>
                                                                 <div style={{width: `25%`,height: `300px`}}>
                                                                    <div className="container10">
                                                                        <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home46.png" alt="" />

                                                                            <div className="word2"><b>Bút Sáp Màu (10 màu)
                                                                            </b></div>
                                                                            <div className="word1">
                                                                                <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>10.000₫</b></p>
                                                                            </div>
                                                                    </div>
                                                                </div>
                                                                 <div style={{width: `25%`,height: `300px`}}>
                                                                    <div className="container10">
                                                                        <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home47.png" alt="" />

                                                                            <div className="word2"><b>Bút Sáp Màu G-star</b></div>
                                                                            <div className="word1">
                                                                                <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>51.000₫</b></p>
                                                                            </div>
                                                                    </div>
                                                                </div>
                                                                 <div style={{width: `25%`,height: `300px`}}>
                                                                    <div className="container10">
                                                                        <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home48.png" alt="" />

                                                                            <div className="word2"><b>Bút Xóa Nước</b></div>
                                                                            <div className="word1">
                                                                                <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>15.000₫</b></p>

                                                                            </div>
                                                                    </div>
                                                                </div>
                                                                 <div style={{width: `25%`,height: `300px`}}>
                                                                    <div className="container10">
                                                                        <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home49.png" alt="" />

                                                                            <div className="word2"><b>Sổ Lò Xo Cool B5 200 Trang
                                                                            </b></div>
                                                                            <div className="word1">
                                                                                <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>35.000₫</b></p>

                                                                            </div>
                                                                    </div>
                                                                </div>
                                                                 <div style={{width: `25%`,height: `300px`}}>
                                                                    <div className="container10">
                                                                        <img style={{paddingBottom: `0.3cm`}} width="100%" height="100%"
                                                                            src="/src/assets/home50.png" alt="" />

                                                                            <div className="word2"><b>Bút Chì Màu 18 Màu Có Tẩy
                                                                            </b></div>
                                                                            <div className="word1">
                                                                                <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>33.000₫</b></p>

                                                                            </div>
                                                                    </div>
                                                                </div>
                                                                 <div style={{width: `25%`,height: `300px`}}>
                                                                    <div className="container10">
                                                                        <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home51.png" alt="" />

                                                                            <div className="word2"><b>Chì Màu Swaans 12 Màu Dài</b></div>
                                                                            <div className="word1">
                                                                                <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>79.000₫</b></p>
                                                                            </div>
                                                                    </div>
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
                                                        <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home32.png" alt="" />
                                                            <img width="100%" src="/src/assets/home33.png" alt="" />
                                                            </div>
                                                            <div style={{width: `75%`}}>
                                                                <div style={row2}>
                                                                     <div style={{width: `25%`,height: `300px`}}>
                                                                        <div className="container10">
                                                                            <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home34.png" alt="" />

                                                                                <div className="word2"><b>Xe Đua Địa Hình Điều Khiển</b></div>
                                                                                <div className="word1">
                                                                                    <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>204.000₫</b></p>
                                                                                </div>
                                                                        </div>
                                                                    </div>

                                                                     <div style={{width: `25%`,height: `300px`}}>
                                                                        <div className="container10">
                                                                            <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home35.png" alt="" />

                                                                                <div className="word2"><b>Đồ Chơi Xe Sắt Cứu Hỏa
                                                                                </b></div>
                                                                                <div className="word1">
                                                                                    <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>87.000₫</b></p>
                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                     <div style={{width: `25%`,height: `300px`}}>
                                                                        <div className="container10">
                                                                            <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home36.png" alt="" />

                                                                                <div className="word2"><b>Máy Bay Điều Khiển Từ Xa
                                                                                </b></div>
                                                                                <div className="word1">
                                                                                    <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>133.000₫</b></p>
                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                     <div style={{width: `25%`,height: `300px`}}>
                                                                        <div className="container10">
                                                                            <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home37.png" alt="" />

                                                                                <div className="word2"><b>Vali Bác Sĩ Mika Xanh</b></div>
                                                                                <div className="word1">
                                                                                    <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>164.000₫</b></p>
                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                     <div style={{width: `25%`,height: `300px`}}>
                                                                        <div className="container10">
                                                                            <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home38.png" alt="" />

                                                                                <div className="word2"><b>Mô Hình Lego Minecraft</b></div>
                                                                                <div className="word1">
                                                                                    <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>240.000₫</b></p>

                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                     <div style={{width: `25%`,height: `300px`}}>
                                                                        <div className="container10">
                                                                            <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home39.png" alt="" />

                                                                                <div className="word2"><b>Mô Hình Lego Friends
                                                                                </b></div>
                                                                                <div className="word1">
                                                                                    <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>173.000₫</b></p>

                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                     <div style={{width: `25%`,height: `300px`}}>
                                                                        <div className="container10">
                                                                            <img style={{paddingBottom: `0.3cm`}} width="100%" height="100%"
                                                                                src="/src/assets/home40.png" alt="" />

                                                                                <div className="word2"><b>Con Quay Vô Cực</b></div>
                                                                                <div className="word1">
                                                                                    <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>93.000₫</b></p>

                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                     <div style={{width: `25%`,height: `300px`}}>
                                                                        <div className="container10">
                                                                            <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home41.png" alt="" />

                                                                                <div className="word2"><b>Đồ Chơi Con Quay</b></div>
                                                                                <div className="word1">
                                                                                    <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>93.000₫</b></p>
                                                                                </div>
                                                                        </div>
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
                                                            <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home22.png" alt="" />
                                                                <img width="100%" src="/src/assets/home23.png" alt="" />
                                                                </div>
                                                                <div style={{width: `75%`}}>
                                                                    <div style={row2}>
                                                                         <div style={{width: `25%`,height: `300px`}}>
                                                                            <div className="container10">
                                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home24.png" alt="" />

                                                                                    <div className="word2"><b>Bút Bi Hoa Hướng Dương</b></div>
                                                                                    <div className="word1">
                                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>27.000₫</b></p>
                                                                                    </div>
                                                                            </div>
                                                                        </div>

                                                                         <div style={{width: `25%`,height: `300px`}}>
                                                                            <div className="container10">
                                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home25.png" alt="" />

                                                                                    <div className="word2"><b>Giá Đựng Bút Gỗ HX1039</b></div>
                                                                                    <div className="word1">
                                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>301.000₫</b></p>
                                                                                    </div>
                                                                            </div>
                                                                        </div>
                                                                         <div style={{width: `25%`,height: `300px`}}>
                                                                            <div className="container10">
                                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home26.png" alt="" />

                                                                                    <div className="word2"><b>Khay Đựng Bút Sắt Comic</b></div>
                                                                                    <div className="word1">
                                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>34.000₫</b></p>
                                                                                    </div>
                                                                            </div>
                                                                        </div>
                                                                         <div style={{width: `25%`,height: `300px`}}>
                                                                            <div className="container10">
                                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home27.png" alt="" />

                                                                                    <div className="word2"><b>Ống Cắm Bút Đôi</b></div>
                                                                                    <div className="word1">
                                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>27.000₫</b></p>
                                                                                    </div>
                                                                            </div>
                                                                        </div>
                                                                         <div style={{width: `25%`,height: `300px`}}>
                                                                            <div className="container10">
                                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home28.png" alt="" />

                                                                                    <div className="word2"><b>Bút Kĩ Thuật sensor Xanh Nhạt</b></div>
                                                                                    <div className="word1">
                                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>42.000₫</b></p>

                                                                                    </div>
                                                                            </div>
                                                                        </div>
                                                                         <div style={{width: `25%`,height: `300px`}}>
                                                                            <div className="container10">
                                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home29.png" alt="" />

                                                                                    <div className="word2"><b>Bút Bi Exam Grade Xanh</b></div>
                                                                                    <div className="word1">
                                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>22.000₫</b></p>

                                                                                    </div>
                                                                            </div>
                                                                        </div>
                                                                         <div style={{width: `25%`,height: `300px`}}>
                                                                            <div className="container10">
                                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" height="100%"
                                                                                    src="/src/assets/home30.png" alt="" />

                                                                                    <div className="word2"><b>Bút Mài Thầy Ánh SH0234</b></div>
                                                                                    <div className="word1">
                                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>42.000₫</b></p>

                                                                                    </div>
                                                                            </div>
                                                                        </div>
                                                                         <div style={{width: `25%`,height: `300px`}}>
                                                                            <div className="container10">
                                                                                <img style={{paddingBottom: `0.3cm`}} width="100%" src="/src/assets/home31.png" alt="" />

                                                                                    <div className="word2"><b>Bút Mài Thầy Ánh SH022</b></div>
                                                                                    <div className="word1">
                                                                                        <p style={{paddingRight: `10px`,color: `#03A9F4`}}><b>83.000₫</b></p>
                                                                                    </div>
                                                                            </div>
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
                                                                <img width="100%" src="/src/assets/home62.png" alt="" />
                                                                    <h6 className="word4">Top 20+ cuốn sách kinh doanh chứng khoán hay nhất mọi thời đại</h6>
                                                                    <p>Hiện nay, chứng khoán đang là thị trường ngách rất đa dạng và phong phú nhưng cũng đầy phức tạp. Đây là nơi...</p>
                                                                    <p>tuan</p>
                                                                    <a style={{textDecoration: `none`}} href="/#"><h6>ĐỌC TIẾP</h6></a>
                                                            </div>
                                                            <div style={{width: `30%`}}>
                                                                <img width="100%" src="/src/assets/home62.png" alt="" />
                                                                    <h6 className="word4">Top 20+ cuốn sách kinh doanh chứng khoán hay nhất mọi thời đại</h6>
                                                                    <p>Hiện nay, chứng khoán đang là thị trường ngách rất đa dạng và phong phú nhưng cũng đầy phức tạp. Đây là nơi...</p>
                                                                    <p>tuan</p>
                                                                    <a style={{textDecoration: `none`}} href="/#"><h6>ĐỌC TIẾP</h6></a>
                                                            </div>
                                                            <div style={{width: `30%`}}>
                                                                <img width="100%" src="/src/assets/home62.png" alt="" />
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
                                                                    <img width="45px" height="45px" src="/src/assets/home65.svg" alt="" />
                                                                        <div >
                                                                            <p style={{fontSize: `13px`}}>Giao hàng miễn phí nội thành cho đơn hàng trên 500.000 VNĐ</p>
                                                                        </div>
                                                                </div>
                                                            </div>
                                                            <div style={{width: `21%`}}>
                                                                <div className="d-flex justify-content-center">
                                                                    <img width="45px" height="45px" src="/src/assets/home66.svg" alt="" />
                                                                        <p style={{fontSize: `13px`}}>Nhiều quà tặng và khuyến mãi hấp dẫn khi mua hàng Online.</p>
                                                                </div>
                                                            </div>
                                                            <div style={{width: `21%`}}>
                                                                <div className="d-flex justify-content-center">
                                                                    <img width="45px" height="45px" src="/src/assets/home67.svg" alt="" />
                                                                        <p style={{fontSize: `13px`}}>100% sản phẩm chính hãng. Thanh toán khi nhận hàng</p>
                                                                </div>
                                                            </div>
                                                            <div style={{width: `21%`}}>
                                                                <div className="d-flex justify-content-center">
                                                                    <img width="45px" height="45px" src="/src/assets/home68.svg" alt="" />
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


