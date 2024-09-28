import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from"../../assets/ress3.png"
import { Link } from 'react-router-dom'

export default function Sidebar() {
    const [side, setside] = useState(false)
  return (
   <>
   <div className={side?"openSlide space-y-3" : "closeSlide "}>
  <div className={side?'text-end p-3':'flex justify-center h-screen items-center  pt-4'}> <i onClick={()=>setside(!side)} className={side?"cursor-pointer fa-solid fa-xmark text-white text-[16px]":"cursor-pointer fa-solid fa-bars text-white text-[20px] "}></i></div>
  {side?<img src={logo} className='w-full'/>:''}

  <div className='flex justify-center items-center '> 
  <ul className='flex flex-col space-y-9 text-white'>
      {side ? <>
      <li><NavLink to={'../'}>HOME</NavLink></li>
        <li><Link to={'../menu'}>OUR MENUE</Link></li>
        <li><Link to="../cont">CONTECT</Link></li>
        <li>  <a href="https://www.instagram.com/elpezkitchen?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="> <button type="button" className="  text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-4 dark:focus:ring-yellow-900"><i className=" fa-brands fa-instagram"></i></button></a>
        </li>
        </>
        : ''}
        

    </ul>
  </div>
  

   </div>
   
   </>
  )
}
