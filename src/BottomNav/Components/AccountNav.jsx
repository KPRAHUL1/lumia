 import StyledInput from "../../Footer-section/components/StyledInput"
import Footer from "../../Footer-section/footer"
import Nav from "../../nav-bor/header"
import Bottomnav from "../Bottomnav"
 export default function AccountNav(){
    return(
        <><section>
            <Nav/>
  <div className="space-y-3 text-center">
              <h1 className="text-xl font-bold mt-5">Sign In to Our Store</h1>
              <p className="text-xs">
                Login to our store and start shopping for your products
              </p>
            </div>
            <div className="md:grid grid-cols-2 mt-10 items-center">
            <div className="space-y-4 m-5">
    <div className=" flex flex-col">
      <label htmlFor="email" className="font-semibold">Email</label>
      <div className="flex items-center " >
        <StyledInput
          id="email"
          type="email"
          className=" flex-1 p-1 border-b-2"
          placeholder="Enter your email here"
        />
        <i className="fa-regular fa-eye cursor-pointer ml-2"></i>
      </div>
    </div>
    <div className="relative flex flex-col">
      <label htmlFor="password" className="font-semibold">Password</label>
      <div className="flex items-center  ">
        <StyledInput
          id="password"
          type="password"
          className="border-b-2 flex-1 p-1"
          placeholder="* * * * *"
        />
        <i className="fa-regular fa-eye cursor-pointer ml-2"></i>
      </div>
    </div>
    <button
      type="button"
      className="bg-blue-500 text-white py-2 px-4 rounded mt-3"
    >
      SIGN IN
    </button>
    <div className="text-center mt-4">
      <a href="#" className="text-blue-500">Forgot Password?</a>
      <p className="mt-2 text-sm">
        Don't have an account?{" "}
        <a href="#" className="text-blue-500">Register Here</a>
      </p>
    </div>
  </div>
  <div className="w-fit m-5">
    <img src="account-01.webp" alt="" />
  </div>
            </div>
       
<Footer/>
  <Bottomnav/>
        </section>
        
        </>
    )
}