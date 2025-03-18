import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import UserNavBar from './UserNavBar';

export default function ViewMore() {
    const [data, setData] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:3333/Products/' + id)
            .then(res => setData(res.data))
            .catch(err => console.error(err))
    }, [])
    return (
        <div className='bg-dark mx-2 '>
            <UserNavBar />
            <br />
            <div className='d-flex w-100 vh-100 justify-content-center align-item-center py-5 '>
                <div style={{ height: 500, width: 350 }} className='boarder bg-primary shadow px-5 pt-3 rounded '>
                    <h2 className='text-warning fs-2 fw-bolder '>Product Details</h2>
                    <div className='mb-2'>
                        <img src={data.image} className='card-img-top img-fluid  py-1 rounded-circle shadow'
                            alt={data.foodname} style={{ width: 280, height: 180 }} />
                    </div>
                    <div className='mb-2'>
                        <strong className='text-light fs-5 fw-bolder '>Food Name:  </strong>{data.foodname}
                    </div>
                    <div className='mb-2'>
                        <strong className='text-light fs-5 fw-bolder '>Food Price: </strong>₹ {data.foodprice} /-
                    </div>
                    <div className='mb-2'>
                        <strong className='text-light fs-5 fw-bolder '>Quantity: </strong>{data.foodqty}
                    </div>
                    <div className='mb-2'>
                        <strong className='text-light fs-5 fw-bolder '>Description:</strong> {data.description}
                    </div>
                    <div className='text-center'>
                        <Link to={`/userproduct`} className='btn btn-danger shadow fw-bolder'>Back <span class="material-symbols-outlined">arrow_back</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
