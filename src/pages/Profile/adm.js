import React, {useState, useEffect} from 'react'

import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeftCircle } from 'react-icons/fi'
import './styles.css'

import api from '../../services/api'

export default function ShowAdm(props) {
    const [character, setCharacter] = useState([])

    const id = props.match.params.id
    const history = useHistory()


    useEffect(() => {
        async function loadCharacter(id) {
            const res = await api.get(`/character/${id}`)

            setCharacter(res.data)

        }

            loadCharacter(id)

    }, [id])


    async function deletechar(id) {
        alert("Tem certeza que deseja excluir este personagem?")
        
        await api.delete(`/character/${id}`)

        history.push('/')
    }

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

                    <div className="charImg">
                    <img src={character.cover} alt={character.name}/>
                </div>

                </div> 
                <div className="description">{character.description}</div> 

                <div className="actions">
                    <Link to="#"><button className="btn edit">Editar</button></Link>

                    <Link to="#"><button className="btn edit">adicionar imagem</button></Link>

                    <button className="btn delete" onClick={() => deletechar(character._id)}>Excluir </button>
                </div>     

                <Link to="/">
                    <FiArrowLeftCircle className="btn b" />
                </Link>

            </section>
            
       </main>
      
    )
}