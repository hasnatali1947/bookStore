"use client"

import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { API } from '../../../utils/api'
import { toast } from "react-toastify";

const AdminLogin = () => {

    const router = useRouter()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [adminLogin, setAdminLogin] = useState(null)

    console.log("adminlogin", adminLogin);

    const [errors, setErrors] = useState({});

    // validations

    const validate = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data =
        {
            email,
            password
        }
        if (validate()) {
            try {
                const response = await axios.post(API.user.adminLogin, data)
                console.log("login", response);
                localStorage.setItem('Adminlogin', JSON.stringify(response.data))
                setAdminLogin(response.data);

                setEmail('')
                setPassword('')
                toast("login successfully")

                router.push("/adminPanel")

            } catch (error) {
                console.error(error);
                console.log("error during login");
                toast.error("incorrect password or email")
            }
        }

    };

    console.log("adminLogin", adminLogin);

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : ''}`}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>
                    <div className="mb-6">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default AdminLogin
