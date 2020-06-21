import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import './styles.css'

export default function Card() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        async function loadCharacters() {
            const res = await api.get('/characters')
            
            setCharacters(res.data)
        }

            loadCharacters()
    },[])
    
    return(
        <section className="card-component">
            {characters.map(character => (
                <div className="card middle" key={character._id}>
                <div className="front">
                    <img src={character.cover.url} alt={character.name}/>
                </div>

                <div className="back">
                    <div className="back-content middle">
                        <h2>{character.name}</h2>
                        <span>{character.title}</span>
                        <span>{character.category}</span>
                        <span>Akuma no mi: {character.devilfruit}</span>
                        <div className="sm">
                            <Link to={`/character/${character._id}`}>+</Link>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </section>    
    )
}

