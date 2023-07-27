const loadProductsData = async () => {

   const res = await fetch(`https://dummyjson.com/products/`, { cache: 'force-cache' });

   const data = await res.json();

   const result = data.products;

   return result;
};

export default loadProductsData;