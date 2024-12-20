'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

interface Todo {

  id: number;
  title: string;
  price : number;
  description: string;
  image : string;

}
 

const page =  () => {

  const[data,setdata] =useState<Todo []>([])

  

useEffect( () =>{
const fetchdata= async () => {
  
  const response = await fetch("https://fakestoreapi.com/products");

  const parsedResponse: Todo[] = await response.json();

  console.log("todos >>>", parsedResponse);
  setdata (parsedResponse)
};

fetchdata();

  
  
 


}, []);

return (
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
    <h1 className="font-bold text-4xl text-center mb-8">Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((todo, index) => (
        <div key={index} className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
          <div className="relative w-full h-48 mb-4">
            <Image
              src={todo.image}
              alt={todo.title}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
          <h2 className="text-lg font-semibold mb-2">{todo.title}</h2>
          <p className="text-gray-700 mb-2">${todo.price}</p>
          <p className="text-gray-500 text-sm">{todo.description}</p>
        </div>
      ))}
    </div>
  </div>
);
};
export default page


