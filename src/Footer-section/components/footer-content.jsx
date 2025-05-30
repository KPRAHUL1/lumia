import whitelogo from "../../assets/logo/logo-white.svg"
export default function Footer_content(){
    return(
        <>
        <div className="xl:grid xl:grid-cols-4 xl:p-10 grid  grid-cols-1 justify-items-center xl:pt-20 space-y-5">

          <div className="grid grid-cols-1 justify-items-center xl:content-strech pt-5 xl:justify-items-start">
         <a href=""><img src={whitelogo} alt="" className=" w-fit" /></a> 
          <p className="hidden md:block text-white  ">Worldwide fashion store with wide  collection of styles with over 100 international fashion brands.</p>
          </div>  
            <div className="text-white text-center xl:start grid grid-cols-1 space-y-2 xl:justify-items-start">
              <h4 className="font-bold text-xl ">INFORMATION</h4>
             <a href=""> <p>About us</p></a>
             <a href=""><p>Search</p></a> 
             <a href=""><p>Contacts</p></a>  
              <a href=""><p>Our News</p></a> 
            </div>
            <div className="text-white text-center   grid grid-cols-1 space-y-2 xl:justify-items-start">
             <h3 className="font-bold text-xl">GET SHOPPING</h3>
             <p>Women</p>
             <p>men</p>
             <p>Teenagers</p>
             <p>Accessories</p>
            </div>
            <div className="text-white text-center  grid grid-cols-1 space-y-2 xl:justify-items-start">
              <h3 className="font-bold text-xl">CONTACTS</h3>
              <p>Phone:	+1-202-555-0158</p>
             <p> Email:	loremipsum@gmail.com</p>
              <p>Address:	165th St, Jamaica, NY 11</p>
            </div>
        </div>
        </>
    )
}