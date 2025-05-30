 // Ensure the path is correct

import Cardsearch from "./searchcarosel";
import React from 'react';
import { Carousel } from "flowbite-react";

export default function SearchData() {
    const searchData = [
        { summerimg: 'summer1.1.webp', title: 'Loose Padded Jacket' },
        { summerimg: 'summer1.2.webp', title: 'Loose Padded Jacket' },
        { summerimg: 'summer1.3.webp', title: 'Loose Padded Jacket' },
        { summerimg: 'summer1.4.webp', title: 'Loose Padded Jacket' },
        { summerimg: 'summer1.5.webp', title: 'Loose Padded Jacket' },
        { summerimg: 'summer2.1.webp', title: 'Loose Padded Jacket' },
        { summerimg: 'summer2.2.webp', title: 'Loose Padded Jacket' },
    ];

    return (
        <>
        <div className="grid grid-cols-2  ">
           <Carousel className="">
             {searchData.map((search, index) => (
                 <Cardsearch
                     key={index}
                     summerimg={search.summerimg}
                     title={search.title}
                 />
             ))} 
           </Carousel>
           <Carousel indicators={false} className="">
             {searchData.map((search, index) => (
                 <Cardsearch
                     key={index}
                     summerimg={search.summerimg}
                     title={search.title}
                 />
             ))} 
           </Carousel>
        </div>
        </>
    );
}
