import React from "react";
import anh from '../../components/cart/1.webp'
import anh1 from '../../components/cart/anh1.svg'
import anh2 from '../../components/cart/anh2.svg'
import anh3 from '../../components/cart/anh3.svg'
import anh4 from '../../components/cart/anh4.svg'
import fb from '../../components/cart/fb.png'
import tich from '../../components/cart/tich.svg'
import phone from '../../components/cart/phone.png'
import Header from "../header";
import Footer from "../footer";
import { Link } from "react-router-dom";


export default function Cart() {
    return (

        <div>
            <Header />
            <div className="container" style={{ display: `flex`, marginTop: `1cm` }}>
                <div style={{  width: `70%` }}>


                    
                    <form >
                        <table style={{ width: `100%`, }}>
                            <tr>
                                <td>
                                    <h3>Ảnh</h3>
                                </td>
                                <td>
                                    <h3>Tên sản phẩm</h3>
                                </td>
                                <td>
                                    <h3>Giá</h3>
                                </td>
                                <td>
                                    <h3>Số lượng</h3>
                                </td>
                            </tr>
                            <tbody>
                            <tr>
                                <td>
                                    <img src={anh} alt="" />
                                </td>
                                <td>
                                    <a style={{textDecoration: `none`,color: `black`}} href="">1% & 99% - Tài Năng Mồ Hôi Và Nước Mắt</a>
                                    <p>Thương hiệu: NXB Lao Động</p>
                                    <a style={{textDecoration: `none`}} href="">Xóa</a>
                                </td>
                                <td>
                                    <p>125.000đ</p>
                                </td>
                                <td>
                                <input style={{width:`30px`,outline:`none`}}type="number" value={1} min={1} ></input>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
                








                <div style={{ width: `30%`, marginLeft: `2cm`, }}>
                    <div className="card" style={{ width: `24rem`, height: `320px` }}>
                        <div className="card-body">
                            <h5 className="card-title">Dịch vụ khách hàng</h5>
                            <h8 className="card-subtitle mb-2 text-muted">Bạn cần sự hỗ trợ từ chúng tôi? Hãy liên hệ ngay</h8>
                            <p className="card-text"> <img src={phone} width="30px" height="30px" alt="" /> 094.1234.828</p>
                            <p className="card-text"> <img src={fb} width="40px" height="40px" alt="" /> Chúng tôi trên Facebook </p>
                            <p className="card-text"> Giờ mở cửa (08:00 - 22:00)</p>
                            <a style={{ textDecoration: `none` }} href="#" className="cart-link">Liên hệ</a>
                        </div>
                    </div>

                    <div className="card" style={{ width: `24rem`, height: `320px`, marginTop: `10px` }}>
                        <div className="card-body">
                            <h5 className="card-title">Mua sắm cùng Nhà Sách Tiến Thọ</h5>
                            <p className="card-text"> <img src={tich} width="20px" height="25px" alt="" /> Sản phẩm chính hãng, bảo
                                hành dài hạn.</p>
                            <p className="card-text"> <img src={tich} width="20px" height="25px" alt="" /> Thỏa sức mua sắm, không lo
                                về giá</p>
                            <p className="card-text"> <img src={tich} width="20px" height="25px" alt="" /> Miễn phí vận chuyển cho đơn
                                hàng từ 500.000 VNĐ</p>
                            <img src={anh1} alt="" /><img src={anh2} alt="" /><img src={anh3} alt="" /><img src={anh4} alt="" />
                        </div>
                    </div>
                </div>
            </div >



            <div className="container" style={{ width: `40%`, marginTop: `-7cm` }}>
                
                <form>
                    <table style={{width:`100%`,textAlign:`center`}}>
                    <tr>
                        <td>
                            <h3>Tạm tính</h3>
                        </td>
                        <td>
                            <h3>125.000đ</h3>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>Thành Tiền</h3>
                        </td>
                        <td>
                            <h2>125.000đ</h2>
                        </td>
                    </tr>
                    </table>
                </form>
                <div style={{textAlign:`center`}} >
                    <Link to="/thanhtoan">< button style={{width: `500px`,  height: `46px`, marginBottom: `10px`, }}
                        className="btn btn-primary" type="submit"> THANH TOÁN NGAY</button></Link>
                </div>
                <div style={{ textAlign:`center` }}> <Link to="/#"> <button style={{ width: `500px`, height: `46px` }} className="btn btn-outline-primary">TIẾP
                    TỤC MUA HÀNG</button></Link>
                </div>
            </div>
            <div style={{ marginTop: `5cm` }}>
                <Footer />
            </div>
        </div>


    )
}
