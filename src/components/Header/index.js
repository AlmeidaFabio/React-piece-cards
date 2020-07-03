import React from 'react'

import './styles.css'
import banner from './banner.png'

export default function Header() {
    return (
        <header className="top">
            <div className="logo">
                <h1>OnePieceCards</h1>
            </div>

            <div className="banner">
                <img src={banner} alt=""/>
            </div>
        </header>
    )
}