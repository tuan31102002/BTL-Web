import React, { useState,useEffect} from "react";
// import { Link } from 'react-router-dom';
import "./style.css";
import Header from "../header";
import Footer from "../footer";
import axios from 'axios';

import jsonStore from "../../data/store.json"

export default function Shop() {
    
    const [products, setProducts] = useState ([])

    useEffect(() => {
        axios.get('http://localhost:8000/products').then(res => {
            // console.log(res)
            setProducts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })
    
    return (

        <div>
            <Header />
            <div class="container">
                <div style={{ display: `flex` }}>
                    <div style={{ width: `25%` }}>
                        <h6>THƯƠNG HIỆU</h6>
                        <div className="input-group rounded">
                            <input type="search" className="form-control rounded" placeholder="Tìm thương hiệu" aria-label="Search"
                                aria-describedby="search-addon" />
                        </div>

                        <div style={{ lineHeight: `0.7cm` }}>
                            <li><input type="checkbox" /> Đại thịnh</li>
                            <li><input type="checkbox" /> Đông tác</li>
                            <li><input type="checkbox" /> Luxor</li>
                            <li><input type="checkbox" /> Diệp Linh</li>
                            <li><input type="checkbox" /> Hà Hưng</li>
                            <li><input type="checkbox" /> Lego</li>
                        </div>
                        <hr />
                        <h6>GIÁ SẢN PHẨM</h6>


                        <div style={{ lineHeight: `0.7cm` }}>
                            <li><input type="checkbox" /> Giá dưới 100.000đ</li>
                            <li><input type="checkbox" /> 100.000đ - 200.000đ</li>
                            <li><input type="checkbox" /> 200.000đ - 300.000đ</li>
                            <li><input type="checkbox" /> 300.000đ - 500.000đ</li>
                            <li><input type="checkbox" /> 500.000đ - 1.000.000đ</li>
                            <li><input type="checkbox" /> Giá trên 1.000.000đ</li>
                        </div>

                        <hr />
                        <h6>LOẠI</h6>
                        <div className="input-group rounded">
                            <input type="Tìm loại" className="form-control rounded" placeholder="Tìm thương hiệu" aria-label="Search"
                                aria-describedby="search-addon" />
                        </div>
                        <div style={{ lineHeight: `0.7cm` }}>
                            <li><input type="checkbox" /> 12 Cung Hoàng Đạo</li>
                            <li><input type="checkbox" /> Antona</li>
                            <li><input type="checkbox" /> Balo</li>
                            <li><input type="checkbox" /> Bảng từ</li>
                            <li><input type="checkbox" /> Bóng Đá</li>
                            <li><input type="checkbox" /> Bút</li>
                        </div>

                    </div>
                    <div style={{ width: `75%` }}>
                        <div className="roww6">
                            {
                                products.map(p => 
                                    <div style={{ width: `25%`, borderStyle: `double` }}>
                                        <div className="container">
                                            <img style={{ width: `100%` }} src={`${p.url}`} alt="" />
                                            <div style={{ textAlign: `center` }}>
                                                <p>{p.name}</p>
                                                <h5 style={{ color: `#03A9F4` }}>{p.price}.000₫</h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }



                            {/* {jsonStore.products.map((image, i) => (
                                <div  style={{ width: `25%`, borderStyle: `double` }}>
                                    <div className="container"  key={i}>
                                        <img style={{ width: `100%` }} src={`${image.url}`} alt={image.name} key={i} />
                                       
                                            <div style={{ textAlign: `center` }}>
                                                <p>{image.name}</p>
                                                <h5 style={{ color: `#03A9F4` }}>{image.price}.000₫</h5>
                                            </div>
                                    </div>
                                </div>
                            ))} */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};