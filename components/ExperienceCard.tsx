import { motion } from 'framer-motion'
import React from 'react'


type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-gray-500 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden' >
        <motion.img
        initial={{
            y:-100,
            opacity:0,
        }} 
        transition={{
            duration:1.2
        }}
        whileInView={{opacity:1, y:0}}
        viewport={{once: true}}
        className='w-28 h-28 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://pbs.twimg.com/profile_images/1536067229384441856/g_bOGpVQ_400x400.jpg'
        alt='' />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO of MNZ Media</h4>
            <p className='font-bold text-2xl mt-1'>MNZ</p>
            <div className='flex space-x-2 my-2'>
                <img 
                className='h-10 w-10 rounded-full' 
                src='https://thumbnail.imgbin.com/0/8/11/imgbin-javascript-logo-html-javascript-logo-1gJt6c05WzKXQuybWYgXvaTYk_t.jpg'
                alt=''
                />
                <img 
                className='h-10 w-10 rounded-full' 
                src='https://thumbnail.imgbin.com/0/8/11/imgbin-javascript-logo-html-javascript-logo-1gJt6c05WzKXQuybWYgXvaTYk_t.jpg'
                alt=''/>
                <img 
                className='h-10 w-10 rounded-full' 
                src='https://thumbnail.imgbin.com/0/8/11/imgbin-javascript-logo-html-javascript-logo-1gJt6c05WzKXQuybWYgXvaTYk_t.jpg'
                alt=''/>
                
                {/* tech used*/}
                {/* tech used*/}
                {/* tech used*/}
            </div>
            <p className='uppercase py-5 text-gray-600'>Started Work......-......</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>

            </ul>
        </div>
    </article>
  )
}

{/* <motion.img 
        initial={{
            y:-100,
            opacity: 0
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className='w-32 h-32 rounded-full xl:w-[220px] xl:h-[200px] object-cover object-center' 
        src='https://blog.hubspot.com/hubfs/image8-2.jpg'
        alt=''
        /> */}