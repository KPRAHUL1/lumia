import React from "react";
import visa from "../../assets/payment/visa.png";
import paypal from "../../assets/payment/paypal.png";
import whitelogo from "../../assets/logo/logo-white.svg"
import mastercard from "../../assets/payment/mastercard.png";
import paperplane from "../../assets/icons/sheet.png"
import googlepay from "../../assets/payment/google-pay.webp";
import StyledInput from "../../Footer-section/components/StyledInput";
import america from "../../assets/payment/american-express.png";

// const StyledInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => (
//   <input
//     ref={ref}
//     className={`border-b-2 border-gray-300 outline-none p-1 focus:border-gray-300 focus:ring-0 border-0 ${className}`}
//     {...props}
//   />
// ));
// StyledInput.displayName = "StyledInput";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white">
      {/* Email Subscription Section */}
      <div className="text-center mb-8 flex flex-col justify-center items-center mt-20 ">
        <h4 className="text-xl xl:text-2xl font-semibold mb-4">
          Do you want to be among the first to know about sale time?
        </h4>
        <div className="flex bg-white rounded-full  justify-between">
           <StyledInput 
                      type="email"
                      placeholder="Enter Your Email Here" className="rounded-full px-5 border-0 border-none text-start"
                    />
         <img src={paperplane} className=" w-16  text-3xl text-white bg-black px-5 p-3 rounded-full xl:hidden"></img>
          <button className="hidden xl:block bg-black text-white rounded-full p-5 text-xs font-semibold">
            SUBSCRIBE
          </button>
        </div>
      </div>
      
      {/* Footer Content */}
      <div className="xl:grid xl:grid-cols-4 xl:p-10 grid grid-cols-1 justify-items-center xl:pt-20 space-y-5">
        <div className="grid grid-cols-1 justify-items-center xl:content-stretch pt-5 xl:justify-items-start">
          <a href="#"><img src={whitelogo} alt="Logo" className="w-fit" /></a>
          <p className="hidden md:block">
            Worldwide fashion store with a wide collection of styles from over 100 international fashion brands.
          </p>
        </div>
        <div className="text-center flex flex-col xl:text-left space-y-2">
          <h4 className="font-bold text-xl">INFORMATION</h4>
          <a href="#">About us</a>
          <a href="#">Search</a>
          <a href="#">Contacts</a>
          <a href="#">Our News</a>
        </div>
      
        <div className="text-center xl:text-left space-y-2">
          <h4 className="font-bold text-xl">GET SHOPPING</h4>
          <p>Women</p>
          <p>Men</p>
          <p>Teenagers</p>
          <p>Accessories</p>
        </div>
      
        <div className="text-center flex flex-col xl:text-left space-y-2">
          <h4 className="font-bold text-xl">CONTACTS</h4>
          <p>Phone:&nbsp; &nbsp;+1-202-555-0158</p>
          <p>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; loremipsum@gmail.com</p>
          <p>Address:&nbsp; 165th St, Jamaica, NY 11</p>
        </div>
       
      </div>

      {/* Footer Icons */}
      <div className="grid grid-cols-1 text-center p-5 space-y-4 xl:flex xl:justify-evenly">
        <div className="xl:pt-5">
          <h4>© 2024, Lumia Theme</h4>
        </div>
        <div className="flex space-x-3 justify-center">
          <i className="fa-brands fa-instagram text-4xl"></i>
          <i className="fa-brands fa-facebook text-3xl"></i>
          <i className="fa-brands fa-tiktok text-3xl"></i>
          <i className="fa-brands fa-x-twitter text-3xl"></i>
          <i className="fa-brands fa-youtube text-3xl"></i>
        </div>
        <div className="flex space-x-3 justify-center">
          <img src={visa} alt="Visa" className="w-10 h-6" />
          <img src={paypal} alt="PayPal" className="w-10 h-6" />
          <img src={mastercard} alt="MasterCard" className="w-10 h-6" />
          <img src={googlepay} alt="Google Pay" className="w-10 h-6" />
          <img src={america} alt="American Express" className="w-10 h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
