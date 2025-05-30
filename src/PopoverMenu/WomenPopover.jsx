import { Popover } from "flowbite-react";

export function WomMen() {
    return (
        <Popover 
            trigger="hover" 
            content={
                <section className="flex flex-row lg:flex-row rounded-xl shadow-lg bg-white ">
                    <div className="flex-1 lg:pr-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
                            <div className="grid grid-cols-1 gap-2">
                                <h1 className="font-semibold text-sm">CATEGORIES</h1>
                                <a href="">Activewear</a> 
                                <a href="">Cargos</a>
                                <a href="">Coats & Jackets</a>
                                <a href="">Dresses</a> 
                                <a href="">One-Pieces</a> 
                                <a href="">Outerwear</a> 
                                <a href="">Pants</a> 
                                <a href="">Shirts & Tops</a> 
                                <a href="">Sleepwear & Loungewear</a> 
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <h1 className="font-semibold text-sm">EXPLORE</h1>
                                <a href="">Latest Arrivals</a> 
                                <a href="">Our Sales</a> 
                                <a href="">Bestsellers</a>
                                <a href="">Not Expensive</a> 
                                <a href="">Expensive</a> 
                                <a href="">Exclusive</a>  
                                <a href="">Season Winter</a>  
                                <a href="">Season Autumn</a>  
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="overflow-hidden grid grid-cols-1 lg:grid-cols-2  p-4">
                            <div className="relative rounded-xl overflow-hidden">
                                <div className="w-fit overflow-hidden rounded-xl">
                                    <img 
                                        src="/Menu bar/menu-banner-06.webp" 
                                        alt="Summer Sale" 
                                        className="w-fit h-fit object-cover rounded-xl transition duration-300 ease-in-out hover:scale-110"
                                    />                      
                                              <div className=" text-center flex flex-col items-center justify-center p-4 text-white  rounded-xl">
                                    <h1 className="text-xl font-bold">SELECTED SHIRTs</h1>
                                    <h2 className="text-lg">Summer Sale</h2>
                                </div>
                                </div>  

                            </div>
                            <div className="relative rounded-xl ">
                           
                                <div className="w-full h-48 overflow-hidden rounded-xl">
                                <div className="absolute w-fit inset-0 flex flex-col items-center justify-center p-4 text-white  rounded-xl">
                                    <h1 className="text-xl font-bold">DISCOUNT</h1>
                                    <h2 className="text-lg">Deal Of The Day</h2>
                                </div>
                                    <img 
                                        src="/Menu bar/menu-banner-07.webp" 
                                        alt="Deal Of The Day" 
                                        className="w-fit h-fit object-cover rounded-xl transition duration-300 ease-in-out hover:scale-110"
                                    />
                                </div>  
                             
                            </div>
                        </div>
                    </div>
                </section>
            }
        >
            <a href="#" className="hover:text-red-500">
                Women
            </a>
        </Popover>
    );
}
