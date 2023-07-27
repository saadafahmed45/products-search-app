import LoadSingleProduct from '@/components/loadSingleProduct';
import React from 'react';

const page = async ({ params }) => {
   const product = await LoadSingleProduct()

   return (
      <div>
         <h1>dynamic {product.title}</h1>
         <h1>{product.length}</h1>
      </div>
   );
};

export default page; 