import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Home = () => {
    let [users, setUsers] = useState([])
    let getAllUsers = async () => {
        let response = await axios.get('http://localhost:8000/users')
        setUsers(response.data)


    }
    useEffect(() => {
        getAllUsers()
    }, [])
    return (
        <div>
            <h1 className='heading'>Users</h1>

            <div className="wrapper">
                {
                    users.map((x) => {
                        return <div key={x._id} className="product">
                            <h3>{x.name} - {x.email}</h3>
                            <div>
                                <button>Delete</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Home
