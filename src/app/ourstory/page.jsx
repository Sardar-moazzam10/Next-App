"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
const Page = () => {
  const handleroute=(Name)=>{
    Route.push(Name);
  }

 const Route= useRouter();
//  console.log(Route);
  return (
    <div className= "ourdiv bg-slate-600">
    <br /><br /><br /><br />
    <h1>Our Story is a nested Route</h1> <br /> 
      <p>Dr. Jane Goodall went into the forest to study the remarkable lives of chimpanzees—and she came out of the forest to save them. When she discovered that the survival of their species was threatened by habitat destruction and illegal trafficking, she developed a breakthrough approach to species conservation that improves the lives of people, animals and the environment by honoring their connectedness to each other. In 1977, she founded the Jane Goodall Institute to ensure that her vision and life’s work continue to mobilize the collective power of individual action to save the natural world we all share. Your support helps us advance Jane’s vision and work around the world as a force of compassion for all living things.</p>
      <br />
       <button onClick={()=>handleroute("/ourstory/ourimpact")}>Our Impact</button><br />
       <button  onClick={()=>handleroute("/ourstory/ourwork")}>Our Work</button>  
    </div>

  )
}

export default Page;
