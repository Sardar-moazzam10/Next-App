import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className= "ourdiv bg-green-300">
        <br /><br />
    <h1>Our Impact</h1> <br />
      <p>Once people realize their power to make a difference in the lives of their families, communities and environment, there’s no going back—only forward. the Jane Goodall Institute helps one success lead to another as we build on the impact we’re making together: restoring critical habitat to save chimpanzees from extinction; improving health for women and education for girls; cultivating local livelihoods in harmony with nature; and helping young people become the informed generation of conservation leaders the world so urgently needs through our Roots & Shoots youth programs in nearly 100 countries.</p>
<br />
<Link href="/ourstory">Back</Link>
      
    </div>
  )
}

export default page
