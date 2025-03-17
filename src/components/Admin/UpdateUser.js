import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export default function UpdateUser() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: '',
        age: '',
        country: '',
        address: ''
    })

    useEffect(() => {
        axios.get('http://localhost:3333/Users/' + id)
            .then(res => setValues(res.data))
            .catch(err => console.error(err))
    }, [id])

    const handleUpdate = (event)=>{
        event.preventDefault();
        axios.put("http://localhost:3333/Users/"+id, values)
                .then(res =>{ 
                    console.log(toast.success("User Updated Successfylly...!",{theme:'colored',autoClose:2000}),
                    res.data)})
                .catch(error => console.log(error));
            navigate("/employeeTable");
    }
    return (
        <div className='bg-dark'>
            <div className='offset-lg-3 col-lg-6 py-5'>
                <form className='container' onSubmit={handleUpdate}>
                    <div className='card bg-info'>
                        <div className='card-header text-center text-danger '>
                            <h1>Update User (^)</h1>
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>First Name <span className='errmsg'>*</span></label>
                                        <input type='text' className='form-control'  name='firstname' value={values.firstname} onChange={e =>setValues({...values, firstname: e.target.value})} ></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Last Name <span className='errmsg'>*</span></label>
                                        <input type='text' className='form-control' placeholder='Enter your last name' name='lastname' value={values.lastname} onChange={e =>setValues({...values, lastname: e.target.value})}></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Email Id<span className='errmsg'>*</span></label>
                                        <input type='email' className='form-control' placeholder='Enter your email' name='email' value={values.email} onChange={e =>setValues({...values, email: e.target.value})}></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Mobile Number<span className='errmsg'>*</span></label>
                                        <input type='number' className='form-control' placeholder='Enter your Password' name='mobile' value={values.mobile} onChange={e =>setValues({...values, mobile: e.target.value})}></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Password<span className='errmsg'>*</span></label>
                                        <input type={showPassword ? "text" : "password"} className='form-control' placeholder='Enter your Password' name='password' value={values.password} onChange={e =>setValues({...values, password: e.target.value})}></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Confirm-Password<span className='errmsg'>*</span></label>
                                        <input type={showPassword ? "text" : "password"} className='form-control' placeholder='Confirm your Password' name='confirmPassword' value={values.confirmPassword} onChange={e =>setValues({...values, confirmPassword: e.target.value})}></input>
                                    </div>
                                </div>
                                
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Country<span className='errmsg'>*</span></label>
                                        <select className='form-control' name='country' value={values.country} onChange={e =>setValues({...values, country: e.target.value})}>
                                            <option>Select country</option>
                                            <option value='India'>India</option>
                                            <option value='Usa'>Usa</option>
                                            <option value='Australia'>Australia</option>
                                            <option value='NewZealand'>NewZealand</option>
                                            <option value='Israel'>Israel</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Age : <span className='errmsg'>*</span></label>
                                        <input className='form-control' placeholder='Enter your Age' name='age' value={values.age} onChange={e =>setValues({...values, age: e.target.value})}></input>
                                    </div>
                                </div>


                                <div className='col-lg-12'>
                                    <div className='form-group'>
                                        <label>Address<span className='errmsg'>*</span></label>
                                        <textarea className='form-control' name='address' value={values.address} onChange={e =>setValues({...values, address: e.target.value})}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer justify-content center text-center'>
                            <button type='submit' className='btn btn-success  mx-5'>Update User</button>
                            <Link type='submit' to={'/employeeTable'} className='btn btn-danger mx-5'>Back</Link>
                        </div>
                    </div>
                </form>
            </div>
            <br />
            <br /><br />
<ToastContainer/>
        </div>
    )
}
