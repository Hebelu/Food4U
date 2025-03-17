import React from 'react'
import logo from '../Images/logo.png'
import cart_icon from '../Images/cart_icon.png'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'

export default function UserNavBar() {
    const {
        totalItems
    } = useCart();
    return (

        <div className='navbar navbar-light shadow ' style={{ backgroundColor: 'greenyellow' }}>
            <div className='nav-logo d-flex flex-row-left'>
                <Link className="navbar-brand mx-5" to='/home'>
                    <img src={logo} alt='Food4u' width="60" height="60" className=' rounded-circle d-inline-block align-middle shadow ucard' />
                </Link>
                <p className='d-flex-center text-danger fs-1 fw-bolder  ucard'>𝓕𝓸𝓸𝓓<span className='text-danger'>❹</span>𝓊</p>
            </div>
            <ul className='nav justify-content-center gap-1'>

                <li className="nav-item  ">
                    <h4><Link className='nav-link active d-flex flex-row align-items-center shadow mx-3 fw-bolder ucard' to="/home">HOME <span class="material-symbols-outlined fw-bolder fs-3">
                        home
                    </span></Link></h4>
                </li>
                <li className="nav-item ">
                    <h4><Link className='nav-link active d-flex flex-row align-items-center shadow mx-3 fw-bolder ucard' to="/userproduct">PRODUCT <span class="material-symbols-outlined">category</span></Link></h4>
                </li>
                <li className="nav-item ">
                    <h4><Link className='nav-link active d-flex flex-row align-items-center shadow mx-3 fw-bolder ucard' to="/about">ABOUT</Link></h4>
                </li>
            </ul>
            <div className='nav-item d-flex flex-row shadow'>
                <Link to={'/logout'} className='btn btn-danger fw-bold ucard'><span class="material-symbols-outlined">account_circlelogout</span></Link>

            </div>
            <Link to={'/usercart'} className='mx-5 '><div className='nav-item position-relative ucard'>
                <img src={cart_icon} alt='' width="50" height="50" />
                <div className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger shadow">{totalItems}</div>
            </div></Link>
        </div>
    )
}
