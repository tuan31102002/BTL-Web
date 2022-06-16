import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../footer';
import Header from '../header';


export default function Home() {
    
        return (
            <div>
                <Header/>
                <h1> Home Page</h1>
                <Link to="/about">About / </Link>
                <Link to="/shop">Shop / </Link>
                <p><Link to="/footer2">footer2</Link></p>
                
                <Link to="/lienhe">Lienhe</Link>
                <p><Link to="/dangki">Dang ki</Link></p>
                <Footer/>
                <Link to="/quanliquay">Quanliquay</Link>
                <Link to="/giamsatvanhanh">Giamsatvanhanh</Link>
                <Link to="/ketoannoibo">Ketoannoibo</Link>
            </div>
        )
    }


