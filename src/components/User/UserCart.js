import { useCart } from 'react-use-cart'
import UserNavBar from './UserNavBar';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function UserCart() {
    const navigate = useNavigate()

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    const handleBuyNow = () => {
        const user =JSON.parse(localStorage.getItem("loggedUser"));
        const billData = {
            user : user.firstname +' '+user.lastname,
            email : user.email,
            total: cartTotal
        };

        axios.post('http://localhost:3333/Bills', billData)
            .then(res => {
                console.log('Purchase Successful..!', res.data)
                emptyCart();
                toast.success('Order Confirmed..!', {theme:'colored',autoClose:2000});  
            })
            .catch(err => console.error(toast.er('Error to order', {theme:'colored'}), err));
navigate('/userproduct')
    }
    return (
        <div className='bg-dark'>
            <UserNavBar />
            {isEmpty ? (<h1 className='text-center text-danger'>Your cart is empty</h1>) : (

                <section className='py-4 container'>
                    <div className='row justify-content-center'>
                        <div className='row col-12 '>
                            <br/><br/><br/>
                            <div className='align-item-between bg-info text-xl fs-2 fw-bolder'>Cart Unique items:- <span className='text-danger'>{totalUniqueItems}</span> Total Items:- <span className='text-danger'>{totalItems}</span></div>
                            <table className='table table-success table-striped fw-bolder fs-3 text-warning'>
                                <thead>
                                    <th>Image <span class="material-symbols-outlined">image</span></th>
                                    <th>Item Name <span class="material-symbols-outlined">place_item</span></th>
                                    <th>Item Price <span class="material-symbols-outlined">currency_rupee</span></th>
                                    <th>Quantity <span class="material-symbols-outlined">production_quantity_limits</span></th>
                                    <th>Functionality<span class="material-symbols-outlined">function</span></th>
                                </thead>
                                <tbody>
                                    {items.map((item, index) => {
                                        return (
                                            <tr key={index}>


                                                <td>
                                                    <img className='shadow' src={item.image} alt={item.title} style={{ height: '6rem' }} />
                                                </td>
                                                <td>  {item.title}</td>
                                                <td>₹ {item.price} /-</td>
                                                <td>Quantity({item.quantity})</td>
                                                <td>
                                                    <button className='btn btn-info fw-bold ms-3 shadow'
                                                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}

                                                    > <span class="material-symbols-outlined">exposure_neg_1</span></button>
                                                    <button className='btn btn-info fw-bold ms-3 shadow'
                                                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                                    > <span class="material-symbols-outlined">exposure_plus_1</span></button>
                                                    <button className='btn btn-danger fw-bold ms-3 shadow'
                                                        onClick={() => removeItem(item.id)}
                                                    >Remove  <span class="material-symbols-outlined">delete</span></button>
                                                </td>
                                            </tr>
                                        )

                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className='col-auto ms-auto'>
                            <h2 className='text-primary '>Total price: ₹ {cartTotal} </h2>
                        </div>
                        <div className='col-auto'>
                            <button className='btn btn-danger fw-bold fs-5 shadow'
                                onClick={() => emptyCart()}
                            >Clear Cart <span class="material-symbols-outlined">clear_all</span></button>
                            <button className='btn btn-success fw-bold fs-5 shadow m-2' onClick={handleBuyNow} >Buy Now <span class="material-symbols-outlined">shopping_cart_checkout</span></button>
                        </div>

                    </div>
                </section>
            )}
            <div className='bg-dark'>
            <div className='bg-dark'>
            <div className='bg-dark'></div>

            </div>

            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )
}
