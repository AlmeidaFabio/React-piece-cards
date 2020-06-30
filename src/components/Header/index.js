import React from 'react'

import './styles.css'
import logo from './logo.png'
import banner from './banner.png'

export default function Header() {
    return (
        <header className="top">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>

            <div className="banner">
                <img src={banner} alt=""/>
            </div>
        </header>
    )
}