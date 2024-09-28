import React from 'react'
import img5 from"../../assets/res5.jpg"
import img11 from"../../assets/res111.jpg"
export default function Story() {
  return (
    <>
  <div className='story flex flex-col justify-center items-center mx-auto pt-2   '>
   <div className='md:w-3/4 flex flex-col items-center md:p-24 ps-11 pe-5'>
   <div className='md:flex'>
   <div className='w-full md:w-1/2 '>
    <img src={img5} className='a w-full'/>
    </div>
    <div className='w-full md:w-1/2 md:self-center relative text-center md:text-start  '>
    <img src={img11} className='w-full'/>
    <h2 className='absolute top-0 lg:top-[-29px] ps-3  '><span className='lg:text-[35px] text-[35px] md:text-[20px]'>Welcome to The <br/>Neighborhood</span><br/>
     Hungry Sushi fans and foodies of South Bay, we'd like to introduce you to our neighborhood sushi kitchen El Pez.
     .</h2> 
    </div>
   </div>
  <a href="https://www.instagram.com/elpezkitchen?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="> <button type="button" className="mt-7  text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-4 dark:focus:ring-yellow-900"><i className="pe-1 fa-brands fa-instagram"></i>FOLLOW US ON INSTEGRAM</button></a>
 </div>
 </div>

    </>
  )
}
