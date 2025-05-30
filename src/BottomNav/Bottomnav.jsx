import CartDrawer from "../DraweNav/CartNav";
import CatalogDrawer from "../DraweNav/CatalogDrawer";
import WishDrawer from "../DraweNav/WishDrawer";


export default function Bottomnav(){
    return(
        <>
       
       <nav className="sticky bottom-0 bg-white left-0 right-0 py-px lg:hidden block shadow-inner z-40 px-1">
       <div className="flex m-3 justify-between md:flex md:justify-center md:gap-10  ">
       <a className="grid grid-cols-1 justify-items-center items-center" href="/home">
            <img src="home-svgrepo-com.svg"  className="w-6 " alt="" />
            <p className="text-xs">Home</p>
        </a>
      
            <CatalogDrawer/>
        
        <a className="grid grid-cols-1 justify-items-center items-center" href="/account">
            <img src="user-svgrepo-com.svg" alt=""  className="w-5"/>
            <p className="text-xs">Account</p>
        </a>
        <WishDrawer/>
       <CartDrawer/>
       </div>
       </nav>
      
        
      
        </>
    )
}