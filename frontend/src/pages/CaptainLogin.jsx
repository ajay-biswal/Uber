import React, { useState } from "react";
import { Link } from "react-router-dom";
const CaptainLogin = () => {
    const [email, setEmail] = useState('');
        const [password, setPassword] = useState('')
        const [captainData, setCaptainData] = useState({});
    
        const submitHandler = (e) => { 
            e.preventDefault();
            setCaptainData({
                email: email,
                password: password
            })
            
            setEmail('');
            setPassword('');
        }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className="w-16 mb-10" src="https://imgs.search.brave.com/6reAKp4Nc5LY57Y2lC3SwVkYq4JNcszeF2rjJjY34YE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvVWJl/ci1Mb2dvLVBORy1J/bWFnZS5wbmc" alt="" />
                <form onSubmit={(e) => submitHandler(e)}>
                    <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        type="email" placeholder="email@example.com" />
                    <h3 className="text-lg font-medium mb-2">Enter Password</h3>

                    <input
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        type="password" placeholder="password" />
                    <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>

                    
                </form>
                <p className='text-center text-bold'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
            </div>
            <div>
                <Link
                    to='/login'
                    className='bg-[#d5622d] flex justify-center text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Sign in as User</Link>
            </div>
        </div>
    );
}

export default CaptainLogin;