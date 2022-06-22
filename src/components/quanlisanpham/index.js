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

export default function Quanlisanpham() {
    return (
        <div>
            <div className="wrapper">

                <nav className="main-header navbar navbar-expand navbar-white ">


                    <div>
                        <ol style={{ backgroundColor: `white`, }} className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a style={{textDecoration: `none` , fontSize: `30px`}} href="/admin">Home</a></li>
                            <li style={li} className="breadcrumb-item active">Quản lý sản phẩm</li>
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
                                    <h1>QUẢN LÍ SẢN PHẨM</h1>
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
                        <form>
                            <table >
                                <tr >
                                    <th>Mã Sản Phẩm:</th>
                                    <td>&ensp;&ensp;<input type="text" /></td>
                                </tr>
                                <tr>
                                    <th>Tên Sản Phẩm:</th>
                                    <td>&ensp;&ensp;<input type="text" /></td>
                                </tr>
                                <tr>
                                    <th>Giá tiền:</th>
                                    <td>&ensp;&ensp;<input type="text" /></td>
                                </tr>
                            </table>
                        </form>
                        <div style={{ margin: `10px`, }}>
                            <button type="button" className="btn btn-success">Thêm mới+</button>
                        </div>

                        <form action="">
                            <table style={{ width: `100%`, textAlign: `center` }}>
                                <tr >
                                    <td style={td}>Mã sản phẩm</td>
                                    <td style={td}>Tên sản phẩm </td>
                                    <td style={td}>Giá tiền</td>
                                    <td style={td}><button type="button" className="btn btn-primary">Sửa </button></td>
                                    <td style={td}><button type="button" className="btn btn-primary">Xóa</button></td>
                                </tr>

                                {productsData.products.map((p, i) => (
                                        <tr>
                                            <td style={td}>
                                                <p>{p.id}</p>
                                            </td>
                                            <td style={td}><b style={{ fontSize: `13px` }}>{p.name}</b></td>
                                            <td style={td}><h5 style={{ color: `#03A9F4` }}>{p.price}.000₫</h5></td>
                                            <td style={td}><button type="button" className="btn btn-primary">Sửa </button></td>
                                            <td style={td}><button type="button" className="btn btn-primary">Xóa</button></td>
                                        </tr>
                                    
                                ))}


                            </table>
                        </form>
                    </section>

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