import { useState,useEffect } from "react";
import axios from 'axios'
export default function Api() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/category')
      .then(res => setValue(res.data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);
  
  console.log(value);

  return (
    <>
      <div className="grid grid-cols-3 gap-10 p-20">
        {value.map((item, index) => (
          <div key={item.id} className="border-2 grid grid-row-3 justify-center">
            <img 
              src={`http://localhost:5000/${item.imagePath}`} 
              alt={item.name} 
              className="w-fit" 
            />
            <p className="text-xs">{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}
