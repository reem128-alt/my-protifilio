'use client'
import {useRef } from "react"
//import '../app/globals.css'
import {motion,useInView} from 'framer-motion'

const pro=[
  {
    id:'1',
    title:'Music App',
    description:"make this app using React,redux tookit and tailwind for designing ,i used Shazam core Api for fetching data like music ,top chart,artist .. and display it in my website"
  },
  {
    id:'2',
    title:'Blog App',
    description:"its mern stack project in front end i used this technologies React,tailwind for desigigng and make Rest Api by using node js,express and mongo db here the code of backend: https://github.com/reem128-alt/blog-backend "   
  },
  {
    id:'3',
    title:'QuizApp',
    description:"make this app using React,redux tookit and tailwind and chadcn for designing i used 'https://opentdb.com/api.php' as api for fetching question and answers,therer ar many subjects choose one and answer the question with counter"
  },
  {
    id:'4',
    title:'e-commerce',
    description:"made by React ,redux toolkit,tailwind use this fakestoreapi for fetching products and display it on my appusers can add product to its card and see detail of product"
  },
  {
    id:'5',
    title:'Movie Dashboard',
    description:"Full-stack movie dashboard application built with modern technologies. Frontend: React, Tailwind CSS, and React Query for efficient data fetching. Backend: Node.js, Express, and MongoDB for data storage. Features include movie browsing, search functionality, and user authentication.here the code of backend : https://github.com/reem128-alt/movie-dashboard"
  },
   {
    id:'6',
    title:'health-platform',
    description:"Full-stack  application built with modern technologies. Frontend: Nextjs, Tailwind CSS, and next/clerk for user authentication,the app show service,doctors memeber and blogs and take appointment ,for demo i expose dashboard page for add,edit,delete doxtor and blog. Backend: Node.js, Express, and MongoDB for data storage."
  },
  {
    id:'7',
    title:'polling-system',
    description:"Full-stack  application built with modern technologies. Frontend: Nextjs, Tailwind CSSt,in Backend: Node.js, Express, and MongoDB for data storage."
  },
   {
    id: "8",
    title: "chat-app",
    description:
      "Full-stack  application built with modern technologies. Frontend: Nextjs, Tailwind CSS,zustand for state management,socket.io for real-time communication. Backend: Node.js, Express, and MongoDB for data storage.",
  },
]

export default function Project2(){
 
  const ref=useRef(null)
  const isInView=useInView(ref,{once:true})
  const projectVariants={
    initial:{opacity:0,y:0},
    animate:{opacity:1,y:20},
  };

    return (
        <div className="w-full min-h-[300px] mt-4 px-2">
            <h3 className='text-center font-bold text-2xl p-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-blue-300 mb-4'>
              <span className='underline underline-offset-4 text-yellow-300'>MY </span> PROJECTS
            </h3>
            <ul ref={ref} className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center max-w-5xl mx-auto'>
                {pro?.map((ele,index)=>(
                  <motion.li 
                    key={index}
                    variants={projectVariants}
                    initial='initial'
                    animate={isInView ? 'animate' : 'initial'}
                    transition={{duration: 0.3, delay: index * 0.3}}
                    className="w-full flex justify-center"
                  >
                    <button 
                      key={ele.id} 
                      className='bg-gradient-to-r from-yellow-500 to-blue-300 w-full max-w-[180px] py-1.5 rounded-md hover:shadow-lg hover:shadow-yellow-900 transition-all duration-300' 
                      onClick={()=>{document.getElementById(`my_modal_${ele.id}`).showModal()}}
                    >
                      {ele.title}
                    </button>
                    <dialog id={`my_modal_${ele.id}`} className="modal max-[400px]:w-64 ml-5">
                      <div className="modal-box border-gray-800 bg-gray-950 text-white shadow-sm shadow-gray-600 max-[400px]:w-56">
                        <h3 className="font-bold text-lg text-yellow-500 mb-4">{ele.title}</h3>
                        <p className="py-4 text-gray-300">{ele.description}</p>
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn bg-yellow-500 hover:bg-yellow-600 text-gray-900">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </motion.li>
                ))}
            </ul>
        </div>
    )
}
