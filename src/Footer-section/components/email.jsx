import React from 'react';
import StyledInput from './StyledInput';// Adjust the import path as needed

export default function Email_footer() {
  return (
    <>
      <h4 className="font-lg text-white text-center py-10 text-xl xl:text-2xl xl:font-bold">
        Do you want to be among the first to know about sale time?
      </h4>
      <div className="m-3 grid grid-cols-1 justify-items-center">
        <div className="flex bg-white rounded-full  justify-between">
          <StyledInput 
            type="email"
            placeholder="Enter Your Email Here" className="rounded-full px-5 border-0 border-none text-start"
          />
          <i className="fa-regular fa-paper-plane text-3xl text-white bg-black px-3 p-2 rounded-full xl:hidden"></i>
          <button className="hidden xl:block bg-black text-white rounded-full p-5 text-xs font-semibold">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </>
  );
}
