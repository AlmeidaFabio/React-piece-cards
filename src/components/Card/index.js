import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import api from '../../services/api'
import './styles.css'
import Loading from './loading'

export default function Card() {
    const [characters, setCharacters] = useState([])
    const [limit] = useState(16)
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)


    async function loadCharacters(limit, page) {
        const res = await api.get(`/characters?limit=${limit}&page=${page}`)
        
        setCharacters(res.data.characters)
        setIsLoading(false)
    }

    function nextPage() {
        setPage(page + 1)
    }

    function previousPage() {
        setPage(page - 1)
    }

    useEffect(() => {
        loadCharacters(limit, page)
        window.scrollTo(0,0)
    },[limit, page])
    
    return(
        <>
        {isLoading ? <Loading className="loading"/> 
        :
        <>
        <section className="card-component">
            {characters.map(character => (
                <div className="card middle" key={character._id}>
                <div className="front">
                    <img src={character.cover.url} alt={character.name}/>
                </div>

                <div className="back">
                    <div className="back-content middle">
                        <h2>{character.name}</h2>
                        
                        <span>{character.category}</span>
                        <div className="sm">
                            <Link to={`/character/${character._id}`}>+</Link>
                        </div>
                    </div>
                </div>
            </div>
            ))}   
        </section> 
        
        <div className="pagination">
            <FiChevronsLeft className="bt" onClick={previousPage}/>
                Anterior - Próxima
            <FiChevronsRight className="bt" onClick={nextPage}/>
        </div>
        </>
        }
    </>    
    )
}

