import './App.css'
// import HomePage from './RouteVariable/home'
import Carts from './carts-section/carts'
import Marquee from './Marquee/marquee'
import Shop_section from './shop-info/shop-section'
import Our_Brands from './Our-brands/our-brands'
import Image_collection from './Shop-collection/image-collection'
import Shoessection from './Ourlook/shoes';
import People from './PeoplesSay/people';
import Bottomnav from './BottomNav/Bottomnav'
import MotionBanner from './components/MotionBanner/banner'
import LookbookSection from './components/LookBook/Lookbook'
import ProductShowcase from './components/Product/ProductShowcase'
import PurchaseNotifications from './components/purchaseNotification/PurchaseNotification'
// import StateVariable from './state'

function App() {
  return (
    <>
  <div className="bg-gray-50">
     {/* <StateVariable/> */}
   {/* <Slider/>   */}
   <MotionBanner/>
     <Shop_section/>
    <Marquee/>
    <Carts/>
    <ProductShowcase/>
    <LookbookSection/>
    {/* <ProductShowcase1/> */}
    {/* <ShoppingCart/>  */}
    <Shoessection/>
    <Our_Brands/>
    <People/>
    <Image_collection/>
    <PurchaseNotifications/>
   <Bottomnav/>
   {/* <Api/> */}
   {/* <HomePage/> */}
    </div> 
    </> 
  )
}
export default App
