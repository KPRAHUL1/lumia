"use client";

import { Dropdown } from "flowbite-react";
import message from '../assets/icons/chat.png'

export function Message() {
  return (
    <Dropdown label="" className="rounded-xl  "dismissOnClick={false} size="2xl" renderTrigger={() => <img src={message} alt="" className="w-6 "/>}>
   
        <div className="text-center space-y-5">
          <div className="grid grid-cols-1 gap-5">
            <h1 className="text-md w-full mt-5">Get help from our experts 24/7</h1>
            <a href="tel:+12025550158" className="text-2xl">
              +1-202-555-0158
            </a>
          </div>
          <div className="grid grid-cols-2 border-2">
            <a href="#" className="flex p-5 border-r-2 gap-3">
              <img src="messages-svgrepo-com.svg" alt="Chat" className="w-6" />
              <p>Start Chat</p>
            </a>
            <a href="#" className="flex p-5 gap-3">
              <img src="mail-letter-svgrepo-com.svg" alt="Contact" className="w-6" />
              <p>Contact Us</p>
            </a>
          </div>
          <div className="flex gap-5 justify-center pb-5">
            <a href="#" className="text-blue-600">Track Order</a> - 
            <a href="#" className="text-blue-600">FAQ</a> - 
            <a href="#" className="text-blue-600">Policies</a>
          </div>
        </div>
   
    </Dropdown>
  );
}
