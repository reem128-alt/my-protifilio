'use client'
import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

export default function About() {
    return (
        <section id='About'>
        <motion.div
         initial={{opacity:0,scale:0.5}} 
         animate={{opacity:1,scale:1}}
         transition={{duration:0.5}}
         className='w-full min-h-[400px] flex flex-col md:flex-row border-spacing-1 bg-gray-950 brightness-150 p-4 md:p-6' 
         style={{borderRadius:'0% 0% 28% 88% /45% 41% 44% 49%'}} 
         >
         <div className='w-full md:w-1/2 relative flex justify-center items-center min-h-[200px] md:min-h-[400px]'>
            <Image 
                src='/programmer1.png' 
                alt='programmer1' 
                width={300} 
                height={300} 
                className='absolute transform -translate-y-4 md:-translate-y-12'
                priority
            />
         </div>
       
         <div className='w-full md:w-1/2 mt-4 md:mt-10 text-white px-4 md:mr-12'>
            <h2 className="text-xl md:text-2xl mb-4">
                <span className='text-yellow-500 underline underline-offset-4'>Ab</span>out Me
            </h2>
            <div className='space-y-4 text-sm md:text-md'>
                <p>
                    Hello! I&apos;m Reem Hasan, a passionate Frontend Developer based in Tartus city. As a graduate in Information and Telecommunication Technology Engineering, I combine my technical expertise with creative problem-solving skills to build engaging web experiences.
                </p>
                <p>
                    I specialize in creating responsive and user-friendly web applications using modern technologies like React, Next.js, and Tailwind CSS. My goal is to craft clean, efficient, and maintainable code while delivering exceptional user experiences.
                </p>
                <p>
                    Currently seeking opportunities to contribute my skills to innovative projects and collaborate with forward-thinking teams.
                </p>
            </div>
            <div className='flex flex-wrap gap-3 mt-6 mb-8 md:mb-0'>
                <a href='#contacts'>
                    <button className='py-2 px-5 font-bold text-sm text-center text-slate-800 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full shadow-sm shadow-yellow-300 hover:animate-pulse'>
                        Contact Me
                    </button>
                </a>
                <a href='/Reem Hasan.pdf' target='_blank' rel='noopener noreferrer'>
                    <button className='py-2 px-5 font-bold text-sm text-center text-slate-800 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full shadow-sm shadow-yellow-300 hover:animate-pulse'>
                        Download CV
                    </button>
                </a>
            </div>
         </div>
        </motion.div>
        </section>
    )
}
