import React from 'react';

const Navbar = () => {
   return (
      <div>
         <nav className="navbar h-[50px] bg-slate-400 p-3  flex justify-around items-center">
            <h2 className="text-3xl ">Shopper</h2>
            <ul className="flex gap-8 text-xl font-semibold text-slate-900">
               <li><a href="/">Home</a></li>
               <li><a href="/products">Product</a></li>
               <li><a href="/">Service</a></li>
               <li><a href="/">contact</a></li>
            </ul>
         </nav>
      </div>
   );
};

export default Navbar;