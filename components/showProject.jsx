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
{id:4,src:'/movie.jpg',href:'https://movie-dash-front.vercel.app/',active:'four',url:'https://github.com/reem128-alt/movie-dash-front'},
{id:5,src:'/blog.jpg',href:'https://blog-seven-sigma-81.vercel.app/',active:'five',url:'https://github.com/reem128-alt/blog'},
{id:6,src:'/health.jpg',href:'https://health-care-flax-rho.vercel.app/',active:'six',url:'https://github.com/reem128-alt/health-care'},
{id:7,src:'/poll.jpg',href:'https://polling-tau.vercel.app/',active:'seven',url:'https://github.com/reem128-alt/polling'}
]

const cardVariants = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0
  }
}

export default function ShowProject() {
  const [show, setShow] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='flex flex-col items-center justify-center gap-3 w-full'>
        <div className='flex flex-row gap-2 justify-end w-full'>
        <h1 className='font-semibold text-lg '>See All Projects</h1>
        <FaArrowRight size={20}  className='mt-[6px] hover:animate-bounce'/>
        </div>
        
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl" ref={ref}>
            {images.map((img, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial='initial'
                animate={isInView ? 'animate' : 'initial'}
                transition={{duration: 0.3, delay: index * 0.3}}
                className="relative w-full h-64 shadow-sm shadow-gray-300"
                onMouseOver={() => setShow(img.active)}
                onMouseLeave={() => setShow('')}
              >
                <Image 
                  src={img.src} 
                  alt='project' 
                  fill 
                  className='rounded-md shadow-md shadow-gray-600 hover:brightness-50 object-cover'
                />
                
                {show === img.active && 
                  <div className='absolute flex flex-row gap-2 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]'>
                    <Link legacyBehavior href={img.url}><a target="_blank"><FaCode size={24} /></a></Link>
                    <Link legacyBehavior href={img.href}><a target="_blank"><FaEye size={24} /></a></Link>
                  </div>
                }
              </motion.div>
            ))}
          </div>
        </div>
    </div>
  )
}
