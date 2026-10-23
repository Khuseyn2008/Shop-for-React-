import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Appi = () => {
    const API = 'https://6aaa7fddff4dd5698b4e9aa7.mockapi.io/myFistApi/Users';

    const [api, setApi] = useState([])

    const getUser = async () => {
        try {
            const response = await axios.get(API)
            setApi(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const delUser = async (id) => {
        try {
            await axios.delete(`${API}/${id}`)
            setApi(api.filter(e => e.id !== id));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUser()
    }, []);

    return (
        <>
            {api.map((e) => (
                <div key={e.id}>
                    <p>{e.name}</p>
                    <img src={e.img} alt="" />
                <div>    
                <button onClick={() => delUser(e.id)}>
                        delete
                </button>
            </div>
        
                </div>
            ))}
            </>
    )
}

export default Appi