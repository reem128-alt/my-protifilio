'use client'
import Image from 'next/image'
import React ,{useState,useRef} from 'react'
import { FaCode,FaEye  } from "react-icons/fa";
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import {motion,useInView} from 'framer-motion'




const images=[{id:1,src:'/music.jpg',href:'https://music-app-reem-hasans-projects-9ab23a8b.vercel.app/',url:'https://github.com/Reem-del/musicApp',
  active:'one'},{id:2,src:'/quiz.jpg',href:'https://quiz-eta-five.vercel.app/',active:'two',url:'https://github.com/Reem-del/Quiz'},
{id:3,src:'/ecommerce.jpg',href:'https://shop-reem-del-reem-hasans-projects-9ab23a8b.vercel.app/',active:'three',url:'https://github.com/Reem-del/e-commerce'},
{id:4,src:'/blog.jpg',href:'https://blog-seven-sigma-81.vercel.app/',active:'four',url:'https://github.com/reem128-alt/blog'},
{id:5,src:'/movie.jpg',href:'https://movie-dash-front.vercel.app/',active:'five',url:'https://github.com/reem128-alt/movie-dash-front'},
{id:5,src:'/health.jpg',href:'https://health-care-flax-rho.vercel.app/',active:'six',url:'https://github.com/reem128-alt/health-care'},
{id:6,src:'/poll.jpg',href:'https://polling-tau.vercel.app/',active:'seven',url:'https://github.com/reem128-alt/polling'}
]

export default function ShowProject() {
  const [show,setShow]=useState('')
  const ref=useRef(null)
  const isInView=useInView(ref,{once:true})
  const cardVariants={
    initial:{opacity:0},
    animate:{opacity:1},
  };
  
  return (
     <div className='h-[400px] w-full text-slate-200  hover:text-yellow-200 max-[430px]:h-[700px]'>
      <div className='flex flex-row w-full gap-2 ml-7 p-4 '>
        <h1 className='font-semibold text-lg '>See All Projects</h1>
        <FaArrowRight size={20}  className='mt-[6px] hover:animate-bounce'/>
        </div>
       <div className="flex justify-center items-center w-full">
        <ul ref={ref} className='grid  grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 w-full h-64 max-[350px]:gap-6 '>
          {images.map((img,index)=>
            (<motion.li
            key={index}
            variants={cardVariants}
            initial='initial'
            animate={isInView ? 'animate' : ' initial'}
            transition={{duration :0.3 ,delay:index*0.3}}
            >

           <div key={img.id} className='relative w-[200px] h-full shadow-sm shadow-gray-300 max-[430px]:h-32' onMouseOver={()=>setShow(img.active)} onMouseLeave={()=>setShow('')}>
              <Image src={img.src} alt='music' fill className='rounded-md shadow-md shadow-gray-600 hover:brightness-50'  />
            
                {show === img.active && 
                  <div className=' absolute flex flex-row gap-2 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]'>
              <Link legacyBehavior href={img.url}><a target="_blank" ><FaCode  size={24} /></a></Link>
              <Link legacyBehavior href={img.href} passHref><a target="_blank" ><FaEye  size={24}  /></a></Link>
              </div>}
              
              
            </div>
            </motion.li>)
            )}
           
           </ul>
         </div >
    </div>
  )
}
