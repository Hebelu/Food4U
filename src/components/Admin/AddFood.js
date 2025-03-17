import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export default function AddFood() {
    const [foodname, setFoodname] = useState('');
    const [foodqty, setFoodqty] = useState('');           //variable wont change
    const [foodprice, setFoodprice] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [items, setItems] = useState([]);

    const navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:3333/Products")        //backendlink
            .then(res => setItems(res.data))
            .catch(error => console.error(error));
    }, []);
    const handleSubmit = (event) => {
        event.preventDefault();

        let count = 0;
        for (let i = 0; i < items.length; i++) {
            if (items[i].foodname === foodname) {
                count++;

            }

        }
        if (count > 0) {
            toast.warning("Item already exited!...!", {theme:'colored'});       //prints msge
            return;
        }
        else {
            // ,image
            const temp = { id:foodname, foodname, foodqty, foodprice, date, image:image.replace("C:\\fakepath\\","/Images/"),description }      //loads the data
            // var image =image.replace("C:\\fakepath\\","/Images/");

            axios.post("http://localhost:3333/Products", temp)
                .then(res =>{console.log(toast.success("Item Added successfully...!",{theme:'colored',autoClose:2000}), res.data)})
                .catch(error => console.log(error));
            
            navigate('/adminproduct')
        }

    }
    return (
        <div className='bg-dark'>
            <div className='bg-success'>
                <marquee>
                    <h1>Welcome to Resturant Food4U</h1>
                </marquee>
            </div><br />
            <div className='offset-lg-3 col-lg-6'>
                <form className='container' onSubmit={handleSubmit}>
                    <div className='card bg-info'>
                        <div className='card-header'>
                            <h1>Add Food Item</h1>
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Product Name <span class="material-symbols-outlined">person</span><span className='errmsg'>*</span></label>
                                        <input type='text' className='form-control'
                                            placeholder='Enter the food name' required name='foodname'
                                            value={foodname} onChange={(e) => { setFoodname(e.target.value) }}></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Item Price <span class="material-symbols-outlined">price_check</span><span className='errmsg'>*</span></label>
                                        <input type='number' className='form-control'
                                            placeholder='Enter the food price' required name='foodprice'
                                            value={foodprice} onChange={(e) => { setFoodprice(e.target.value) }}></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Date <span class="material-symbols-outlined">today</span><span className='errmsg'>*</span></label>
                                        <input type='date' className='form-control' name='date' required
                                            value={date} onChange={(e) => { setDate(e.target.value) }}></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Image <span class="material-symbols-outlined">image</span><span className='errmsg'>*</span></label>
                                        <input type='file' className='form-control' name='foodimage' placeholder='Enter Image Url' required
                                            value={image} onChange={(e) => { setImage(e.target.value) }}></input>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Quantity <span class="material-symbols-outlined">production_quantity_limits</span><span className='errmsg'>*</span></label>
                                        <input type='number' className='form-control' required
                                            placeholder='Enter food quantity' name='foodqty'
                                            value={foodqty} onChange={(e) => { setFoodqty(e.target.value) }}></input>
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Description <span class="material-symbols-outlined">description</span><span className='errmsg'>*</span></label>
                                        <input type='text' className='form-control' required
                                            placeholder='Enter food description' name='foodqty'
                                            value={description} onChange={(e) => { setDescription(e.target.value) }}></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer text-center '>
                            <button type='submit' className='btn btn-primary mx-5'>Add to Menu</button>
                            <Link to={'/adminproduct'} className='btn btn-warning'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
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
