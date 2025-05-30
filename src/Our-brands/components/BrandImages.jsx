export default function Brand_Images(props){
  const {img }=props;
    return(
        <>
       
        <div className="m-4 overflow-hidden rounded-full">
       <a href=""><img src={img}  className="rounded-full lg:w-32 lg:h-32 w-32 h-32 xl:h-40 xl:w-40 md:w-40 md:h-40 transition duration-300 ease-in-out hover:scale-110"/></a> 
      </div>
      
       
     
        </>
    )
}