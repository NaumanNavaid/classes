"use client";
import React, {useEffect, useState } from 'react'

const page = () => {
  const[loading ,setloading] = useState (false)
  const[refetchapi , setrefetchapi] =useState (false)
useEffect(() =>{

    setloading(true);
    setTimeout (() =>{
    console.log("this runs before component loads ");
    setloading(false);

}, 3000)
},[refetchapi])



  return (
   




  <div>{loading ? ("Loading ....." ):
      <div className='flex-col flex gap-3 items-start justify-start'><p>This is data which will be fetched after loading</p>
       <input type="text " placeholder='Write something' />
     <button 
     className='p-2 border border-black'
     onClick={() => setrefetchapi(true)}>Post Data</button></div>}</div>

 
  )
}

export default page 
