 import CatalogDrawer from "../DraweNav/CatalogDrawer"
 import WishDrawer from "../DraweNav/WishDrawer"
 import CartDrawer from "../DraweNav/CartNav"
 export default function BottomNav2(){
    return(
        <>
          <nav className="sticky bottom-0 bg-white left-0 right-0 py-px lg:hidden block shadow-inner z-30 px-1">
       <div className="flex m-3 justify-between md:flex md:justify-center md:gap-10 justify-items-center ">
       <a className="grid grid-cols-1 justify-items-center items-center" href="/home">
            <img src="home-svgrepo-com.svg"  className="w-6 " alt="" />
            <p className="text-xs">Home</p>
        </a>
        <div className="grid grid-cols-1 justify-items-center items-center gap-1">
            <img src="public\svg-icons\filter-svgrepo-com.svg"  className="w-5 " alt="" />
            <p className="text-xs">Filter</p>
        </div>
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