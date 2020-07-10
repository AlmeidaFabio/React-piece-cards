import React, {useState} from 'react'

import {FaSearch} from 'react-icons/fa'
import './styles.css'

export default function Search() {
    const [text, setText] = useState('')

    return(
        <section className="search">
            <div className="search-box">
                <input type="text" 
                className="search-txt" 
                placeholder="Procurar personagem"
                value={text}
                onChange={(e) => setText(e.target.value)}
                autoFocus
                />
    
                <FaSearch className="search-btn"></FaSearch>
            </div>
        </section>
    )
}