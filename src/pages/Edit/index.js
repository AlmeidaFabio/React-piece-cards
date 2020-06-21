import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import './styles.css'

export default function Edit(props) {
    const id = props.match.params.id

    useEffect(() => {
        async function loadCharacter() {
            const res = await api.get(`/character/${id}`)

            localStorage.setItem('name', res.data.name)
            localStorage.setItem('title', res.data.title)
            localStorage.setItem('role', res.data.role)
            localStorage.setItem('description', res.data.description)
            localStorage.setItem('category', res.data.category)
            localStorage.setItem('devilfruit', res.data.devilfruit) 
            localStorage.setItem('cover', res.data.cover.url)

            console.log(res.data)
        }
            
            loadCharacter()

    }, [id])

    const [name, setName] = useState(localStorage.getItem('name'))
    const [title, setTitle] = useState(localStorage.getItem('title'))
    const [role, setRole] = useState(localStorage.getItem('role'))
    const [description, setDescription] = useState(localStorage.getItem('description'))
    const [category, setCategory] = useState(localStorage.getItem('category'))
    const [devilfruit, setDevilfruit] = useState(localStorage.getItem('devilfruit'))
    const [cover, setCover] = useState(localStorage.getItem('cover'))

    const handleFile = (e) => setCover(e.target.files[0])

    const history = useHistory()

    async function post(e) {
        e.preventDefault()

        const data = new FormData()
            data.append('name', name)
            data.append('title', title)
            data.append('role', role)
            data.append('description', description)
            data.append('category', category)
            data.append('devilfruit', devilfruit)
            data.append('cover', cover)
        
        await api.post('/character', data)

        history.push('/')
    }

    return(
        <main>
            <form onSubmit={post} encType="multipart/form-data">
            <h3>Editar personagem</h3>

            <input type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Nome:"
            />

            <input type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Titulo:"
            />

            <input type="text"
                value={role}
                onChange={e => setRole(e.target.value)}
                placeholder="Função:"
            />

            <textarea placeholder="Descrição:"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />

            <input type="text"
                value={category}
                onChange={e => setCategory(e.target.value)}
                placeholder="Categoria:"
            />

            <input type="text"
                value={devilfruit}
                onChange={e => setDevilfruit(e.target.value)}
                placeholder="Akuma no mi:"
            />

            <div>
                <img src={cover} alt=""/>
            </div>

            <input type="file"
                onChange={handleFile}
            />

            <button type="submit">Adicionar</button>
        </form>
        </main>
    )
}