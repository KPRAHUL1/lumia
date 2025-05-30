export default function Icons(props){
const{image,title,description}=props
    return(
        <>
        <div className=" grid grid-row-2  md:grid-cols-2 items-center justify-center text-center  ">
          
             <img src={image} alt="" className="w-10 object-cover grid-flow-col-dense "/>
         
        <div className="flex flex-col md:items-start  items-center"> 
            <h4 className="font-medium text-sm flex" >{title}</h4>
           <p className="text-xs">{description}</p></div>
         </div>
      
       
        </>
    )
    
    }