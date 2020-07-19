import React from 'react'
import {Link} from 'react-router-dom'

import './styles.css'
import banner from './banner.png'
import Search from '../../components/Search'

export default function Header() {
    return (
        <header className="top">
            <div className="banner">
                <img src={banner} alt=""/>
            </div>
            
            <div className="logo">
                <Link to="/"><h1>OnePieceCards</h1></Link>
            </div>
            
            <div className="search-area">
                <Search />
            </div>
        </header>
    )
}