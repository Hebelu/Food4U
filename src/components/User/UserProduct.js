import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserNavBar from './UserNavBar'
import Items from './Items'
// import data from './data'
export default function UserProduct() {
    const [products, setProducts] = useState([])
    const [filter, setFilter] = useState('');

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
            .then(res => setProducts(res.data))
            .catch(error => console.error('Error fetching data:', error))
    }, []);

    return (
        <div className='bg-dark'>
            <UserNavBar />

            <div className='col-12 mb-5'>
                <div className='mb-3 col-4 mx-auto text-center'>
                <p className='text-xl fs-1 fw-bolder text-white mx-5 shadow'>Menu Items <span class="material-symbols-outlined fw-bolder">menu_book</span></p>
                    <label className='form-label h2 text-primary fw-bolder'>Search <span class="material-symbols-outlined fw-bolder fs-3">search</span></label>
                    <input type='text' className='form-control' value={filter} onChange={searchText.bind(this)} placeholder='Search your Product Here...?'/>
                </div>
            </div>
            <section className='py-4 container '>
                <div className='row justify-content-center '>
                    {dataSearch.map((product) => {
                        return (
                            <Items
                                key={product.id}
                                id={product.id}
                                image={product.image}
                                title={product.foodname}
                                price={product.foodprice}
                                item={product}/>
                        )
                    })}
                </div>

            </section>
            <br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}


