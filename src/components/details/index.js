import React from "react";
import './style.css'
import dr from '../../components/details/assets/doremon.svg'
import Header from "../header";
import Footer from "../footer";

export default function Details(){
    return(
        <div>
            <Header/>
            <div style={{marginLeft: `15%`,marginRight: `15%`,}}>
        <div style={{display: `flex`,justifyContent: `space-between`}}>

            <div style={{width: `25%`,}}>
                <img src="nhan-chia (1).webp" style={{width:`100%`,}}   alt="Doraemon Học Tập - Nhân Chia" />
            </div>
            <div style={{width: `50%`,}}>
                <div style={{fontSize:`13px`,  }}>
                    <h2>Doraemon Học Tập - Nhân Chia</h2>
                    <img src="star-solid.svg" style={{width:`20px`,}} alt=""/><img src="star-solid.svg" style={{width:`20px`,}} alt=""/><img src="star-solid.svg" style={{width:`20px`,}} alt=""/><img src="star-solid.svg"style={{width:`20px`,}} alt=""/><img src="star-solid.svg" style={{width:`20px`,}} alt=""/>
                    <p>Mã sản phẩm: &emsp;&emsp;<span style={{color: `#03A9F4`,}}> DRMHTNC </span></p>
                    <p>Thương hiệu: &emsp;&emsp;<span style={{color: `#03A9F4`,}}> NXB Kim Đồng </span></p>
                    <p>Tình trạng : &emsp;&emsp;<span style={{color: `#03A9F4`,}}> Còn hàng </span></p>

                    
                    <h3 className="center-text">30.000₫</h3>
                    <br/>
                    <button type="button" className="btn btn-primary btn-lg" style={{backgroundColor:`#03A9F4`, }}>THÊM VÀO GIỎ</button>
                </div>
            </div>
            <div style={{width: `20%`,}}>
                <div className="card" style={{width: `18rem`,}}>
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">CÓ THỂ BẠN QUAN TÂM</li>
                      <li className="list-group-item">
                        <div style={{display: `flex`,justifyContent: `space-around`,}}>
                            <div style={{width: `30%`}}>
                                <img src="nhan-chia (1).webp" style="width:100%;"   alt="Doraemon Học Tập - Nhân Chia"/></div>
                            <div style={{width: `60%`}}>
                                <p>Endless Field</p>
                            </div>
                        </div>




                      </li>
                      <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div className="card-body">
                      <a href="#" className="card-link">Card link</a>
                      <a href="#" className="card-link">Another link</a>
                    </div>
                  </div>
            </div>
        </div>
    </div>
        </div>
    )

}