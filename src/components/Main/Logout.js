import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("loggedUser")

        navigate("/")
    }
    return (
        <div className='bg-dark'> <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/><br/>
            <br/>
            <div className=' bg-info container offset-lg-4 col-lg-4 mt-40 '>
                <h1 className='nav justify-content-center '>Are you sure?</h1>
                <br /><br />
                <ul className='nav justify-content-center'>
                    <li className="nav-item">
                        <button className='btn btn-danger' onClick={handleLogout}>Yes</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </li>
                    <li className="nav-item">
                        <h4><Link className='btn btn-success' to="/userproduct">No</Link></h4>
                    </li>
                </ul>

            </div>
           
            
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Logout