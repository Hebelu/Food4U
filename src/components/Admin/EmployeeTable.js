import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdminNavBar from './AdminNavBar'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


export default function EmployeeTable() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3333/Users')
            .then(res => { setData(res.data) })
            .catch(error => console.error('Error fetching data:', error))
    }, []);
    const handleDeleteUser = (userId) => {
        if (window.confirm(`Are you sure to delete "${userId}" `)) {
            // Make a request to your backend to delete the product
            axios.delete(`http://localhost:3333/Users/${userId}`)
                .then(response => {
                    console.log('Product deleted:', response.data);
                    // Assuming you want to update the local state as well
                    const updatedUsers = data.filter(user => user.id !== userId);
                    setData(updatedUsers);
                    toast.error(`User with Name ${userId} deleted successfully`, { theme: 'colored', autoClose: 2000 })
                })
                .catch(error => console.error('Error deleting product:', error));
        }
    };


    return (
        <div className='bg-dark'>
            <AdminNavBar />
            <h1 style={{ backgroundColor: 'blue', color: 'red', textAlign: 'center' }}>Users Table</h1>
            <div className='d-flex justify-content-end mx-5 '>
                <Link to={'/createuser'} className='btn btn-success fw-bolder ucard'>Add New User 
                 (<span class="material-symbols-outlined fw-bolder">
                    person_add
                </span>)
                </Link>
            </div><br />
            <table className='table table-dark table-striped '>
                <thead className='table-dark'>
                    <tr>
                        <th>User Id <span class="material-symbols-outlined">person</span> </th>
                        <th>User Name <span class="material-symbols-outlined">person</span> </th>
                        <th>User EmailId <span class="material-symbols-outlined">mail</span> </th>
                        <th>Phone.No <span class="material-symbols-outlined">phone</span> </th>
                        <th>Functionality <span class="material-symbols-outlined">function</span> </th>
                    </tr>
                </thead>
                <tbody >
                    {data.map((employee, id) => (
                        <tr key={id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstname} {employee.lastname}<span></span></td>
                            <td>{employee.email}</td>
                            <td>{employee.mobile}</td>
                            <td>

                                <Link to={`/readuser/${employee.id}`} className='btn btn-primary me-2 ucard'>Read<span class="material-symbols-outlined">
                    book
                </span></Link>
                                <Link to={`/updateuser/${employee.id}`} className='btn btn-warning mx-2 ucard'> Update<span class="material-symbols-outlined">
                    update
                </span></Link>
                                <button className='btn btn-danger mx-2 ucard' onClick={() => handleDeleteUser(employee.id)}> Delete <span class="material-symbols-outlined">
                    delete
                </span></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <ToastContainer />
        </div>
    )
}
