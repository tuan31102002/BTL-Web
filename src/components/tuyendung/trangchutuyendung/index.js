import React from "react";
import Header from "../../header";
import Footer from "../../footer";
import { Link } from "react-router-dom";


export default function Trangchutuyendungg() {
    return (
        <div>
            <Header />
            <div className="container" >
                <div className="title" style={{ fontSize: `16px`, color: `#141414`,marginLeft:`1cm`, }}>
                    <p> <strong>NHÀ SÁCH TIẾN THỌ TUYỂN DỤNG : </strong> </p>

                </div>
                <div className="content" style={{ fontSize: `16px`, }}>
                    <strong>
                        <Link to="/quanliquay" style={{textDecoration: `none`,color: `#0657A3`,}}>- QUẢN LÍ QUẦY</Link> <br />
                        <Link to="/ketoannoibo" style={{textDecoration: `none`,color: `#0657A3`,}}>- KẾ TOÁN NỘI BỘ NHÀ SÁCH</Link><br />
                        <Link to="/giamsatvanhanh" style={{textDecoration: `none`,color: `#0657A3`,}}>- GIÁM SÁT VẬN HÀNH NHÀ SÁCH</Link><br />
                        <Link to="/troligiamdoc" style={{textDecoration: `none`,color: `#0657A3`,}}>- TRỢ LÝ GIÁM ĐỐC </Link><br />
                        <Link to="/nhanvienkiemke" style={{textDecoration: `none`,color: `#0657A3`,}}>- NHÂN VIÊN KIỂM KÊ </Link><br />
                    </strong>
                </div>
            </div>
        <Footer/>
        </div>

    )
}