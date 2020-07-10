import React from 'react'

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
                <h1>OnePieceCards</h1>
            </div>
            
            <div className="search-area">
                <Search />
            </div>
        </header>
    )
}