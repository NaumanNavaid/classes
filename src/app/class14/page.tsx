'use client'
import React, { useEffect, useState } from 'react'

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const page =  () => {

  const[data,setdata] =useState<Todo []>([])

  

useEffect( () =>{
const fetchdata= async () => {
  
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");

  const parsedResponse: Todo[] = await response.json();

  console.log("todos >>>", parsedResponse);
  setdata (parsedResponse)
};

fetchdata();

  
  
 


}, []);

  return (
    <div className='mx-20'>
      <h1 className="font-bold text-4xl text-center mt-6 ">Todo</h1>
      <div className=' grid grid-cols-4 gap-3 mt-20'>
      {data.map((todo, index) => (
        <div key={index} className="flex flex-col gap-5 border border-black  rounded p-2">
          <p>userId: {todo.userId}</p>
          <p>id: {todo.id}</p>
          <p>title: {todo.title}</p>
          <p>completed: {`${todo.completed}`}</p>
        </div>

      ))}
        </div>
        </div>     

  )
}

export default page


