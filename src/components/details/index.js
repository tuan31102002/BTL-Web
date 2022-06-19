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
                                <img src="doremon.svg" style="width:100%;"   alt="Doraemon Học Tập - Nhân Chia"/></div>
                            <div style={{width: `60%`}}>
                                <p>Endless Field</p>
                                <p style="color: #03A9F4;">121.500₫ <del style="color:#8a8a8a ;">135.000₫</del></p>
                            </div>
                        </div>
                        </li>
                      <li class="list-group-item">
                        <div style="display: flex;justify-content: space-around;">
                            <div style="width: 30%;">
                                <img src="https://bizweb.dktcdn.net/thumb/medium/100/386/441/products/8-7b2187e3-067b-46f9-bd25-741a3323fd2e.jpg?v=1636034940000" style="width:100%;"   /></div>
                            <div style="width: 60%;">
                                <p >Ticket To Childhood</p>
                                <p style="color: #03A9F4;">85.500₫ <del  style="color:#8a8a8a ;">95.000₫</del></p>
                            </div>
                        </div>

                      </li>
                      <li class="list-group-item">
                        <div style="display: flex;justify-content: space-around;">
                            <div style="width: 30%;">
                                <img src="https://bizweb.dktcdn.net/thumb/medium/100/386/441/products/7-77081ea0-491c-4f92-afb5-a0d6937ffa47.jpg?v=1636025803000" style="width:100%;"   /></div>
                            <div style="width: 60%;">
                                <p>Harry Potter and the Philosopher's Stone Ravenclaw Edition - Paperback</p>
                                <p style="color: #03A9F4;">240.000₫</p>
                            </div>
                        </div>

                      </li>
                      <li class="list-group-item">
                        <div style="display: flex;justify-content: space-around;">
                            <div style="width: 30%;">
                                <img src="https://bizweb.dktcdn.net/thumb/medium/100/386/441/products/harry-potter-and-the-deathly-hallows-paper-back-1.jpg?v=1636080026000" style="width:100%;"   /></div>
                            <div style="width: 60%;">
                                <p>Harry Potter and the Deathly Hallows (Paperback)</p>
                                <p style="color: #03A9F4;">252.000₫</p>
                            </div>
                        </div>

                      </li>
                      <li class="list-group-item">
                        <div style="display: flex;justify-content: space-around;">
                            <div style="width: 30%;">
                                <img src="https://bizweb.dktcdn.net/thumb/medium/100/386/441/products/harry-potter-and-the-half-blood-prince.jpg?v=1636079119000" style="width:100%;"   /></div>
                            <div style="width: 60%;">
                                <p>Harry Potter and the Half-Blood Prince</p>
                                <p style="color: #03A9F4;">252.000₫</p>
                            </div>
                        </div>

                      </li>
                    </ul>



            </div>
        </div>
    </div>
        </div>
    </div>
    )

}