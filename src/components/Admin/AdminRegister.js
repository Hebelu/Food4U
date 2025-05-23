import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export default function AdminRegister() {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [users, setUsers] = useState([]);
    const [showPassword, setShowPassword] = useState(false);

    const type = 'Admin'

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3333/Admins")
            .then(res => setUsers(res.data))
            .catch(err => console.log(err));
    }, []);
    const handleSubmit = (event) => {
        event.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.warning('Invalid Email structure', { theme: 'colored' });
            return;
        }
        if (password !== confirmPassword) {
            toast.warning('Password is not matching with Confirm password', { theme: 'colored' });
            return;
        }
        if (password.length < 8) {
            toast.warning('password should be greater than 8-chars', { theme: 'colored' })
            return;
        }
        if (password.length > 15) {
            toast.warning('password should not be greater than 15-chars', { theme: 'colored' })
            return;
        }
        if (country === '' || country === null) {
            toast.warning('provide country', { theme: 'colored' });
            return;
        }
        let count = 0;
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                count++;
            }
        }
        let aid=users.length+1;
        if (count > 0) {
            toast.warning("Email already existed...!", { theme: 'colored' });
            return;
        }
        else {
            const newUser = { id: aid, firstname, lastname, email, mobile, password, confirmPassword, gender, country, address, age, type };
            axios.post("http://localhost:3333/Admins", newUser)
                .then(res =>{
                    console.log(toast.success("Admin successfully registered",{theme:'colored',autoClose:2000}), res.data)})
                .catch(error => console.log(error));
            navigate("/adminlogin");
        }

    }

    return (
        <div className='bg-dark'>
            <div className='bg-success'><marquee><h1>Welcome to Resturant Food4U</h1></marquee></div><br />
            <div className='offset-lg-3 col-lg-6'>
                <form className='container' onSubmit={handleSubmit}>
                    <div className='card bg-info'>
                        <div className='card-header'>
                            <h1>Admin Registration</h1>
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>First Name <span class="material-symbols-outlined">person</span><span className='errmsg'>*</span></label>
                                        <input type='text' className='form-control' placeholder='Enter your first name' name='firstname' value={firstname} onChange={(event) => { setFirstName(event.target.value) }} required></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Last Name <span class="material-symbols-outlined">person</span><span className='errmsg'>*</span></label>
                                        <input type='text' className='form-control' placeholder='Enter your last name' name='lastname' value={lastname} onChange={(event) => { setLastname(event.target.value) }} required></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Email Id <span class="material-symbols-outlined">email</span><span className='errmsg'>*</span></label>
                                        <input type='email' className='form-control' placeholder='Enter your email' name='email' value={email} onChange={(event) => { setEmail(event.target.value) }} required></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Mobile Number <span class="material-symbols-outlined">phone</span><span className='errmsg'>*</span></label>
                                        <input type='number' className='form-control' placeholder='Enter your Password' name='mobile' value={mobile} onChange={(event) => { setMobile(event.target.value) }} required></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Password<span class="material-symbols-outlined">lock</span> <span className='errmsg'>*</span></label>
                                        <input type={showPassword ? "text" : "password"} className='form-control' placeholder='Enter your Password' name='password' value={password} onChange={(event) => { setPassword(event.target.value) }} required></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Confirm-Password <span class="material-symbols-outlined">lock</span><span className='errmsg'>*</span></label>
                                        <input type={showPassword ? "text" : "password"} className='form-control' placeholder='Confirm your Password' name='confirmPassword' value={confirmPassword} onChange={(event) => { setConfirmPassword(event.target.value) }} required></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Gender</label><br />
                                        <input type='radio' name='gender' value='male' className='app-check' checked={gender === 'male'} onChange={() => setGender('male')}></input>
                                        <label>Male<span class="material-symbols-outlined">male</span></label>
                                        <input type='radio' name='gender' value='female' className='app-check' checked={gender === 'female'} onChange={() => setGender('female')}></input>
                                        <label>Female<span class="material-symbols-outlined">female</span></label>
                                        <input type='radio' name='gender' value='other' className='app-check' checked={gender === 'other'} onChange={() => setGender('other')}></input>
                                        <label>Other</label>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className='form-group'>
                                        <label>Country<span className='errmsg'>*</span></label>
                                        <select className='form-control' name='country' value={country} onChange={(event) => { setCountry(event.target.value) }} required>
                                            <option>Select country</option>
                                            <option value='India'>India</option>
                                            <option value='Usa'>Usa</option>
                                            <option value='Australia'>Australia</option>
                                            <option value='NewZealand'>NewZealand</option>
                                            <option value='Israel'>Israel</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-lg-2'>
                                    <div className='form-group'>
                                        <label>Age : <span className='errmsg'>*</span></label>
                                        <input className='form-control' placeholder='Enter your Age' name='age' value={age} onChange={(event) => { setAge(event.target.value) }} required></input>
                                    </div>
                                </div>


                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>Address<span className='errmsg'>*</span></label>
                                        <textarea className='form-control' placeholder='Type your address' name='address' value={address} onChange={(event) => { setAddress(event.target.value) }} required></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer text-center'>
                            <button type='submit' className='btn btn-primary mx-5'>Register</button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link type='submit' to={'/adminlogin'} className='btn btn-danger'>Back  </Link>
                        </div>
                    </div>
                </form>
            </div>
            <br />
            <br /><br />
            <ToastContainer />
        </div>
    )
}
