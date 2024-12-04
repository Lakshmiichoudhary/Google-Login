import React from 'react'
import { auth, provider, signInWithPopup } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()

    const handleGoogleLogin = async () => {
        try{
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            localStorage.setItem("user", JSON.stringify({ name: user.displayName, email: user.email }));
            navigate("/welcome");
        }catch(error){
            console.error("Somthing Went Wrong",error)
        }
    }

  return (
    <div className='items-center p-2 flex flex-col bg-black text-white w-screen h-screen'>
        <h1 className='p-2 my-6 text-3xl mt-44'>Login To Continue...</h1>
        <button className='bg-white text-black p-3 px-5 shadow-md shadow-white rounded-full'
            onClick={handleGoogleLogin}>
            Login With Google
        </button>
    </div>
  )
}

export default Login
