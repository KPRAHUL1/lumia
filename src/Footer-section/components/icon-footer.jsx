export default function Icon_footer(){
    return(
        <>
        <div className="gird grid-cols-1 text-center p-5 space-y-4 xl:flex xl:justify-evenly">
       <div className="text-white xl:pt-5">
        <h4 className="">© 2024, Lumia Theme</h4>
        </div> 
        <div className=" flex space-x-3 justify-center text-white">
        <i className="fa-brands fa-instagram text-4xl"></i>
        <i className="fa-brands fa-facebook text-3xl"></i>
        <i className="fa-brands fa-tiktok text-3xl"></i>
        <i className="fa-brands fa-x-twitter text-3xl"></i>
        <i className="fa-brands fa-youtube text-3xl"></i>
        </div>
        <div className=" flex space-x-3 justify-center">
        <img src="visa.png" alt="" className="w-10 h-6 "/>
        <img src="paypal.png" alt="" className="w-10 h-6" />
        <img src="mastercard.png" alt=""className="w-10 h-6"/>
        <img src="google-pay.webp" alt="" className="w-10 h-6"/>
        <img src="american-express.png" alt="" className="w-10 h-6"/>

        </div>
        </div>
   
        </>
    )
}