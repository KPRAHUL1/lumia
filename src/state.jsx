import { useState } from "react"
import { CButton } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
export default function StateVariable(){

    const [value, setValue] = useState();
    const[display , setDisplay]=useState([])
    

    const Add =() =>{
        // setDisplay([...display,value ])
        // setValue([]) 
       
        if(setValue){
        
          setDisplay([...display,value])
          setValue('')
          
        }
        else{
              setDisplay([...display]);
        }
    }

    const Delete =(event)=>{
      event.target.parentElement.remove();
    }
    const Inputdata = (event) => {
      setValue(event.target.value);
    };
  
const Check =() =>{
  if(Check){

  }
}
  
    return (
    <>
    <h1 className="text-center text-xl font-semibold mt-20">TODO LIST</h1>
      <div className="w-full grid grid-col-1 justify-center  mt-20 gap-10 ">
       <div className="flex gap-5">
        <input className="rounded-xl " variant="outline"  type="text" value={value} onChange={Inputdata}/>
       <CButton onClick={Add} className="border-2 rounded-xl p-3" color="success" variant="outline">Add </CButton></div> 
       <div className="grid grid-cols-1 justify-center items-center">
        
        <ul className="space-y-3">
         
          {display.map((item,index) =>(
             <li>
         <div className=" grid grid-cols-3 border-2 px-4 py-3 items-center rounded-full ">
          <input type="checkbox" onClick={Check} className=""/>
         <p className="flex text-xl font-semibold" key={index}>{item}</p >
         <CButton onClick={Delete}color="danger"variant="outline" className="border-2 rounded-xl ">Delete</CButton></div> 
         </li>
       ))}   
          
        </ul>
       
        </div> 
      </div>

        </>
    )
}