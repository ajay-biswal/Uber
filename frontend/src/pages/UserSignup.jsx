import React, {useState} from "react";
import { Link } from "react-router-dom";
const UserSignup = () => {

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
                <img className="w-16 mb-10" src="https://imgs.search.brave.com/4ATIxs0SwT-DsZ4ajF7jlixEaXFqw5Ys2I5OFQa8JEM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="" />
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
                <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
            </div>
            <div>
                <p className='text-jusitfy text-xs text-gray-500 leading-tight'>
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </p>
                
            </div>
        </div>
    );
}

export default UserSignup;