import React from 'react';



async function getData(id) {

   const res = await fetch(`https://dummyjson.com/products/${id}`);

   const data = await res.json();

   const result = data.products;

   return result;
}

const SingleProduct = async () => {
   const data = await getData()

   return (
      <div>
         <h3>this is dynamic route</h3>

         {/* <h2>{data.id}</h2>
         <h2>{data.length}</h2> */}
      </div>
   );
};

export default SingleProduct;