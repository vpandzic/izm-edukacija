import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('token')) {
            navigate('/');
        }
    }, [navigate]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    }

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        fetch('https://frontend.internetskimarketing.eu/backend/wp-json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                setIsLoading(false);
                setForm({
                    username: "",
                    password: ""
                })
                if (data?.code) {
                    setError('Greska pri prijavljivanju!');
                    return;
                }
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', data.user_display_name);
                console.log(data);
                navigate('/')
                window.location.reload();
            })
        //console.log(form);
    };

    return (
        <div className="container login-page">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center align-items-center min-vh-100 login-div">
                    <div className="login-div-background border rounded">
                        <form className={`p-4 border rounded shadow login-form ${isLoading ? "loading" : ""}`} onSubmit={handleLogin}>
                            <div className="form-content-noblur">
                                <h2 className="text-center mb-4">Login</h2>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input value={form.username} name="username" onChange={handleChange} type="username" className="form-control" id="email" placeholder="Enter your email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input value={form.password} name="password" onChange={handleChange} type="password" className="form-control" id="password" placeholder="Enter your password" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                </div>
                                {error ? <p class="alert alert-danger">{error}</p> : ""}
                                <button type="submit" className="btn btn-custom w-100">Login</button>
                                <div className="text-center mt-3">
                                    <a href="#">Forgot password?</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
