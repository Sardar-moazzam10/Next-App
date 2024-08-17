"use client"
import { usePathname } from "next/navigation"

export default function layout({children}){
    const Currentpath=usePathname();
    console.log(Currentpath);
return(
    <>
    <br /><br /><br /><br />
    {
    Currentpath!=="/ourstory"?
 <h2>Hy its a layout</h2>:null

     }
    
    
    {
        children
    }
    </>
)
}