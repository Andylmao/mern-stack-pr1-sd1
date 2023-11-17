import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav({setIsLogin}) {

    const logoutSubmit = () =>{
        localStorage.clear()
        setIsLogin(false)
    }

    return (
        <header>
            <div className="logo">
                <h1><Link to="/">App de Notas</Link></h1>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create">Nueva Nota</Link></li>
                <li onClick={logoutSubmit}><Link to="/">Salir</Link></li>
            </ul>
        </header>
    )
}