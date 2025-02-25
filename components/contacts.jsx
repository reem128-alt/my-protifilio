'use client'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Image from 'next/image'
import '../app/globals.css'

export default function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
      process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      form.current.reset();
      alert('Message sent successfully!');
    })
    .catch((error) => {
      console.error('Error sending email:', error.text);
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <div id='contacts' className='md:mx-[23%]  flex justify-center items-center border-spacing-1 pl-4 bg-gray-950 brightness-150  max-[320px]:justify-start'  style={{borderRadius:'48% 66% 100% 100% /6% 79% 16% 26%'}}>
      <div className='w-1/2 flex flex-col gap-2 ml-4'>
        <h1 className='text-xl p-5 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-blue-300'>
          <span className='underline underline-offset-4 text-yellow-300'>CO</span>NTACT ME
        </h1>
        
        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-2'>
          <label htmlFor="user_email" className='text-slate-300 text-sm'>Your Email</label>
          <input 
            type="email"
            name="user_email"
            id="user_email"
            className='w-[250px] h-8 rounded-full p-3 font-bold'
            required
          />
          
          <label htmlFor="message" className='text-slate-300 text-sm'>Your Message</label>
          <textarea
            name="message"
            id="message"
            className='w-[250px] h-24 rounded-md p-2 font-bold'
            required
          />
          
          <button 
            type="submit"
            className='w-24 py-2 m-2 font-bold text-sm text-center bg-yellow-600 rounded-full shadow-yellow-300 hover:animate-pulse'
          >
            Send Message
          </button>
        </form>
      </div>
      <div className='w-1/2'>
        <Image src='/programmer-removebg-preview.png' alt='programmer' width={300} height={400} className='-mt-6 -ml-16 max-sm:hidden' />
      </div>
    </div>
  )
}
