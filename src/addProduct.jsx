// import React from 'react'
import { useEffect, useState } from 'react';

function AddProduct() {
  const [products, setProducts] = useState([]); 
    // alert('hellooooo')
    useEffect(() => {
      fetch('https://dummyjson.com/products')
        .then((result) => result.json())
        .then((data) => {
          // console.log(data.products); 
          setProducts(data.products); // Store the products in state
        });
    }, []);
  return (
    <div>
        
      <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Id
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Title
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Brand
                      </th>
                  </tr>
              </thead>
              <tbody className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                {products.map((product) => (
                    <tr key={product.id}>
                      <td className='px-6 py-3'>{product.id}</td>
                      <td className='px-6 py-3'>{product.title}</td>
                      <td className='px-6 py-3'>{product.price}</td>
                      <td className='px-6 py-3'>{product.brand}</td>
                    </tr>
                  ))}
                </tbody>
          </table>
      </div>

    </div>
  )
}

export default AddProduct