import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import UserNavBar from './UserNavBar';

export default function UserHome() {
    const settings = {
        accessibility: true,
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScrole: 1
    };
    return (
        <div className='bg bg-zinc'>


            <UserNavBar/>
            <br /><br />

            <div className='w-3/4 m-auto bg-blue-600 rounded-xl'>
                <div className='mt-10'>
                    <Slider {...settings}>
                        {data.map((d) => (
                            <div className='text-center ms-5'>
                                <div className='bg-info rounded flex justify-center items-center'>
                                    <img  src={d.img} alt='' style={{width:360,height:240, alignItems:'center'}} className='ms-5 py-4'></img>
                                    <div className='flex flex-col justify-center items-center gap-3 p-1 '>
                                        <p className='text-xl font-bold fs-1 fw-bolder text-warning'>{d.name}</p>
                                        <p className='text-center text-white'>{d.review}</p>
                                        <Link to='/userproduct' type='submit' className='btn btn-success fw-bold text-white items-center text-lg px-6 py-1 rounded-xl text-decoration-none'>Click to Go..</Link>
                                     
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>
            <br />

        </div>
    )
}
const data = [
    {
        name: `Mutton Biriyani`,
        img: `/Images/mutton.jpg`,
        review: `A restaurant is a place where you can eat a meal and pay for it. In restaurants, your food is usually served to you at your table by a waiter or waitress. The restaurant serves breakfast, lunch, and dinner.`
    },
    {
        name: `Chicken-65`,
        img: `/Images/chicken65.jpg`,
        review: `A restaurant is a place where you can eat a meal and pay for it. In restaurants, your food is usually served to you at your table by a waiter or waitress. The restaurant serves breakfast, lunch, and dinner.`
    },
    {
        name: `Chicken Drum-sticks`,
        img: `/Images/chickendrum.jpg`,
        review: `A restaurant is a place where you can eat a meal and pay for it. In restaurants, your food is usually served to you at your table by a waiter or waitress. The restaurant serves breakfast, lunch, and dinner.`
    },
    {
        name: `Chilli Chicken`,
        img: `/Images/chilli.jpg`,
        review: `A restaurant is a place where you can eat a meal and pay for it. In restaurants, your food is usually served to you at your table by a waiter or waitress. The restaurant serves breakfast, lunch, and dinner.`
    },
    {
        name: `Dhum Biriyani`,
        img: `/Images/Dhum.jpg`,
        review: `A restaurant is a place where you can eat a meal and pay for it. In restaurants, your food is usually served to you at your table by a waiter or waitress. The restaurant serves breakfast, lunch, and dinner.`
    },
    {
        name: `Mutton Biriyani`,
        img: `/Images/mutton.jpg`,
        review: `A restaurant is a place where you can eat a meal and pay for it. In restaurants, your food is usually served to you at your table by a waiter or waitress. The restaurant serves breakfast, lunch, and dinner.`
    },
    {
        name: `Prawns `,
        img: `/Images/prons.jpg`,
        review: `A restaurant is a place where you can eat a meal and pay for it. In restaurants, your food is usually served to you at your table by a waiter or waitress. The restaurant serves breakfast, lunch, and dinner.`
    },
    {
        name: `Pulpy Orange `,
        img: `/Images/pulpy.jpg`,
        review: `A restaurant is a place where you can eat a meal and pay for it. In restaurants, your food is usually served to you at your table by a waiter or waitress. The restaurant serves breakfast, lunch, and dinner.`
    },
    {
        name: `Fruit Salad `,
        img: `/Images/salad.jpg`,
        review: `A restaurant is a place where you can eat a meal and pay for it. In restaurants, your food is usually served to you at your table by a waiter or waitress. The restaurant serves breakfast, lunch, and dinner.`
    }
]