import React from 'react'
import about from '../Images/about.png'
import UserNavBar from './UserNavBar'

export default function AboutUs() {
  return (
    <>
        <UserNavBar/>
        <img src={about} alt='Food4u' width="1500" height="1600" className=' rounded-full d-inline-block align-middle' />
      
    </>
  )
}
