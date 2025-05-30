import { Searchsection } from "../Search/search.jsx";
import App from "./components/Drawer";
import Modal from "../auth/modal.jsx";
import Wishlist from "../Wishlist/Wishlist.jsx";
import Orderlist from "../Order/Order";
import { Message } from "../Message/Message";
import SearchSmall from "../Search/components/SmallSearch.jsx";
import { BuyLumia } from "../PopoverMenu/Popover";
import { Menu } from "../PopoverMenu/MenPopover";
import { WomMen } from "../PopoverMenu/WomenPopover.jsx";
import { Catalog } from "../NavCatalog/Catalog.jsx";
import { Pages } from "../PagesNav/PagesNav.jsx";
import { HomeNav } from "../HomeNav/HomeNav.jsx";
import logo from "../assets/logo/logo.svg";
import equalizer from "../assets/icons/icons8-slider-48.png";
import message from "../assets/icons/chat.png";

import phone from "../assets/icons/telephone.png";


export default function Nav() {
  return (
    <nav className="top-0 z-40 flex items-center justify-between w-full p-4 bg-white shadow-md lg:justify-evenly ">
      {/* Logo */}
      <div className="px-4">
        <a href="/">
          <img src={logo} alt="Logo" className="w-20 lg:w-full" />
        </a>
      </div>

      {/* Mobile Icons */}
      <div className="grid items-center grid-cols-4 gap-4 lg:hidden">
        <img src={message} alt="Message" className="w-5" />
        <img src={phone} alt="Phone" className="w-5" />
        <SearchSmall />
          <App />
       
      </div>

      {/* Navigation Links */}
      <ul className="items-center hidden font-normal text-gray-700 lg:flex lg:gap-6 xl:gap-8 text-md">
        <HomeNav />
        <a href="/settings" className="hover:text-blue-600">Settings</a>
        <Pages />
        <Catalog />
        <WomMen />
        <Menu />
        <BuyLumia />
      </ul>

      {/* Icons */}
      <div className="items-center hidden gap-4 lg:flex">

        <img src={equalizer} alt="Settings" className="w-5" />
        <Message />
        <Searchsection />
        <Modal />
        <Wishlist />
        <Orderlist />

      </div>
    </nav>
  );
}
