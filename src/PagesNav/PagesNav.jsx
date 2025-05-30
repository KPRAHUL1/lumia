
import { Popover } from "flowbite-react";

export function Pages() {
  return (
   
      <Popover
        trigger="hover" content={ <div className="w-96 p-5 rounded-xl">
          <header>
            <h1 className="font-semibold">STORE PAGES</h1>
            <hr className="font-bold"/>
          </header>
          <div className="flex flex-col gap-5 mt-10">
          <div className="flex flex-row justify-between"> <a href="">Collections List </a><span className="font-semibold">{">"}</span></div> 
            <a href="">Blog</a>
            <a href="">Account</a>
            <a href="">Gallery</a>
            <a href="">About Us</a>
            <a href="">Faqnew</a>
            <a href="">Contact Us</a>
            <a href="">Typography</a>
            <a href="">404 Page</a>
            <a href="">Coming Soon</a>
          </div>
            </div>}>
            
        <a href="#" className="hover:color-red">
         Pages
        </a>
      </Popover>
    
  );
}
