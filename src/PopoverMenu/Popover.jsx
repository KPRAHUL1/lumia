
import { Popover } from "flowbite-react";

export function BuyLumia() {
  return (
   
      <Popover
        trigger="hover" content={ <div className="">
           <div className="grid grid-cols-1 gap-5 m-10 justify-items-start">
                <a href="" className="flex gap-5"><img src="public\svg-icons\leaf-fluttering-in-wind-svgrepo-com.svg" alt="" className="w-6"/><h1>Buy Now</h1></a>
            <a href="" className="flex gap-5"><img src="public\svg-icons\documentation-svgrepo-com.svg" alt="" className="w-6"/><h1>Documentation Online</h1></a>
            <a href="" className="flex gap-5"><img src="public\svg-icons\support-technology-svgrepo-com.svg" alt="" className="w-6"/><h1>Get Support</h1></a>
            <a href="/account/signIn" className="flex gap-5"><img src="public\svg-icons\support-technology-svgrepo-com.svg" alt="" className="w-6"/><h1>SignIn</h1></a>
           </div>
            </div>}>
            
        <a href="#" className="hover:color-red">
         Buy Lumia
        </a>
      </Popover>
    
  );
}
