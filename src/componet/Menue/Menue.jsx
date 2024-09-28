import React from 'react'
import img6 from "../../assets/res6.png"
import img2 from"../../assets/res2.png"
import { Link } from 'react-router-dom'


export default function Menue() {
  return (
    <>
    
 <div className=' menu' id='menu'>
  <div className="elmenu flex justify-center pt-24 pb-10">
      <div className="text-center">
        <h1 className='text-white text-[60px]'>El Menu</h1>
        <h2 className='text-white text-[30px]'>Choose from any one of our great dishes </h2>
         <img src={img2} className='w-[100px] mx-auto pt-2'/>
         <div className=' w-full flex mt-4 space-x-10 '>
          <div className='w-1/2'>
           <Link to={'../beef'}><h1 className='text-white text-[30px]'>BEEF</h1></Link> 
            <hr/>
            <p className='text-white'>Pan Fried Chicken,..</p>
          </div>
          <div className='w-1/2'>
           <Link to={'../fish'}><h1 className='text-white text-[30px]'>FISH</h1></Link> 
            <hr/>
            <p className='text-white'>Pan Fried Chicken,..</p>
          </div>

         </div>
         <div className=' w-full flex mt-4 space-x-10 '>
          <div className='w-1/2'>
            <Link to={'../pasta'}><h1 className='text-white text-[30px]'>PASTA</h1></Link>
            <hr/>
            <p className='text-white'>Pan Fried Chicken,..</p>
          </div>
          <div className='w-1/2'>
           <Link to={'../pizaa'}><h1 className='text-white text-[30px]'>PIZZA</h1></Link> 
            <hr/>
            <p className='text-white'>Pan Fried Chicken,..</p>
          </div>

         </div>
         <div className=' w-full flex mt-4 space-x-10 '>
          <div className='w-1/2'>
         <Link to={'../chicken'}><h1 className='text-white text-[30px]'>CHICKEN</h1></Link>   
            <hr/>
            <p className='text-white'>Pan Fried Chicken,..</p>
          </div>
          <div className='w-1/2'>
           <Link to={'../suhi'}><h1 className='text-white text-[30px]'>SUSHI</h1></Link>   
            <hr/>
            <p className='text-white'>Pan Fried Chicken,..</p>
          </div>

         </div>
         <hr className='mt-3'/>

         <h1 className='text-[white] text-[60px] mt-3'>Desart</h1>
         <div className=' w-full flex mt-4 space-x-10 '>
          <div className='w-1/2'>
            <Link to={'../cack'}><h1 className='text-white text-[30px]'>CAKE</h1></Link>
            <hr/>
            <p className='text-white'>cack donuty icecream,..</p>
          </div>
          <div className='w-1/2'>
            <Link to={'../don'}><h1 className='text-white text-[30px]'>DONUTS</h1></Link>
            <hr/>
            <p className='text-white'>cack donuty icecream,..</p>
          </div>

         </div>
         <div className=' w-full flex mt-4 space-x-10 '>
          <div className='w-1/2'>
         <Link to={'../ice'}><h1 className='text-white text-[30px]'>ICE CREAM</h1></Link>   
            <hr/>
            <p className='text-white'>cack donuty icecream,..</p>

          </div>
          <div className='w-1/2'>
       <Link to={'../choco'}><h1 className='text-white text-[30px]'>CHOCOLATE</h1></Link>     
            <hr/>
            <p className='text-white'>cack donuty icecream,..</p>

          </div>

         </div>
         

         <img src={img6} className='w-3/4 mx-auto mt-3'/>

      </div>
  </div>
 </div> 
    
    
    </>
  )
}
