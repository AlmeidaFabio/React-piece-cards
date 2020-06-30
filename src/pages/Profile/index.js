import React, {useState, useEffect} from 'react'

import { Link } from 'react-router-dom'
import { FiArrowLeftCircle } from 'react-icons/fi'
import './styles.css'

import api from '../../services/api'

export default function Show(props) {
    const [character, setCharacter] = useState([])

    const id = props.match.params.id
   
    useEffect(() => {
        async function loadCharacter() {
            const res = await api.get(`/character/${id}`)

            setCharacter(res.data)
        }

            loadCharacter(id)

    }, [id])


    return (
        
       <main> 

            <section className="profile">
                <h1 className="char">{character.name}</h1>

                <div className="infoChar">
                    <label htmlFor="">
                        <div><strong>Titulo:</strong> {character.title}</div> 

                        <div><strong>Função:</strong> {character.role}</div>

                        <div><strong>Facção:</strong> {character.category}</div>

                        <div><strong>Akuma no mi:</strong> {character.devilfruit}</div>
                    </label>
                    <div>{/*   
                        <div className="charImg">
                        <img src="{character.cover}" alt=""/>
                    </div>
                    */
                    }</div>
                    
                </div> 
                <div className="description">{character.description}</div> 

                

                <Link to="/">
                    <FiArrowLeftCircle className="btn"/>
                </Link>

            </section>
            
       </main>
      
    )
}