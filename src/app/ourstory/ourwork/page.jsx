import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className= "ourdiv  bg-green-300">
    <br /><br /><br /><br />
      <h1>Our Work</h1>
      <br />
      <p>
        She blazed the trail. <br />
      The next steps are up to us. <br />
      In 1900, an estimated 1 million chimpanzees lived in the wild. <br />
     Today, there are as few as 340,000. <br />
    We’re on a mission to save chimpanzees from extinction. Together, we can turn these numbers around.</p>
   <br />
    <Link href="/ourstory">Back</Link>
    </div>
  )
}

export default page