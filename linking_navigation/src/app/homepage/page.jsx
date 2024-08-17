"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
const homepage = () => {
  const handlenavigation=(Name)=>{
    router.push(Name);
  }
  const router=useRouter();//create an intence to perform navigaion
  return (
    <>
     <h1>This is a Home Page</h1> <br />
  <button onClick={()=>handlenavigation(`/namepage`)}>Name</button>
    </>
  )
}

export default homepage;
