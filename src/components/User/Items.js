import React from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useCart } from 'react-use-cart'


export default function Items({ id, image, title, date, price }) {

  const { addItem } = useCart()
  var addToCart = (item) => {
    toast.success("Item added successfully...!", {theme:'colored',autoClose:2000});
    addItem(item);
  }

  return (
    <div className='bg-dark row justify-content-center col-lg-3 col-md-6 col-sm-12 mb-4'>
      <div className='mx-2'>
        <div className='card h-100 shadow bg-warning py-2 ucard'>
          <img src={image} className='card-img-top img-fluid mx-2 py-1 rounded-circle'
           alt={title} style={{ width: 260, height: 180 }} />
          <div className='card-body'>
            <p className='card-title fw-bolder h3 text-center ms-2 text-dark'>{title}</p>
            <p className='card-text h4 text-center fw-bolder text-white'>Price : ₹ {price} /-</p>
            <button className='btn btn-success  mx-2 fw-bold' onClick={() =>addToCart({ id, image, title, date, price, quantity: 1 })}>Add 2 cart <span class="material-symbols-outlined">add_shopping_cart</span></button>
            <Link className='btn btn-primary fw-bold' to={`/view/${id}`}>More<span class="material-symbols-outlined">more_vert</span></Link>
          </div>
        </div>
      </div>
<ToastContainer/>
    </div>
  )
}
