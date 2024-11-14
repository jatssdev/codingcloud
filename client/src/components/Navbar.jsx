import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <h1>Users</h1>
                <div className="links">
                    <p><NavLink to={'/'}>Home</NavLink></p>
                    <p><NavLink to={'/register'}>Register</NavLink></p>
                </div>
            </div>

        </>
    )
}

export default Navbar
