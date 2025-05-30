
import { Popover } from "flowbite-react";


export function Menu() {
    return (

        <Popover className="z-10"
            trigger="hover" content={
                <section className="flex  rounded-xl shadow  bg-white ">
                    <div className="flex gap-20  items-start p-5">

                        <div className="grid grid-cols-1 gap-4 content-center" >
                            <h1 className="font-semibold text-sm">POPULAR</h1>
                            <a href="">Arm Warmers & Sleeves</a>
                            <a href="" className="">Balaclavas</a>
                            <a href="">Bandanas & Headties</a>
                            <a href="">Bridal Accessories</a>
                            <a href="">Earmuffs</a>
                        </div>
                        <div className="grid grid-cols-1 gap-4 content-center">
                            <h1 className="font-semibold text-sm">ON SALE</h1>
                            <a href="">Hand Muffs</a>
                            <a href="">Hats</a>
                            <a href="">Sunglasses</a>
                            <a href="">Suspenders</a>
                            <a href="">Scarves & Shawls</a>
                        </div>
                        <div className="grid grid-cols-1 gap-4 content-center">
                            <h1 className="font-semibold text-sm">EXPLORE</h1>
                            <a href="">Latest Arival</a>
                            <a href="">Our Sales</a>
                            <a href="">Best Sellers</a>
                            <a href="">Not Expensive</a>
                            <a href="">Expensive</a>
                        </div>
                    </div>
                    <div>
                        <div className="rounded-xl overflow-hidden w-auto h-auto relative">
                          <div className="rounded-xl overflow-hidden w-auto h-auto relative">
                          <img src="public\menu-banner.webp" alt="" className="w-fit rounded-xl transition duration-300 ease-in-out hover:scale-110" />
                            </div>  
                            <div className="absolute inset-0 items-center justify-evenly flex flex-col ">
                               <div className=" flex flex-col items-center bg-transparent"><h1 className="text-sm">TODAY ONLY </h1>
                               <h1 className="text-xl font-semi-bold">Deals Of The Day</h1>
                               </div> 
                                 <button className="border-2 rounded-full p-2 mx-10 mt-40">VIEW ALL PRODUCTS</button>
                            </div>
                            </div>

                    </div>
                </section>
            }>

            <a href="#" className="hover:color-red-500">
                Men
            </a>
        </Popover>

    );
}
