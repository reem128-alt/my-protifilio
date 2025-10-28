'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FiMenu } from "react-icons/fi";




export default function Header() {
  return (
    <div className='w-full h-[400px] relative '>
   
    <nav className='absolute w-full flex flex-row justify-between text-white p-3 font-serif'>
      <Link className='text-xl hover:text-yellow-400' href='/'>My portfolio</Link>
      <div className='flex flex-row gap-3 max-sm:hidden'>
      <Link className='hover:text-yellow-400' href='#About'>About</Link>
      <Link className='hover:text-yellow-400' href='#Service'>Service</Link>
      <Link  className='hover:text-yellow-400' href='#Projects'>Projects</Link>
      <Link className='hover:text-yellow-400'  href='#contacts'>Contacts</Link>
      </div>
      <div className="dropdown dropdown-end sm:hidden">
     <div tabIndex={0} ><FiMenu size={23} /></div>
    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow first-line:bg-transparent brightness-100  border border-slate-100 rounded-box w-32">
    <li className='hover:bg-slate-400 text-white rounded-lg'><Link href='#About'>About</Link></li>
    <li className='hover:bg-slate-400 text-white rounded-lg'><Link href='#Service'>Service</Link></li>
    <li className='hover:bg-slate-400 text-white rounded-lg'><Link href='#Projects'>Projects</Link></li>
    <li className='hover:bg-slate-400 text-white rounded-lg'>  <Link href='#contacts'>Contacts</Link></li>
  </ul>
</div>
      
    </nav> 
    <section className='absolute  left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-white  h-[50%] '>
    <p className='min-md:font-extrabold text-2xl text-center mt-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-200 max-sm:ml-7 text-wrap'>
    <TypeAnimation
      sequence={[
        'I AM',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'REEM HASAN',
        1000,
        'FRONT END DEVELOPER',
        1000,
      ]}
      wrapper="span"
      speed={40}
      repeat={Infinity}
    />
  </p>
    <p className='text-center pt-3 text-2xl max-sm:ml-[12%] text-wrap '>
        I AM AN IT ENGINNER && FRONTEND DEVELOPER</p>
      <button className='py-1 px-7 text-sm text-center text-slate-800 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full ml-[45%] mt-6 shadow-sm shadow-yellow-300 hover:animate-bounce max-sm:ml-[22%]'>My Works</button>
    </section>
    </div>
  )
}

