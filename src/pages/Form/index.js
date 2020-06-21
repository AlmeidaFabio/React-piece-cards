import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import './styles.css'

export default function Form() {
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [role, setRole] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [devilfruit, setDevilfruit] = useState('')
        
    const history = useHistory()

    async function post(e) {
        e.preventDefault()

        const data = {
            name,
            title,
            role,
            description,
            category,
            devilfruit,
        }

        const res = await api.post('/character', data)

        localStorage.setItem('id', res.data._id)
        localStorage.setItem('name', res.data.name)
        localStorage.setItem('title', res.data.title)
        localStorage.setItem('role', res.data.role)
        localStorage.setItem('description', res.data.description)
        localStorage.setItem('category', res.data.category)
        localStorage.setItem('devilfruit', res.data.devilfruit)

        history.push(`/image/${res.data._id}`)
    }

    return(
        <main>
            <section className="form">
                <form onSubmit={post}>
                    <h3>Adicionar personagem</h3>

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

                    <button type="submit">Adicionar</button>
                </form>
            </section>
        </main>
    )
}