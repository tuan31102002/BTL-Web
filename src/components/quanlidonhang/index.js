import React from "react";
import { Link } from "react-router-dom";
import admin from '../../components/trangquantri/admin.jpg'
import productsData from "../../productsData"

const td = {
    border: `1px solid black`,
    textAlign: `center`
}
const li = {
    fontSize: `30px`,
}
const di = {
    textAlign: `center`, color: `white`, fontSize: `50px`,
}

export default function Quanlidonhang() {
    return (
        <div>
            <div className="wrapper">

                <nav className="main-header navbar navbar-expand navbar-white ">


                    <div>
                        <ol style={{ backgroundColor: `white`, }} className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a style={{textDecoration: `none` , fontSize: `30px`}} href="/admin">Home</a></li>
                            <li style={li} className="breadcrumb-item active">Quản lý đơn hàng</li>
                        </ol>
                    </div>
                </nav>


                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    <a style={{ textDecoration: `none`, }} href="/#" className="brand-link">
                        <p style={di}>Admin</p>
                    </a>


                    <div className="sidebar">
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img style={{ width: `33px`, height: `33px` }} src={admin} className="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div className="info">
                                <a style={{ textDecoration: `none`, fontSize: `16px` }} href="" className="d-block">Đặng Đức Chung</a>
                            </div>
                        </div>




                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                                data-accordion="false">

                                <li className="nav-item">
                                    <a href="" className="nav-link">
                                        <i className="nav-icon fas fa-th"></i>
                                        <p style={{ color: `white`, fontSize: `16px` }} >
                                            Quản lý sản phẩm
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="" className="nav-link">
                                        <i className="nav-icon fas fa-th"></i>
                                        <p style={{ color: `white`, fontSize: `16px` }}>
                                            Quản lý đơn hàng
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/#" className="nav-link">
                                        <i className="nav-icon fas fa-th"></i>
                                        <p style={{ color: `white`, fontSize: `16px` }}>
                                            Widgets
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="" className="nav-link">
                                        <i className="nav-icon fas fa-th"></i>
                                        <p style={{ color: `white`, fontSize: `16px` }}>
                                            Widgets
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/#" className="nav-link">
                                        <i className="nav-icon fas fa-th"></i>
                                        <p style={{ color: `white`, fontSize: `16px` }}>
                                            Widgets
                                        </p>
                                    </a>
                                </li>
                                <Link to="/"><button style={{ marginTop: `50px`, width: `230px` }} type="button" className="btn btn-primary">Log Out </button></Link>
                            </ul>
                        </nav>



                    </div>

                </aside>


                <div className="content-wrapper">

                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Quản lý đơn hàng</h1>
                                </div>
                                <div className="col-sm-6">
                                    <form className="d-flex" role="search">
                                        <input style={{ width: `300px` }} className="form-control me-2" type="search"
                                            placeholder="Nhập từ khóa" aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit">Tìm kiếm</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section style={{ margin: `10px` }} >
                        <form action="">
                            <table style={{ width: `100%`, textAlign: `center` }}>
                                <tr >
                                    <td style={td}>Mã đơn hàng</td>
                                    <td style={td}>Khách hàng</td>
                                    <td style={td}>Khách phải trả</td>
                                    <td style={td}>Mã giao hàng</td>
                                    <td style={td}>Trạng thái</td>
                                    <td style={td}>Thu chi</td>
                                 
                                </tr>
                                <tr >
                                    <td style={td}>22052537VHK8EX</td>
                                    <td style={td}>
                                        <div style={{lineHeight:`0.3cm`}}>
                                            <h5 style={{ color: `#03A9F4` }}>Nguyễn Minh Tuấn</h5>
                                            <p>0911456321</p>
                                        </div>
                                    </td>
                                    <td style={td}>
                                        <div style={{lineHeight:`0.3cm`}}>
                                            <h5>400.000₫</h5>
                                            <p>2 sản phẩm</p>
                                        </div>
                                    </td>
                                    <td style={td}>
                                        <div style={{lineHeight:`0.3cm`}}>
                                            <p>Standard Express</p>
                                            <p>VN2226838866240</p>
                                            <p>Pham Hung</p>
                                        </div>
                                    </td>
                                    <td style={td}>Đặt hàng</td>
                                    <td style={td}>Thanh toán khi nhận hàng</td>
                                 
                                </tr>
                                <tr >
                                    <td style={td}>220505C2T1QVJS</td>
                                    <td style={td}>
                                        <div style={{lineHeight:`0.3cm`}}>
                                            <h5 style={{ color: `#03A9F4` }}>Đặng Đức Chung</h5>
                                            <p>09115581846</p>
                                        </div>
                                    </td>
                                    <td style={td}>
                                        <div style={{lineHeight:`0.3cm`}}>
                                            <h5>1.500.000₫</h5>
                                            <p>4 sản phẩm</p>
                                        </div>
                                    </td>
                                    <td style={td}>
                                        <div style={{lineHeight:`0.3cm`}}>
                                            <p>Standard Express</p>
                                            <p>VN222301204318K</p>
                                            <p>Pham Hung</p>
                                        </div>
                                    </td>
                                    <td style={td}>Đặt hàng</td>
                                    <td style={td}>Đã thanh toán qua thẻ ngân hàng</td>
                                 
                                </tr>
                                <tr >
                                    <td style={td}>2205242QUSRUES</td>
                                    <td style={td}>
                                        <div style={{lineHeight:`0.3cm`}}>
                                            <h5 style={{ color: `#03A9F4` }}>Nguyễn Quỳnh Trang</h5>
                                            <p>09114521214</p>
                                        </div>
                                    </td>
                                    <td style={td}>
                                        <div style={{lineHeight:`0.3cm`}}>
                                            <h5>215.000₫</h5>
                                            <p>1 sản phẩm</p>
                                        </div>
                                    </td>
                                    <td style={td}>
                                        <div style={{lineHeight:`0.3cm`}}>
                                            <p>Standard Express</p>
                                            <p>VN226299091987K</p>
                                            
                                        </div>
                                    </td>
                                    <td style={td}>Đơn hàng đã bị hủy</td>
                                    <td style={td}>Không phải thanh toán</td>
                                 
                                </tr>
                                <tr >
                                    <td style={td}>220413E1T7P4JC</td>
                                    <td style={td}>
                                        <div style={{lineHeight:`0.3cm`}}>
                                            <h5 style={{ color: `#03A9F4` }}>Nguyễn Quang Duy</h5>
                                            <p>0946541147</p>
                                        </div>
                                    </td>
                                    <td style={td}>
                                        <div style={{lineHeight:`0.3cm`}}>
                                            <h5>75.000₫</h5>
                                            <p>1 sản phẩm</p>
                                        </div>
                                    </td>
                                    <td style={td}>
                                        <div style={{lineHeight:`0.3cm`}}>
                                            <p>Standard Express</p>
                                            <p>VN2245385917060</p>
                                            <p>Pham Hung</p>
                                        </div>
                                    </td>
                                    <td style={td}>Đặt hàng</td>
                                    <td style={td}>Thanh toán khi nhận hàng</td>
                                 
                                </tr>
                                <tr >
                                    <td style={td}>22052537VHK8EX</td>
                                    <td style={td}>
                                        <div style={{lineHeight:`0.3cm`}}>
                                            <h5 style={{ color: `#03A9F4` }}>Nguyễn Minh Tuấn</h5>
                                            <p>0911456321</p>
                                        </div>
                                    </td>
                                    <td style={td}>
                                        <div style={{lineHeight:`0.3cm`}}>
                                            <h5>400.000₫</h5>
                                            <p>2 sản phẩm</p>
                                        </div>
                                    </td>
                                    <td style={td}>
                                        <div style={{lineHeight:`0.3cm`}}>
                                            <p>Standard Express</p>
                                            <p>VN2226838866240</p>
                                            <p>Pham Hung</p>
                                        </div>
                                    </td>
                                    <td style={td}>Đặt hàng</td>
                                    <td style={td}>Thanh toán khi nhận hàng</td>
                                 
                                </tr>

                              


                            </table>
                        </form>
                    </section>

                </div>


                <footer className="main-footer">
                    <div className="float-right d-none d-sm-block">
                        <b>Version</b> 3.1.0
                    </div>
                    {/* <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved. */}
                    <b>Admin</b>
                </footer>


                <aside className="control-sidebar control-sidebar-dark">

                </aside>

            </div>

        </div>
    )
}