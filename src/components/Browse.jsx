import React from 'react'
import { useNavigate } from 'react-router-dom';

const Browse = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    }
    
    return (
        <div className=' bg-black text-white w-screen h-screen'>
        <nav className='bg-white p-3 text-right'>
            <button className='mr-24 font-semibold text-xl bg-black shadow-lg shadow-black p-2 px-8'
                onClick={handleLogout}>
                Logout
            </button>
        </nav>
        <div className='p-2 flex flex-col justify-center items-center mt-16'>
            <h1 className='p-2 mt-12 font-bold text-3xl'>welcome,{user?.name} </h1>
            <p className='p-2 mt-2'>Email: {user?.email}</p>
        </div>
        </div>
    )
}

export default Browse
