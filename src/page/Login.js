import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'admin' && password === '123') {
            localStorage.setItem('isLoggedIn', true); 
            navigate('/admin');
        } else {
            alert('Sai tài khoản');
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="bg-gradient-to-r from-orange-200 to-orange-400 h-screen flex items-center justify-center bg-cover">
            <div className="col-md-6 m-auto">
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-5">
                        <label htmlFor="email" className='mr-6 text-2xl'>Tài khoản</label>
                        <input type="text" name="email" className="form-control p-1 w-48" id="email" aria-describedby="emailHelp"
                            value={email} onChange={handleEmailChange} />
                    </div>
                    <div className="form-group mb-5">
                        <label htmlFor="password" className='mr-6 text-2xl'>Mật khẩu</label>
                        <input type="password" name="password" className="form-control p-1 w-48" id="password"
                            value={password} onChange={handlePasswordChange} />
                    </div>
                    <div className='w-full flex items-center justify-items-center'>
                        <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-xl w-80">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
