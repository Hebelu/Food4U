import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export default function AdminLogin() {
    const [loginDetails, setLoginDetails] = useState({
        'email': '',
        'password': ''
    })
    const [showPassword, setShowPassword] = useState(false);

    const [dbAdmin, setDBAdmin] = useState({});
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();

        setLoginDetails(prevLogin => ({...prevLogin, [e.target.name]: e.target.value}));
    };

    useEffect(() => {
        axios.get(`http://localhost:3333/Admins`)
            .then(res => setDBAdmin(res.data))
            .catch((err) => console.error('Error featching data',err));
    }, [])
             
    const handleSubmit = (e) => {
        e.preventDefault();
               
        const foundAdmin = dbAdmin.find((admin) =>admin.email === loginDetails.email && admin.password === loginDetails.password);
        if (foundAdmin) {
            localStorage.setItem('loggedUser', JSON.stringify(foundAdmin))
            setError(false);
            navigate('/adminproduct')
            alert("Admin Login is success...!")
        }                 
        else {
            setError(true);
            toast.warning("Invalid username or password", {theme:'colored',autoClose:2000})
        }
    }
            
  return (
    <div className='bg-dark'>
    <div className='bg-success'><marquee><h1>Welcome to Resturant Food4U</h1></marquee></div><hr></hr><br/>
      <br/>
      <br/>
      <br/>
      
      <div className='row'>
        <div className='offset-lg-3 col-lg-6'>
            <form onSubmit={handleSubmit} className='container'>
                <div className='card bg-info'>
                    <div className='card-header text-center text-danger'>
                        <h1>Admin Login <span class="material-symbols-outlined fw-bolder">login</span></h1>
                  {error && <p className='errmsg'>Wrong email or password</p>} 

                    </div>
                    <div className='card-body'>
                        <div className='form-group'>
                            <label>Emailail Id <span class="material-symbols-outlined">mail</span><span className='errmsg'>*</span></label>
                            <input className='form-control' placeholder='Enter your email' name='email' value={loginDetails.email} onChange={handleChange}></input>
                        </div>
                        <div className='form-group'>
                            <label>Password <span class="material-symbols-outlined">lock</span><span className='errmsg'>*</span></label>
                            <input type={showPassword ? "text" : "password"}  className='form-control'placeholder='Enter your password' name='password' value={loginDetails.password} onChange={handleChange}></input>
                            <label for="check">Show Password</label>
                            <input id="check" type="checkbox" value={showPassword} onChange={() => setShowPassword((prev) => !prev)}/>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button type='submit' className='btn btn-primary'>Login</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Account Not Existed..!<Link className='btn btn-success' to={'/adminregister'}>New User</Link>
                    </div>
                </div>
            </form>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <ToastContainer/>
    </div>
  )
}


