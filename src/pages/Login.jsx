import React, { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [state, setState] = useState('Sign Up')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
       // login crendendtial
       
       if (state === "Sign Up") {
        // Save user info in localStorage
        const userData = {
            name,
            email,
            password,
        };
        localStorage.setItem("user", JSON.stringify(userData));
        toast.success("Account created successfully! Please login now.");
        setState("Login");
        setName("");
        setEmail("");
        setPassword("");

    } else {
        // Login mode: check if user exists
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser) {
            if (email === storedUser.email && password === storedUser.password) {
                toast.success(`Welcome back, ${storedUser.name}!`);
                localStorage.setItem("token","true")
                window.location.href="/";
                setEmail("");
                setPassword("");
                navigate('/')
            } else {
                toast.error("Invalid email or password!");
            }
        } else {
            toast.error("No account found. Please sign up first!");
        }
    }
       
    }


    return (
        <form className="min-h-[80vh] flex items-center" onSubmit={onSubmitHandler}>
            <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
                <p className="text-2xl font-semibold">{state === 'Sign Up' ? "create account" : "Login"}</p>
                <p >Please {state === 'Sign Up' ? "sign up" : "Log in"} to book Appointment</p>
                {
                    state === "Sign Up" && <div className="w-full">
                        <p>Full Name</p>
                        <input className="border border-zinc-300 rounded w-full p-2 mt-1" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                }

                <div className="w-full">
                    <p>Email</p>
                    <input className="border border-zinc-300 rounded w-full p-2 mt-1" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="w-full">
                    <p>Password</p>
                    <input className="border border-zinc-300 rounded w-full p-2 mt-1" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button className="bg-primary text-white w-full py-2 rounded-md text-base" >{state === 'Sign Up' ? "create account" : "Login"}</button>
                {
                    state === "Sign Up" ? <p>Already have an account? <span onClick={() => setState('Login')} className="text-primary underline cursor-pointer">Login here</span></p> :
                        <p>Create an new account? <span onClick={() => setState('Sign Up')} className="text-primary underline cursor-pointer">Click here</span></p>
                }
            </div>
            <ToastContainer/>
        </form>

    )
}
export default Login;