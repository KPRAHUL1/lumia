"use client";
import equlizzer from '../assets/icons/icons8-slider-48.png'
import { Dropdown } from "flowbite-react";

export function Equlizzer() {
  return (
    <Dropdown label="" className="rounded-xl  "dismissOnClick={false} size="2xl" renderTrigger={() => <img src={equlizzer} alt="" className="w-5 rotate-90"/>}>
   
        <div className=" space-y-5">
          <div className="w-full h-80 overflow-auto p-4">
                                        <h1 className="text-lg font-semibold mb-2">Language</h1>
                                        <table className="border-separate border-spacing-2 text-center text-slate-600 text-sm w-full mb-4">
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
                                            <h1 className="text-lg font-semibold mb-2">Country/region</h1>
                                            <select name="" id="" className="w-full border border-slate-300 rounded p-2 ">
                                                <option className="hidden" value="">Select a country</option>
                                               <option value="United State (USD $)">United State (USD $)</option>
                                            </select>
                                        </form>
                                        <div className="grid grid-cols-1 gap-2 mx-5 mt-5">
                                        <button className=" rounded-full p-2 border-2"> +1-202-555-0158</button>
                                        <button className=" rounded-full p-2 border-2">MAIL US</button>
                                    </div>
                                    </div>
                                    
        </div>
   
    </Dropdown>
  );
}
