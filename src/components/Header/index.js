import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'


export default function Header() {
    return (
        <header className="menu">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/character">Adicionar personagem</Link></li>
                </ul>
            </nav>
        </header>
    )
}