import React, { useState } from 'react'
import Slider from "react-slick";
import img1 from"../../assets/res1.png"
import img2 from"../../assets/res2.png"
import img3 from"../../assets/res4.png"
import img5 from"../../assets/res5.jpg"
import img11 from"../../assets/res111.jpg"
import Story from '../story/Story';
import img6 from "../../assets/res6.png"
import Menue from '../Menue/Menue';
import img13 from "../../assets/ress6.png"
import img14 from "../../assets/resss1.png"
import img15 from "../../assets/ress3.png"
import Contact from '../contact/Contact';


export default function Home() {
  const [width, setwidth] = useState(false)
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:1500,
  };
  return (
  <>
 
 <Slider {...settings} className=' w-full   z-0 '>
 <div className="home1 h-[400px] md:h-[500px] ">
 <div className='flex items-center justify-center flex-col space-y-2 md:p-20 p-20'>
   <img src={img1} className='w-[200px] '/>
    <h2 className='text-white md:text-[60px] text-[30px]'>Hecho Bueno</h2>
    <h2 className='text-white md:text-[30px] text-[16px] '>Classic Japanese Favorites with a mexican inspired twist</h2>
     <a href="#menu"><button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">CHECK OUT OUR MENUO</button></a>

  </div>
</div>
 <div className="home2 h-[400px] md:h-[500px] ">
 <div className='flex items-center justify-center flex-col space-y-2 md:p-20 p-20'>
   <img src={img2} className='w-[200px] '/>
    <h2 className='text-white md:text-[60px] text-[30px]'>Hecho Fresco</h2>
    <h2 className='text-white md:text-[30px] text-[14px] '>Our Sushi is made only from the finest and freshest ingredients    </h2>
    <a href="#menu"><button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">CHECK OUT OUR MENUO</button></a>

 </div>
</div>
 <div className="home3 h-[400px] md:h-[500px]">
 <div className='flex items-center justify-center flex-col space-y-2 md:p-20 p-20'>
   <img src={img3} className='w-[200px] '/>
    <h2 className='text-white md:text-[60px] text-[30px]'>Hecho Feliz</h2>
    <h2 className='text-white md:text-[30px] text-[14px] '> Happy Hour Beers and appetizers from 3pm - 6pm Everyday    </h2>
    <a href="#menu"><button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">CHECK OUT OUR MENUO</button></a>

  </div>
</div>
 </Slider>

 <Story/>
 <Menue/>
 <Contact/>

 {/* <div className='story flex flex-col justify-center items-center mx-auto pt-2   '>
   <div className='md:w-3/4 flex flex-col items-center md:p-24 ps-11 pe-5'>
   <div className='md:flex'>
   <div className='w-full md:w-1/2 '>
    <img src={img5} className='a w-full'/>
    </div>
    <div className='w-full md:w-1/2 md:self-center relative text-center md:text-start '>
    <img src={img11} className='w-full'/>
    <h2 className='absolute top-0 md:top-[-29px] ps-3'><span className='text-[35px] '>Welcome to The <br/>Neighborhood</span><br/>
Hungry Sushi fans and foodies of South Bay, we'd like to introduce you to our neighborhood sushi kitchen El Pez.
Made up folks who've been running some of the finest sushi restaurants around San Diego, we wanted to bring back a taste of everything we've learned to the great South Bay communities we grew up in.
Come on in and try us out. My name's Alex and I look forward to meeting you.</h2>
    
    </div>
   </div>
   <button type="button" className="mt-7  text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-4 dark:focus:ring-yellow-900"><i className="pe-1 fa-brands fa-instagram"></i>FOLLOW US ON INSTEGRAM</button>
   </div>
 </div> */}


{/* 
 <div className=' menu'>
  <div className="elmenu flex justify-center pt-24 pb-10">
      <div className="text-center">
        <h1 className='text-white text-[60px]'>El Menu</h1>
        <h2 className='text-white text-[30px]'>Choose from any one of our great dishes </h2>
         <img src={img2} className='w-[100px] mx-auto pt-2'/>
         <div className=' w-full flex mt-4 space-x-10 '>
          <div className='w-1/2'>
            <h1 className='text-white text-[30px]'>BEEF</h1>
            <hr/>
            <p className='text-white'>Pan Fried Chicken,..</p>
          </div>
          <div className='w-1/2'>
            <h1 className='text-white text-[30px]'>FISH</h1>
            <hr/>
            <p className='text-white'>Pan Fried Chicken,..</p>
          </div>

         </div>
         <div className=' w-full flex mt-4 space-x-10 '>
          <div className='w-1/2'>
            <h1 className='text-white text-[30px]'>PASTA</h1>
            <hr/>
            <p className='text-white'>Pan Fried Chicken,..</p>
          </div>
          <div className='w-1/2'>
            <h1 className='text-white text-[30px]'>PIZZA</h1>
            <hr/>
            <p className='text-white'>Pan Fried Chicken,..</p>
          </div>

         </div>
         <div className=' w-full flex mt-4 space-x-10 '>
          <div className='w-1/2'>
            <h1 className='text-white text-[30px]'>CHICKEN</h1>
            <hr/>
            <p className='text-white'>Pan Fried Chicken,..</p>
          </div>
          <div className='w-1/2'>
            <h1 className='text-white text-[30px]'>SUSHI</h1>
            <hr/>
            <p className='text-white'>Pan Fried Chicken,..</p>
          </div>

         </div>
         <hr className='mt-3'/>

         <h1 className='text-[white] text-[60px] mt-3'>Desart</h1>
         <div className=' w-full flex mt-4 space-x-10 '>
          <div className='w-1/2'>
            <h1 className='text-white text-[30px]'>CAKE</h1>
            <hr/>
            <p className='text-white'>Pan Fried Chicken,..</p>
          </div>
          <div className='w-1/2'>
            <h1 className='text-white text-[30px]'>DONUTS</h1>
            <hr/>
            <p className='text-white'>Pan Fried Chicken,..</p>
          </div>

         </div>
         <div className=' w-full flex mt-4 space-x-10 '>
          <div className='w-1/2'>
            <h1 className='text-white text-[30px]'>ICE CREAM</h1>
            <hr/>
            <p className='text-white'>Pan Fried Chicken,..</p>
          </div>
          <div className='w-1/2'>
            <h1 className='text-white text-[30px]'>CHOCOLATE</h1>
            <hr/>
            <p className='text-white'>Pan Fried Chicken,..</p>
          </div>

         </div>
         

         <img src={img6} className='w-3/4 mx-auto mt-3'/>

      </div>
  </div>
 </div>  */}

{/* <div className='food flex justify-center items-center '>
<div className=' md:flex justify-center items-center md:p-24 p-12 mx-auto'>
  <img src={img11} className='md:w-[500px] w-full' />
  <img src={img13} className='md:w-[600px] w-full' />



</div>

</div> */}

{/* 
<div className='story flex flex-col justify-center items-center mx-auto pt-2   '>
   <div className='md:w-3/4 flex flex-col items-center md:p-24 ps-11 pe-5'>
   <div className='md:flex'>
   <div className='w-full md:w-1/2 md:self-center  text-center md:text-start back'>
    <img src={img14} className='w-[100px] '/>
    <h2 className=' ps-3 text-[35px]'>Come for the Food</h2> 
    <h2 className=' ps-3 text-[20px] '>We've got everything from Poke Bowls, Salads, and Specialty Sushi Rolls. All with a Mexican inspired twist</h2> 
    <h2 className=' ps-3 text-[20px] '>I mean, Carnitas Ramen, why aren't you eating this right now?</h2> 
    </div>
   <div className='w-full md:w-3/4 '>
    <img src={img13} className='a w-full'/>
    </div>
  
   </div>
 </div>
 </div> */}






{/* <div className='contact mt-3 flex justify-center items-center py-4'>
  <div className='md:flex md:w-3/4 bg-black bg-opacity-70 px-6 pb-3'>
     <div className='md:w-1/2'>
<iframe className='md:w-3/4  pt-5' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.520108141271!2d16.866931724277592!3d52.37912114665138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045ca9c90d078b%3A0x399eebe6f367a36e!2sELEPAZ%20Sp.%20z%20o.o.!5e0!3m2!1sar!2seg!4v1727443791328!5m2!1sar!2seg" width={300} height={250} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
     <h1 className='text-white px-4 pt-2'>Address:</h1>
     <p className='text-gray-400 px-4'>3404 Palm Ave,<br/>
     San Diego, CA 92154, USA</p>
     <h1 className='text-white px-4 pt-2'>Phone:</h1>
     <p className='text-gray-400 px-4'>(619) 600-3161</p>
     <h1 className='text-white px-4 pt-2'>Hours:</h1>
     <p className='text-gray-400 px-4'>Mon/Thu - 11:30am - 9pm</p>
     <p className='text-gray-400 px-4'>Fri/Sat - 11:30AM - 10pm</p>
     <p className='text-gray-400 px-4'>Sun - Closed</p>
     </div> 
     <div className='md:w-1/2 text-center'>
     <img src={img15} className=' md:w-1/2 mx-auto w-1/4'/>
     <h2 className='text-white text-[30px]'>Someone Say Catering?</h2>
    
<form className="max-w-sm mx-auto w-1/2 space-y-3">
<div className="flex">
  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
    </svg>
  </span>
  <input type="text" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" />
</div>
<div className="flex">
  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
    </svg>
  </span>
  <input type="text" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" />
</div>

<div>
  <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="message..." defaultValue={""} />
</div>
<button type="submit" className="w-full focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">submit</button>
</form>

     </div>
  </div>
</div>
<div className='bg-black'>
<div className="bg-black text-center w-3/4 mx-auto"><p className='text-white py-2 text-[9px] md:text-[16px]'>Copyright El Pez 2019, All Rights Reserved | Website Design by Pretty Nice Websites</p></div>

</div> */}





  </>
  )
}
