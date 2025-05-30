import StyledInput from "../Footer-section/components/StyledInput"
export default function Subscribe(){
    return(
        <>
         <div className="grid grid-cols-2 m-40 z-50">
          <div className="w-full hidden lg:block space-y-5 ">
            <img
              src="popup-newsletter-fashion2.webp"
              alt="Fashion Login"
              className="w-full h-full rounded-l-xl "
            />
          </div>
          <div className="flex flex-col gap-8 p-5 justify-center">
            <div className="space-y-3 text-center">
              <h1 className="text-xl font-bold mt-5">Subscribe Us</h1>
              <p className="text-xs">
              Follow news,promotion interesting events. Stay turned with Us!S
              </p>
            </div>
            <div className="space-y-4 xl:px-10 ">
    <div className="relative flex flex-col mx-20 gap-5">
      <label htmlFor="email" className="font-semibold">Email</label>
      <div className="flex items-center " >
        <StyledInput
          id="email"a
          type="email"
          className=" flex-1 p-1 border-b-2"
          placeholder="Enter your email here"
        />
        <i className="fa-regular fa-eye cursor-pointer ml-2"></i>
      </div>
      <button
      className="bg-blue-500 text-white py-2 px-4 rounded-full mt-3 text-center"
    >
      SUBSCRIBE
    </button>
    </div>
   
 
    <div className="text-center items-center justify-center gap-5 flex ">
     <input type="checkbox" className="rounded" /><p>Don't show this popup again</p>
    </div>
  </div>
  <div className=" flex space-x-3 justify-center text-grey">
        <i className="fa-brands fa-instagram text-2xl text-grey"></i>
        <i className="fa-brands fa-facebook text-2xl"></i>
        <i className="fa-brands fa-tiktok text-2xl"></i>
        <i className="fa-brands fa-x-twitter text-2xl"></i>
        <i className="fa-brands fa-youtube text-2xl"></i>
        </div>
          </div>

        </div>
        </>
    )
}