import React, { Children, Component } from 'react'
import { Link } from 'react-router-dom';
import Header from '../header/header';

export default function Home() {
    
        return (
            <div>
                <Header/>
                <h1> Home Page</h1>
                <Link to="/about">About / </Link>
                <Link to="/shop">Shop / </Link>
                <p><Link to="/footer2">footer2</Link></p>
                <Link to="/lienhe">Lienhe</Link>
           
            </div>
        )
    }


