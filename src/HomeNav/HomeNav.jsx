
import { Popover } from "flowbite-react";

export function HomeNav() {
    const HomeNavs=[
        {
            heading:["Fashion1" ,"Fashion 2 " ,"Fashion 3 " ,"Fashion 4" ,"Gaming GadgetsDark" ,"Natural Cosmetics" ,"Carparts" ,"Sport Shoes" ,"Toys" ,"Bags" ,"Electronics" ,"Pets" ,"NutritionDark" ,"Camping & Fishing" ,"T-Shirts" ,"MakeUpNew" ,"Sweets StoreNew","RTL"]
        },
    ]
  return (
   
      <Popover
        trigger="hover" content={ <div className="w-96 p-5 rounded-xl">
          <header>
            <h1 className="font-semibold">STORE PAGES</h1>
          </header>
          {HomeNavs.map((item,index)=>(
          <div className="flex flex-col gap-5 mt-10 overflow-auto touch-pan-y h-96" key={index}>
           
                { item.heading.map((head,heads)=>(
               <div key={heads} className="flex flex-row justify-between mx-3"> <a href="">{head}</a><span className="font-semibold">{">"}</span></div> 
                ))
                }
        
           </div>
            ))
            }
        
          
            </div>}>
            
        <a href="/" className="hover:color-red">
         Home
        </a>
      </Popover>
    
  );
}
