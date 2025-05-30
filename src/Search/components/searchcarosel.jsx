
"use client";



export default function Cardsearch(props) {
    const{summerimg,title}=props
  return (
    <>
   
     <div className="grid grid-cols-1 justify-items-center gap-3 rounded-xl border-2 shadow h-54 w-56">
      <img src={summerimg} alt="" className=" rounded-xl" />
      <p className="text-center text-sm">{title}</p>
    </div>
   
    </>
   
  );
}
