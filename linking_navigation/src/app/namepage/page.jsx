"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
const namepage = () => {
  const handlenavigation = (Name) => {
    route.push(Name);
  }
  const route = useRouter();//create an intence to perform navigaion
  return (
    <>
      <h1>This is a name page</h1><br />
      <p>Name:Muhamamd Moazzam <br />Age:20 <br />Goal: My Dream Is To Become A Full Stack Web Developer Inshallah!</p>
      <br />  <button onClick={() => handlenavigation(`/homepage`)}>Home</button>
    </>
  )
}

export default namepage;
