
import { useState } from "react";

const Setting =()=>{
    const [hovered,setHovered]=useState(true);
    const MouseEnter =()=> setHovered(false);
    const MouseLeave = ()=>setHovered(true)

    return(
        <>
        <div onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} className=" flex flex-col m-10 rounded-xl justify-center items-center">
            <div>
               <img src="cart1.1.png" alt=""  className="rounded-xl"/>
            </div>
            <div className="flex flex-col absolute justify-center items-center ">
          
           {hovered?<div>hi</div>:<div>hello <h1>Sweater</h1>
           <p>******</p></div>
           }
            </div>
        </div>
        </>
    )
}
export default Setting;