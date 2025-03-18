import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AdminNavBar from './AdminNavBar';

export default function Read() {
    const [data, setData] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:3333/Users/' + id)
            .then(res => setData(res.data))
            .catch(err => console.error(err))
    }, [])
    return (
        <div className='bg-dark mx-2 '>
            <AdminNavBar />
            <br />
            <div className='d-flex w-100 vh-100 justify-content-center align-item-center py-5 '>
                <div className='w-40 h-50 boarder bg-primary shadow px-5 pt-3 rounded'>
                    <h2 className='text-warning fs-2 fw-bolder'>User Details</h2>
                    <div className='mb-2'>
                        <strong> <span class="material-symbols-outlined">
                            person
                        </span> Name: {data.firstname} {data.lastname} </strong>
                    </div>
                    <div className='mb-2'>
                        <strong> <span class="material-symbols-outlined">
                            email
                        </span> Email: {data.email} </strong>
                    </div>
                    <div className='mb-2'>
                        <strong>
                            <span class="material-symbols-outlined">email</span>
                            Age: {data.age}</strong>
                    </div>
                    <div className='mb-2'>
                        <strong> <span class="material-symbols-outlined">
                            phone
                        </span> Mobile: {data.mobile} </strong>
                    </div><br />
                    <Link to={`/updateuser/${id}`} className='btn btn-success mx-5 fw-bolder'>Edit <span class="material-symbols-outlined">
                        edit
                    </span></Link>
                    <Link to={`/employeeTable`} className='btn btn-danger mx-4 fw-bolder'>Back<span class="material-symbols-outlined">arrow_back</span></Link>
                </div>
            </div>
        </div>
    )
}
