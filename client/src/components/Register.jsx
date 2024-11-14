import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
    let [user, setUser] = useState({

    })
    let userValueHandler = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }

    let RegisterHandler = async (e) => {
        e.preventDefault()

        let response = await axios.post('http://localhost:8000/register', user)

        console.log(response.data)
        alert(response.data)
    }
    return (
        <>

            <div className="register">
                <h1>Register</h1>
                <form onSubmit={RegisterHandler} action="">
                    <div>
                        <input onChange={userValueHandler} type="text" name='name' placeholder='Name' />
                    </div>
                    <div>
                        <input onChange={userValueHandler} type="text" name='email' placeholder='Email' />
                    </div>
                    <div>
                        <input onChange={userValueHandler} type="text" name='password' placeholder='Password' />
                    </div>
                    <div>
                        <button>Register</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Register
