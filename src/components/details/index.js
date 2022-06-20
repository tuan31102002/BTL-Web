import React from "react";

// import dr from '../../components/details/assets/doremon.svg'
import Header from "../header";
import Footer from "../footer";
import h1 from '../../components/home/assets/home1.png'
import { useParams } from "react-router-dom";
// import jsonProduct from "../../data/store.json"
import productsData from "../../productsData";

export default function Details(){
    const {productId} = useParams()
    const thisProduct = productsData.find(prod => prod.id === productId)
    return(
        <div>
            <Header/>
            <div style={{marginLeft: `15%`,marginRight: `15%`,}}>
        <div style={{display: `flex`,justifyContent: `space-between`}}>

            <div style={{width: `25%`,}}>
                <img src={`${thisProduct.url}`} style={{width:`100%`,}}   alt="Doraemon Học Tập - Nhân Chia" />
            </div>
            <div style={{width: `50%`,}}>
                <div style={{fontSize:`13px`,  }}>
                    <h2>{thisProduct.name}</h2>
                    {/* <img src="star-solid.svg" style={{width:`20px`,}} alt=""/><img src="star-solid.svg" style={{width:`20px`,}} alt=""/><img src="star-solid.svg" style={{width:`20px`,}} alt=""/><img src="star-solid.svg"style={{width:`20px`,}} alt=""/><img src="star-solid.svg" style={{width:`20px`,}} alt=""/>
                    <p>Mã sản phẩm: &emsp;&emsp;<span style={{color: `#03A9F4`,}}> DRMHTNC </span></p>
                    <p>Thương hiệu: &emsp;&emsp;<span style={{color: `#03A9F4`,}}> NXB Kim Đồng </span></p>
                    <p>Tình trạng : &emsp;&emsp;<span style={{color: `#03A9F4`,}}> Còn hàng </span></p> */}

                    
                    <h3 className="center-text">{thisProduct.price}.000₫</h3>
                    <br/>
                    <button type="button" className="btn btn-primary btn-lg" style={{backgroundColor:`#03A9F4`, }}>THÊM VÀO GIỎ</button>
                </div>
            </div>
            <div style={{width: `20%`,}}>
                <div className="card" style={{width: `18rem`,}}>

                
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">CÓ THỂ BẠN QUAN TÂM</li>
                      <li className="list-group-item">
                        <div style={{display: `flex`,justifyContent: `space-around`,}}>
                            <div style={{width: `30%`}}>
                                <img src={h1} style={{width: `100%`}}   alt="Doraemon Học Tập - Nhân Chia"/></div>
                            <div style={{width: `60%`}}>
                                <p>Endless Field</p>
                                <p style={{color: `#03A9F4`}}>121.500₫ <del style={{color: `#8a8a8a`}}>135.000₫</del></p>
                            </div>
                        </div>
                        </li>
                      <li className="list-group-item">
                        <div style={{display: `flex`,justifyContent: `space-around`,}}>
                            <div style={{width: `30%`,}}>
                                <img src={h1} style={{width: `100%`}} alt=""/>
                            </div>
                            <div style={{width: `60%`,}}>
                                <p >Ticket To Childhood</p>
                                <p style={{color: `#03A9F4`,}}>85.500₫ <del  style={{color:`#8a8a8a`}} >95.000₫</del></p>
                            </div>
                        </div>

                      </li>
                      <li className="list-group-item">
                        <div style={{display: `flex`,justifyContent: `space-around`,}}>
                            <div style={{width: `30%`,}}>
                            <img src={h1} style={{width: `100%`}} alt=""/>
                        </div>
                            <div style={{width: `60%`,}}>
                                <p>Harry Potter and the Philosopher's Stone Ravenclaw Edition - Paperback</p>
                                <p style={{color: `#03A9F4`,}}>240.000₫</p>
                            </div>
                        </div>

                      </li>
                      <li class="list-group-item">
                        <div style={{display: `flex`,justifyContent: `space-around`,}}>
                            <div style={{width: `30%`,}}>
                            <img src={h1} style={{width: `100%`}} alt=""/>
                        </div>
                            <div style={{width: `60%`}}>
                                <p>Harry Potter and the Deathly Hallows (Paperback)</p>
                                <p style={{color: `#03A9F4`,}}>252.000₫</p>
                            </div>
                        </div>

                      </li>
                      <li class="list-group-item">
                        <div style={{display: `flex`,justifyContent: `space-around`,}}>
                            <div style={{width: `30%`}}>
                            <img src={h1} style={{width: `100%`}} alt=""/>
                        </div>
                            <div style={{width: `60%`,}}>
                                <p>Harry Potter and the Half-Blood Prince</p>
                                <p style={{color: `#03A9F4`,}}>252.000₫</p>
                            </div>
                        </div>

                      </li>
                    </ul>



            </div>
        </div>
    </div>
        </div>
        <Footer/>
    </div>
    )

}