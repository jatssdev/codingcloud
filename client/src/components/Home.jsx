import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Home = () => {
    let [user, setUser] = useState({
        name: '', email: ""
    })
    let [users, setUsers] = useState([])
    let getAllUsers = async () => {
        let response = await axios.get('http://localhost:8000/users')
        setUsers(response.data)


    }
    useEffect(() => {
        getAllUsers()
    }, [])
    let deleteUser = async (id) => {
        let response = await axios.delete('http://localhost:8000/user/' + id)
        alert(response.data)
        getAllUsers()
    }
    let editUser = (oldUSer) => {
        setUser(oldUSer)
    }
    let userValueHandler = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }
    let EditHandler = async (e) => {
        e.preventDefault()

        let response = await axios.put('http://localhost:8000/user/' + user._id, user)

        alert(response.data)
        setUser({
            name: '', email: ""
        })
        getAllUsers()


    }
    return (
        <>
            <div>
                <h1 className='heading'>Users</h1>

                <div className="wrapper">
                    {
                        users.map((x) => {
                            return <div key={x._id} className="product">
                                <h3>{x.name} - {x.email}</h3>
                                <div>
                                    <button onClick={() => deleteUser(x._id)}>Delete</button>
                                    <button onClick={() => editUser(x)}>Edit</button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>

            {
                user._id && <div className="register">
                    <h1>Edit</h1>
                    <form action="" onSubmit={EditHandler}>
                        <div>
                            <input value={user.name} onChange={userValueHandler} type="text" name='name' placeholder='Name' />
                        </div>
                        <div>
                            <input value={user.email} onChange={userValueHandler} type="text" name='email' placeholder='Email' />
                        </div>

                        <div>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            }

        </>
    )
}

export default Home
