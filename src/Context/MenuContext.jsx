import axios from "axios";
import { createContext, useState } from "react";
 export let Menucontext= createContext()
  export default function Menucontextprovider ({children})
  {
    const [beef, setbeef] = useState(null)
    async function getBeef(id) {
     try{
             let {data}= await axios(`https://forkify-api.herokuapp.com/api/search?q=${id}`)  
             console.log(data.recipes)
             setbeef(data.recipes)
        }
        catch(err)
        {
            console.log(err)
        }
    }
   

   

   
    return(
        <Menucontext.Provider value={{beef,getBeef}}>
           {children}
        </Menucontext.Provider>
    )
   
  }