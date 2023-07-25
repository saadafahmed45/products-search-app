"use client"
import SingleProducts from '@/components/SingleProducts';
import React, { useEffect, useState } from 'react';


const Products = () => {
   // data fetch start
   const [product, setProduct] = useState([]);

   useEffect(() => {
      fetch("https://dummyjson.com/products")
         .then(response => response.json())
         .then(data => setProduct(data.products));
   }, []);
   // data fetch end

   // data filtering start
   const [quary, setQuary] = useState('')

   console.log(product.filter(pr => pr.title.toLowerCase().includes(quary)));
   // console.log(quary);


   return (
      <div className="h-screen w-full bg-slate-800 overflow-auto ">
         {/* search bar  */}
         <div className="text-center mt-[50px]">
            <input type="text" placeholder='search you product'
               className='w-[40%] md:w-[20%] h-[35px] p-2 rounded-sm'
               onChange={e => setQuary(e.target.value)}
            />
         </div>

         {/* all products section */}

         <div className=" text-white p-8 flex flex-wrap  items-center justify-center">

            {/* <h1>product: {product.length}</h1> */}
            {
               product.filter(pr => pr.title.toLowerCase().includes(quary)).map(product => (<SingleProducts product={product} key={product.id} />))
            }
         </div>
      </div>
   );
};

export default Products;