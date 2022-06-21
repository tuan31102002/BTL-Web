import React from "react";
import { Link } from "react-router-dom";
import anh from '../../components/thanhtoan/1.webp'
import logo from '../../components/thanhtoan/logo.webp'

export default function Thanhtoan(){

    return(
        <div>
            <div className="container" style={{display: `flex`}}>
        <div style={{width: `60%`,justifyContent: `space-around`}}>
            <div style={{textAlign: `center`,margin:`1cm`}}>
                <img src={logo} alt=""/>
            </div>
    
            <div style={{display: `flex`}}>
                <h4>Thông tin nhận hàng</h4>
                <Link style={{marginLeft: `2cm`,textDecoration: `none`}}to="/dangnhap">Đăng nhập</Link>
    
            </div>
            <div style={{display: `flex`}}>
                <div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">EMAIL*</label>
                        <input style={{width: `387px`,height: `44px`}} type="email" className="form-control"
                            placeholder="Nhập Địa chỉ email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
                    </div>
                    <div className="mb-3">
                        <input type="hovaten" className="form-control" placeholder="Họ và tên" id="exampleInputEmail1"
                            aria-describedby="emailHelp"/>
    
                    </div>
                    <div className="mb-3">
                        <input type="sdt" className="form-control" placeholder="Số điện thoại (tùy chọn)"
                            id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
                    </div>
                    <div className="mb-3">
                        <input type="diachi" className="form-control" placeholder="Địa chỉ (tùy chọn)" id="exampleInputEmail1"
                            aria-describedby="emailHelp"/>
    
                    </div>
    
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button">Tỉnh thành</button>
                        <select className="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                            <option value="1">Hà Nội</option>
                            <option value="2">Thành phố HCM</option>
                            <option value="3">An Giang</option>
                            <option value="4">Vũng Tàu</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button">Quận huyện</button>
                        <select className="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                            <option value="1">Quận Cầu Giấy</option>
                            <option value="2">Quận Đống Đa</option>
                            <option value="3">Quận Hà Đông</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button">Phường Xã </button>
                        <select className="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                            <option value="1">Phường Phúc Xá</option>
                            <option value="2">Phường Trúc Bạch</option>
                            <option value="3">Phường Vĩnh Phúc</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <input style={{height: `100px`}} type="diachi" className="form-control" placeholder="Ghi chú (tùy chọn)"
                            id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                </div>
    
                <div style={{marginLeft: `1cm`}}>
                    <p>Vận chuyển</p>
                    <div className="mb-3">
                        <input style={{width: `300px`,height: `44px`,backgroundColor: `rgb(242, 164, 164)`}} type=""
                            className="form-control" placeholder="Khu vực không hỗ trợ vận chuyển"/>
                    </div>
                    <p>Thanh Toán</p>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" for="flexRadioDefault1">
                            Chuyển khoản qua ngân hàng
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                        <label className="form-check-label" for="flexRadioDefault2">
                            Thanh toán khi giao hàng (COD)
                        </label>
                    </div>
    
                </div>
            </div>
            <hr/>
    
        </div>
        <div style={{width: `40%`, height: `100%`,margin:`1cm`,marginLeft:`2cm`}}>
            
        <h1>Đơn hàng </h1>
        <hr/>
        <form >
                        <table style={{ width: `100%`, }}>
                            
                            <tr>
                                <td>
                                    <img style={{width:`50px`,height:`50px`}} src={anh} alt="" />
                                </td>
                                <td>
                                    <a style={{textDecoration: `none`,color: `black`}} href="/#">1% & 99% - Tài Năng Mồ Hôi Và Nước Mắt</a>
                                    <p>Thương hiệu: NXB Lao Động</p>
                                   
                                </td>
                                <td>
                                    <p>125.000đ</p>
                                </td>                               
                            </tr>
                        </table>
                    </form>
                    <hr/>
                    <div className="input-group">
                <input style={{ height:`60px`}} aria-label="" type="" className="form-control"
                    placeholder="Nhập mã giảm giá" name="EMAIL" required="" autocomplete="off"/>
                <span className="input-group-append">
                    <button style={{color:`white`,backgroundColor:`#EF3F3F`,height:`60px`,width:`100px`,marginLeft:`5px`}} className="btn btn-default" type="submit"
                        aria-label="Áp dụng" name="subscribe">Áp dụng
                    </button>
                </span>
            </div>
            <hr/>
             
            <form>
                    <table style={{width: `100%`, }}>
                    <tr>
                        <td>
                            <p>Tạm tính</p>
                        </td>
                        <td>
                            <p>125.000đ</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Phí vận chuyển</p>
                        </td>
                        <td>
                            <p>...</p>
                        </td>
                    </tr>
                    </table>
                    </form>
                    <hr />
                    <form>
                        <table style={{width:`100%`,textAlign:`center`}}>
                        <tr>
                            <td  >
                                <p style={{fontSize:`20px`}}>Tổng cộng</p>
                            </td>
                            <td style={{color:`#EF3F3F`}}>
                                <h3>125.000đ</h3>

                            </td>
                        </tr>
                        </table>
                    </form>
                    <div style={{display: `flex`,justifyContent:  `space-between`}}>
                <Link style={{fontSize:`15px`,color:`#EF3F3F`}} to="/cart">Quay về giỏ hàng</Link>
                <div>
                <button style={{color:`white`,backgroundColor: `#EF3F3F`,height:`60px`,width:`150px`,fontSize:`20px`}} className="btn btn-default" type="submit"
                    aria-label="Đặt hàng" name="subscribe">Đặt hàng
                </button>
                </div>
            </div>
        </div>
       
    
    </div>
        </div>
    )
    }