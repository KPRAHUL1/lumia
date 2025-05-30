
import { Tabs } from 'flowbite-react';
import {  Drawer } from "flowbite-react";
import { useState } from "react";
const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);

    return (
        <>
        <button onClick={() => setIsOpen(true)} className="border-0 border-none  bg-transparent"><img src="bars-sort-svgrepo-com.svg" alt="" className='w-6'/></button>
      <Drawer open={isOpen} onClose={handleClose} position="left" className=" w-full z-50 p-0 md:rounded-r-xl md:w-96">
        <Drawer.Header  title="" titleIcon={() => <></>}/>
        <Drawer.Items>
        <section className="bg-white h-full w-full flex flex-col p-5">
                    <div className="flex flex-col h-full">
                        <div className="flex-grow">
                            <Tabs>
                                <Tabs.Item title="Menu">
                                    <div className="grid grid-cols-1 justify-items-start  text-slate-600 gap-5 w-full h-80 overflow-auto touch-pan-y  p-4">
                                        <a href="/" className="block py-2">Home</a>
                                        <a href="#" className="block py-2">Setting</a>
                                        <a href="#" className="block py-2">Pages</a>
                                        <a href="#" className="block py-2">Catalog</a>
                                        <a href="#" className="block py-2">Women</a>
                                        <a href="#" className="block py-2">Men</a>
                                        <a href="#" className="block py-2">BuyLumia</a>
                                    </div>
                                </Tabs.Item>
                                <Tabs.Item title="Eng , USD $">
                                    <div className="w-full   p-4 h-80 overflow-auto touch-pan-y">
                                        <h1 className="text-lg font-semibold ">Language</h1>
                                        <table className="border-separate border-spacing-2 text-center text-slate-600 text-sm w-full ">
                                            <thead>
                                                <tr>
                                                    <td className="border border-slate-500">Eng</td>
                                                    <td className="border border-slate-500">الع</td>
                                                    <td className="border border-slate-500">繁體</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border border-slate-500">Ned</td>
                                                    <td className="border border-slate-500">Fra</td>
                                                    <td className="border border-slate-500">עבר</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-500">हिन</td>
                                                    <td className="border border-slate-500">Esp</td>
                                                    <td className="border border-slate-500">Бъл</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-slate-500">Češ</td>
                                                    <td className="border border-slate-500">Nor</td>
                                                    <td className="border border-slate-500">Deu</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <form>
                                            <h1 className="text-lg font-semibold ">Country/region</h1>
                                            <select name="" id="" className="w-full border border-slate-300 rounded p-2">
                                                <option value="">Select a country</option>
                                                {/* Add options here */}
                                            </select>
                                        </form>
                                    </div>
                                </Tabs.Item>
                            </Tabs>
                        </div>
                    </div>
                </section>
                <div className="flex space-x-4 justify-center text-white bg-blue-600 p-4 md:w-96 fixed right-0 left-0  bottom-0 ">
                            <i className="fa-brands fa-instagram text-2xl"></i>
                            <i className="fa-brands fa-facebook text-2xl"></i>
                            <i className="fa-brands fa-tiktok text-2xl"></i>
                            <i className="fa-brands fa-twitter text-2xl"></i>
                            <i className="fa-brands fa-youtube text-2xl"></i>
                        </div>
        </Drawer.Items>
      </Drawer>
        </>
    );
};

export default App;
