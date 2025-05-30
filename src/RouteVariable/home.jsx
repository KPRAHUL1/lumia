// HomePage.js
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [value,setValue]=useState([]);
console.log(value);
  axios.get('https://fakestoreapi.com/products')
       .then(res=>setValue(res.data));
 
  return (
    <div>
      <div className="grid grid-cols-3 gap-10 p-20" > 
            {value.map((item,index)=>(
                <div key={index.id} className="border-2 grid grid-row-3 justify-center"> 
                <img src={item.image} alt="" className="w-fit"/>
                 <p className="text-xs">{item.description}</p>
        <p>{item.price}</p><a href={`/search/${item.id}`}>view details</a>
        
        </div>
       
            ))
        }</div>
    </div>
  );
}

export default HomePage;
