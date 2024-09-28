import React, { useContext, useEffect } from 'react'
import { Menucontext } from '../../Context/MenuContext'
import { useNavigate } from 'react-router-dom'

export default function Pizaa() {
    let{beef,getBeef}=useContext(Menucontext)
     useEffect(() => {
      getBeef('pizza')      
     }, [])

    

     
  return (
    <>
  {beef?.length? <div className='container mx-auto ps-8 md:ms-0 bg-menu'>
    <div className='flex flex-wrap space-y-5 md:space-y-0 p-7 '>
    
    {beef?.map((p,i)=>
      <div key={i} className=' product hover:shadow-md p-4 w-full md:w-1/4 lg:w-1/5'>
    
       <img src={p.image_url} className='w-full rounded-md md:h-[250px]'/>
       <h2 className='font-medium'>{p.title.split(' ').slice(0,3).join(' ')}</h2>
       <h3>149 $</h3>
       <a href="https://checkout.stripe.com/c/pay/cs_test_a18cRMyjZnvmHldsUWDF8dCo9wldWqnhGymOoWhDUTZ8IliNpigpRM77OQ#fidkdWxOYHwnPyd1blpxYHZxWjA0SHViYl1ANVYyU2pOX2hVVW9ASmZBUElpa2FLVnBUQGo2UFduUEhIXHx9aEhjanBGZ1NxZ3RKNVVtXWxcSTJ8Qzx2aWZkUEBpMXJCXVRHTkIxZzBSZmhENTUxYHVKMUpQVycpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl" target='_blank'> <button className="btn text-center rounded-md w-full bg-yellow-300 text-white mt-1">order online</button>
       </a>
    </div>
    )}
    </div>
    </div>:<div className='text-center py-16 h-[300px] md:h-[600px] flex items-center justify-center'>
      <i className='fas fa-spinner fa-spin-pulse fa-4x'></i>
    </div>}
    


    
    </>
  )
}

