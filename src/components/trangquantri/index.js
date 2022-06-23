import React from "react";
import { Link } from "react-router-dom";
import admin from '../../components/trangquantri/admin.jpg'
// import productsData from "../../productsData"
// import Quanlisanpham from "../quanlisanpham";

// const td = {
//     border: `1px solid black`,
//     textAlign: `center`
// }
const li = {
    fontSize: `30px`,
}
const di = {
    textAlign: `center`, color: `white`, fontSize: `50px`,
}

export default function Trangquantri() {
    return (
        <div>
            <div className="wrapper">

                <nav className="main-header navbar navbar-expand navbar-white ">


                    <div>
                        <ol style={{ backgroundColor: `white`, }} className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a style={{textDecoration: `none` , fontSize: `30px`}} href="/admin">Home</a></li>
                            {/* <li style={li} className="breadcrumb-item active">Quản lí sản phẩm</li> */}
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
                                <img style={{ width: `33px`, height: `33px` }} src={admin} className="img-circle elevation-2" alt="User_Image" />
                            </div>
                            <div className="info">
                                <a style={{ textDecoration: `none`, fontSize: `16px` }} href="/admin" className="d-block">Đặng Đức Chung</a>
                            </div>
                        </div>




                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                                data-accordion="false">

                                <li className="nav-item">
                                    <Link style={{textDecoration: `none`}} to="/admin/quanlisanpham" href="" className="nav-link">
                                        <p style={{ color: `white`, fontSize: `16px` }} >
                                            Quản lý sản phẩm
                                        </p>       
                                    </Link>
                                </li>

                                
                                <li className="nav-item">
                                    <Link style={{textDecoration: `none`}} to="/admin/quanlidonhang" href="" className="nav-link">
                                        <p style={{ color: `white`, fontSize: `16px` }} >
                                            Quản lý đơn hàng
                                        </p>                                
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{textDecoration: `none`}} to="/admin/quanlituyendung" href="" className="nav-link">
                                        <p style={{ color: `white`, fontSize: `16px` }} >
                                            Quản lý tuyển dụng
                                        </p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link style={{textDecoration: `none`}} to="/admin/quanlilienhe" href="" className="nav-link">
                                        <p style={{ color: `white`, fontSize: `16px` }} >
                                            Quản lý liên hệ
                                        </p>
                                    </Link>
                                </li>
                                <Link to="/"><button style={{ marginTop: `50px`, width: `230px` }} type="button" className="btn btn-primary">Đăng xuất</button></Link>
                            </ul>
                        </nav>



                    </div>

                </aside>


                <div className="content-wrapper">
                    <h1>Welcome to Admin</h1>
                </div>


                <footer className="main-footer">
                    <div className="float-right d-none d-sm-block">
                        <b>Version</b> 3.1.0
                    </div>
                    <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights
                    reserved.
                </footer>


                <aside className="control-sidebar control-sidebar-dark">

                </aside>

            </div>

        </div>
    )
}