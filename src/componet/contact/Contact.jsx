import React from 'react'
import img15 from "../../assets/ress3.png"

export default function Contact() {
  return (
    <>
    <div className='contact mt-3 flex justify-center items-center py-4'id='cont'>
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
<button type="button" className="w-full focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">submit</button>
</form>

     </div>
  </div>
</div>
<div className='bg-black'>
<div className="bg-black text-center w-3/4 mx-auto"><p className='text-white py-2 text-[9px] md:text-[16px]'>Copyright El Pez 2019, All Rights Reserved | Website Design by Pretty Nice Websites</p></div>

</div>
    
    </>
  )
}
