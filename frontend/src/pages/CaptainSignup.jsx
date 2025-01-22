import React, { useState } from "react";
import { Link } from "react-router-dom";
const CaptainSignup = () => {

    const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [firstName, setFirstName] = useState('')
        const [lastName, setLastName] = useState('')
        const [userData, setUserData] = useState({})
        const submitHandler = (e) => { 
            e.preventDefault();
            // console.log({email, password, firstName, lastName});
    
            setUserData({
                fullName: {
                    firstName: firstName,
                    lastName: lastName
                },
                email: email,
                password: password
            })
    
            
            
            setEmail('')
            setPassword('')
            setFirstName('')
            setLastName('')
        }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className="w-16 mb-10" src="https://imgs.search.brave.com/6reAKp4Nc5LY57Y2lC3SwVkYq4JNcszeF2rjJjY34YE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvVWJl/ci1Mb2dvLVBORy1J/bWFnZS5wbmc" alt="" />
                <form onSubmit={(e) => submitHandler(e)}>
                    <h3 className='text-base font-medium mb-2'>What's Your Name</h3>
                    <div className='flex gap-4 mb-2'>
                        <input
                            required
                            
                            className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-base placeholder:text-sm'
                            type="text" placeholder="first name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            required
                            
                            className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-base placeholder:text-sm'
                            type="text" placeholder="last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <h3 className='text-base font-medium mb-2'>What's your email?</h3>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
                        type="email" placeholder="email@example.com"
                    />
                    <h3 className="text-base font-medium mb-2">Enter Password</h3>

                    <input
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
                        type="password" placeholder="password" />
                    <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>

                    
                </form>
                <p className='text-center'>Already have an account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
            </div>
            <div>
                <p className='text-jusitfy text-xs text-gray-500 leading-tight'>
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </p>
                
            
            </div>
        </div>
    );
}

export default CaptainSignup;