// SearchPage.js
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function SearchPage() {
  const {id}=useParams();
const [value,setValue]=useState([]);
useEffect(() => {
  if (id) {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {setValue(res.data);})}
}, [id]); 



  return (
    <div>
<div>
      <img src={value.image} alt={value.title} className="w-20" />
      <h2>{value.title}</h2>
      <p>{value.description}</p>
      <p>{value.price}</p>
    </div>
    
    </div>
  );
}

export default SearchPage;
