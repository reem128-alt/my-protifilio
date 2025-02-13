'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import {motion,useInView} from 'framer-motion'


export default function Myservice() {
  const arr=[
    {
      id:1,
      src:'/ser3-removebg-preview.png',
      title:'Web Development',
      description:"Creating modern and dynamic websites using React, Next.js, and other cutting-edge technologies to deliver exceptional user experiences"
    },
    {
      id:2,
      src:'/OIP__2_-removebg-preview.png',
      title:'Responsive Design',
      description:"Crafting fluid and adaptive layouts using Tailwind CSS and modern CSS techniques to ensure perfect display across all devices"
    },
    {
      id:3,
      src:'/OIP__1_-removebg-preview.png',
      title:'Frontend Architecture',
      description:"Building scalable and maintainable frontend architectures with clean code practices, component-based design, and state management"
    },
    {
      id:4,
      src:'/api.jpg',
      title:'API Integration',
      description:"Seamlessly connecting frontend applications with backend services through RESTful APIs and modern data fetching techniques"
    },
    {
      id:5,
      src:'/optimization.jpg',
      title:'Performance Optimization',
      description:"Enhancing website speed and performance through code optimization, lazy loading, and modern web performance best practices"
    },
    {
      id:6,
      src:'/uximplementaion.jpg',
      title:'UI/UX Implementation',
      description:"Transforming design mockups into pixel-perfect, interactive interfaces with attention to detail and smooth animations"
    }
  ]

  const ref=useRef(null)
  const isInView=useInView(ref,{once:true})
  const cardVariants={
    initial:{y:50,opacity:0},
    animate:{y:0,opacity:1},
  };
  return (
    
    <div id='Service' className='justify-center items-center text-white container mx-auto px-4 py-8'>
        <h1 className='text-center font-bold text-2xl p-5 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-blue-300 mb-8'><span className='underline underline-offset-4 text-yellow-300'>MY</span> SERVICES</h1>
        <ul ref={ref} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
          {arr.map((ele,index)=>
          (<motion.li
           key={index}
           variants={cardVariants}
           initial='initial'
           animate={isInView ? 'animate' : 'initial'}
           transition={{duration: 0.3, delay: index * 0.4}}
           className="w-full max-w-sm"
           >
          <div className='bg-gray-950 brightness-150 w-full h-64 p-6 shadow-md shadow-yellow-300 hover:shadow-lg hover:shadow-yellow-400 transition-all duration-300'>
            <div className="w-12 h-12 relative mb-4">
              <Image 
                src={ele.src} 
                alt={ele.title} 
                fill
                className="rounded-full object-cover"
                sizes="(max-width: 48px) 100vw"
              />
            </div>
            <h2 className='mt-3 text-lg font-semibold text-yellow-300'>{ele.title}</h2>
            <p className='mt-4 text-sm text-gray-300 leading-relaxed'>{ele.description}</p>
          </div>
          </motion.li>)
          )}
        </ul>
    </div>
   
   
  )
}
