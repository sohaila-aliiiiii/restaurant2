import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './componet/Home/Home'
import Lay from './componet/layouts/Lay.jsx'
import Menue from './componet/Menue/Menue.jsx'
import Contact from './componet/contact/Contact.jsx'
import Beef from './componet/Beef/Beef.jsx'
import Menucontextprovider from './Context/MenuContext.jsx'
import Fish from './componet/Fish/Fish.jsx'
import Pizaa from './componet/Pizaa/Pizaa.jsx'
import Pasta from './componet/Pasta/Pasta.jsx'
import Chicken from './componet/Chicken/Chicken.jsx'
import Sushi from './componet/Sushi/Sushi.jsx'
import Cack from './componet/Cack/Cack.jsx'
import Chocolat from './componet/Chocolat/Chocolat.jsx'
import IceCream from './componet/Icecream/IceCream.jsx'
import Donuts from './componet/Dontus/Donuts.jsx'



function App() {
  const [count, setCount] = useState(0)
  let router=createBrowserRouter([{path:'',element:<Lay/>,children:[
    {index:true,element:<Home/>},
    {path:'menu',element:<Menue/>},
    {path:'cont',element:<Contact/>},
    {path:'beef',element:<Beef/>},
    {path:'fish',element:<Fish/>},
    {path:'pizaa',element:<Pizaa/>},
    {path:'pasta',element:<Pasta/>},
    {path:'chicken',element:<Chicken/>},
    {path:'suhi',element:<Sushi/>},
    {path:'cack',element:<Cack/>},
    {path:'choco',element:<Chocolat/>},
    {path:'ice',element:<IceCream/>},
    {path:'don',element:<Donuts/>}
  ]}])
  return (
    <>
   <Menucontextprovider>
   <RouterProvider router={router}>
   </RouterProvider>
   </Menucontextprovider>
  


    </>
  )
}

export default App
