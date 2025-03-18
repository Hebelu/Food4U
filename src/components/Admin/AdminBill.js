import React, { useEffect, useState } from 'react'
import AdminNavBar from './AdminNavBar'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

export default function AdminBill() {
  const [bill, setBill] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3333/Bills')
      .then(res => { setBill(res.data) })
      .catch(error => console.error('Error fetching data:', error))
  }, []);
  const handleDeleteProduct = (billId) => {
    if (window.confirm(`Are you sure to delete Id: ${billId} bill`)) {
      // Make a request to your backend to delete the product
      axios.delete(`http://localhost:3333/Bills/${billId}`)
        .then(response => {
          console.log('Product deleted:', response.data);
          // Assuming you want to update the local state as well
          const updatedProducts = bill.filter(bill => bill.id !== billId);
          setBill(updatedProducts);
          toast.error(`Id : "${billId}" Bill is deleted`, {theme:'colored',autoClose:2000})
        })
        .catch(error => console.error('Error deleting product:', error));
    }
  };
  return (
    <div className='bg-dark'>
      <AdminNavBar /><br />
      <table className='table table-success bg-info table-striped'>
        <thead className=' ucard'>
          <th className='text-bolder fs-3 text-primary'>Item Id</th>
          <th className='text-bolder fs-3 text-primary'>User Name</th>
          <th className='text-bolder fs-3 text-primary'>User Email</th>
          <th className='text-bolder fs-3 text-primary'>Total Price</th>
        </thead >
        <tbody>
          {bill.map((b, index) => {
            return (
              <tr key={index}>
                <td>{b.id}</td>
                <td>{b.user}</td>
                <td>{b.email}</td>
                <td>₹ {b.total} /-</td>
                <td>
                  <button className='btn btn-danger' onClick={() => handleDeleteProduct(b.id)}>Delete <span class="material-symbols-outlined">delete</span></button>

                </td>
              </tr>
            )

          })}
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
      <br />
      <br />
      <br />
      <ToastContainer/>
    </div>
  )
}
