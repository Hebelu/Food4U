import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/logo.png'
export default function AdminNavBar() {
    return (
        <div className='navbar navbar-light shadow' style={{ backgroundColor: 'greenyellow' }}>
            <div className='nav-logo d-flex flex-row-left'>
                <Link className="navbar-brand mx-5  ucard" to='/adminproduct'>
                    <img src={logo} alt='Food4u' width="60" height="60" className=' rounded-circle d-inline-block d-flex justify-between' />
                </Link>
                <span className='d-flex-center text-danger fs-1 fw-bolder ucard '>𝓕𝓸𝓸𝓓<span className='text-danger'>❹</span>𝓊</span>
            </div>
            <ul className='nav justify-content-center gap-3'>

                <li className="nav-item ">
                    <h4><Link className='nav-link active d-flex flex-row align-items-center fw-bolder shadow ms-3 ucard' to="/adminproduct">PRODUCT <span class="material-symbols-outlined">category</span></Link></h4>
                </li>
                <li className="nav-item">
                    <h4><Link className='nav-link active d-flex flex-row align-items-center shadow ms-3 fw-bolder ucard' to="/employeeTable">USERS (<span class="material-symbols-outlined">
                        groups
                    </span>)</Link></h4>
                </li>
                <li className="nav-item">
                    <h4><Link className='nav-link active d-flex flex-row align-items-center shadow ms-3 fw-bolder ucard' to="/adminbills">BILLS <span class="material-symbols-outlined mx-2">payments</span></Link></h4>
                </li>
            </ul>
            <div className='nav-item d-flex flex-row gap-2'>
                <Link to={'/adminlogout'} className='btn btn-danger mx-5 ms-5 shadow fw-bold ucard' ><span class="material-symbols-outlined">account_circlelogout</span>
                </Link>&nbsp;

            </div>
        </div>
    )
}
