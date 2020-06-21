import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import './styles.css'

export default function AddImage(props) {
    const [cover, setCover] = useState('')
    const id = props.match.params.id

    const handleFile = (e) => setCover(e.target.files[0])

    const history = useHistory()

    async function post(e) {
        e.preventDefault()

        const data = new FormData()
       
        data.append('file', cover)
        
        const res = await api.post(`/image/${id}`, data)

        localStorage.setItem('cover', res.data.url)

        history.push('/')
    }

    return(
        <main>
            <form onSubmit={post} encType="multipart/form-data">
            <h3>Adicionar imagem</h3>

            <input type="file"
                onChange={handleFile}
            />

            <button type="submit">Adicionar</button>
        </form>
        </main>
    )
}