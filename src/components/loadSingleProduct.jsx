const LoadSingleProduct = async (id) => {
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

   const data = await res.json();

   const result = data;

   return result;


};

export default LoadSingleProduct;