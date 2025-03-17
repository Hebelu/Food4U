import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdminNavBar from './AdminNavBar'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart/dist';
import { ToastContainer, toast } from 'react-toastify';

export default function AdminProduct() {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState('');
    const { totalUniqueItems } = useCart();

    const searchText = (e) => {
        setFilter(e.target.value);
    }
    let dataSearch = products.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    })

    useEffect(() => {
        axios.get('http://localhost:3333/Products')
            .then(res => { setProducts(res.data) })
            .catch(error => console.error('Error fetching data:', error))

    }, []);

    const handleDeleteProduct = (productId) => {
        if (window.confirm(`Are you sure to delete Id: ${productId} product`)) {

            // Make a request to your backend to delete the product
            axios.delete(`http://localhost:3333/Products/${productId}`)
                .then(response => {
                    console.log('Product deleted', response.data);
                    // Assuming you want to update the local state as well
                    const updatedProducts = products.filter(product => product.id !== productId);
                    setProducts(updatedProducts);
                    toast.error(`Item with Id :${productId} deleted successfully...!`, { theme: 'colored', autoClose: 2000 })
                })
                .catch(error => console.error('Error deleting product:', error));
        }

    };
    return (
        <div className='bg-dark'>
            <AdminNavBar />
            <section className=' row py-3 container ms-5 '>
                <div className='bg bg-info d-flex flow justify-content-between  shadow'>
                    <h2 className='text-dark fw-bolder'>Menu items <span class="material-symbols-outlined fw-bolder">menu_book</span></h2>
                    <Link to={'/addfood'} className='btn btn-success fs-5 fw-bolder text-white shadow'>Add Item<span class="material-symbols-outlined">place_item</span></Link>
                </div><br></br>

                <div className='col-12 mb-5'>
                    <div className='mb-2 col-3 mx-auto text-center shadow'>
                        <label className='form-label h2 text-primary fw-bolder'>Search <span class="material-symbols-outlined fw-bolder fs-3">search</span></label>
                        <input type='text' className='form-control' value={filter} onChange={searchText.bind(this)} placeholder='Search Your Product Here...?' />
                    </div>
                </div>
                <div className='row justify-content-center '>
                    {dataSearch.map(product => {
                        return (
                            <div key={product.id} className='col-lg-4 col-md-6 col-sm-12 ucard'>
                                <div className='card mb-4 bg-warning shadow'>
                                    <img src={product.image} className='card-img-top mx-4 py-2 rounded-circle' alt={product.foodname} style={{ width: 280, height: 180 }} />
                                    <div className='card-body'>
                                        <p className='card-title '><span className=' text-primary fs-3 fw-bolder'>{product.foodname}</span></p>
                                        <p className='card-text'>Quantity : {product.foodqty - totalUniqueItems} </p>
                                        <p className='card-text'> Price : ₹ {product.foodprice} /-</p>
                                        <p className='card-text'>Date : {product.date}</p>
                                        <div className='text-center'>
                                            <button className='btn btn-danger' onClick={() => handleDeleteProduct(product.id)}>Delete <span class="material-symbols-outlined">delete</span></button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>

            </section>
            <br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br />
            <ToastContainer />
        </div>
    )
}
