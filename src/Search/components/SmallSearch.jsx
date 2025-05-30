import { Dropdown } from "flowbite-react"
import StyledInput from "../../Footer-section/components/StyledInput"
export default function SearchSmall(){
    return(
        <>
        <Dropdown label="" className=" shadow-none" dismissOnClick={false} size="5xl" renderTrigger={() => <img src="loupe-search-svgrepo-com.svg" alt="" className="w-5"/>}>
     <div className="flex  ">
     <StyledInput type="text" className="border-none outline-none border-0 mx-2"/>
     <img src="loupe-search-svgrepo-com.svg" alt="" className="w-5"/>
        </div>  

        
        </Dropdown>
        </>
    )
}