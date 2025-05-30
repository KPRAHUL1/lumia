
import { ReactMarques } from 'react-marques';
export default function Marquee(){
    return(
        <>
        <section className="bg-black p-3  text-white">
        <ReactMarques fade={true} pauseOnHover={true}>
            
            <a href="#">
            <h1>Start your free trial<span> and enjoy 1 months of Shopify for</span> $1 <span>/month on select plans.</span></h1> </a> 
       </ReactMarques>
         </section>
             
        </>
    )
}
