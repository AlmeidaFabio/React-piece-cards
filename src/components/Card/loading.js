import React from 'react'
import loading from './loading.gif'

export default function Loading() {
    return (
        <img src={loading} 
        alt="loading"
            style={{width: '200px',
            margin: 'auto', 
            display: 'block'}}
        />
    )
}