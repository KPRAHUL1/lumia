import Icons from "./Icons"

export default function Icondata(){
    const icons=[
        {
            image:"delivery-truck-svgrepo-com.svg",
            title:"FREE SHIPPING",
            description:"When you spend $100+",
        },
        {
            image:"operator-svgrepo-com.svg",
            title:"SUPPORT 24/7",
            description:"Ready to help our clients",
        },
        {
            image:"shield-antivirus-svgrepo-com.svg",
            title:"SECURED PAYMENTS",
            description:" We are officially registered",
        },
    ]
return(
    <>
    <div className=" flex flex-row flex-wrap gap-3 space-y-3 justify-center place-items-center items-center"> 
          {icons.map((icon,index) =>(   
      <Icons key={index} image={icon.image} title={icon.title} description={icon.description}/>
     ))}
     </div>
  
              
      
    </>
)

}