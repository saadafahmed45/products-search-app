import loadProductsData from '@/components/loadProductsData';
import Link from 'next/link';
import React from 'react';

const page = async () => {
   const data = await loadProductsData();

   return (
      <div>
         <div className=" text-white p-8 flex flex-wrap  items-center justify-center">

            {
               data.map(({ id, title, thumbnail, price }) => (
                  <div key={id} className="box bg-slate-600 p-4 m-3 w-[300px] h-[310px] rounded-md cursor-pointer">
                     <div>
                        <img className="h-[200px] w-[300px] rounded-sm" src={thumbnail} alt="thumbnail" />
                     </div>
                     <div className="mt-2 p-1">
                        <h2>{title}</h2>
                        <h2>price: ${price}</h2>
                     </div>
                     <div className='text-right'>

                        <Link href={`/about/${id}`}

                           className='text-right text-cyan-500 text-sm'>See More..</Link>
                     </div>
                  </div>
               ))
            }
         </div>


      </div>
   );
};

export default page;