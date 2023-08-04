'use client'
import logo from '@/public/assets/Profile-picture.png'
import Image from 'next/image';
import Link from 'next/link';
import {BsArrowUpCircle} from 'react-icons/bs';
import {motion as m} from'framer-motion';

const Contact = () => {
    return (
        <section id='contact' className="min-h-screen bg-white flex flex-col justify-center items-center">
            <m.h1
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1, delay:0.25}}
            viewport={{once:true}}
            className='text-5xl md:text-6xl font-semibold pb-10 text-textgray underline underline-offset-8 decoration-4 decoration-textblue'>Contact Us</m.h1>
            <m.p
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1, delay:0.5}}
            viewport={{once:true}}
            className='text-xl md:text-2xl text-bgbrown font-semibold pb-5 md:pb-20 text-center px-5'>Have any queries? Feel free to contact us.</m.p>
            <div className='flex flex-col md:flex-row justify-center items-center gap-0 lg:gap-20 xl:gap-40 2xl:gap-52 pb-10 md:pb-20'>
                <m.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:1, delay:0.75}}
                viewport={{once:true}}
                className='flex flex-col justify-center items-center w-8/12 md:w-3/12'>
                    <Image src={logo} height={300} width={300} quality={100} alt='logo' className='pb-5' />
                    <h1 className='text-xl md:text-2xl font-medium text-textgray'>Suhani Aggarwal</h1>
                </m.div>
                <m.svg
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:1, delay:1}}
                viewport={{once:true}}
                className='opacity-0 md:opacity-100 h-px md:h-full w-[4px]'>
                    <rect className=' fill-buttonorange stroke-2 stroke-buttonorange h-full w-[4px]' />
                </m.svg>
                <div className='text-center md:text-left pt-10 md:pt-0'>
                    <m.p
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:1, delay:1.25}}
                    viewport={{once:true}}
                    className='text-xl'><span className='font-semibold'>Phone:</span> +91 93213 53187</m.p>
                    <m.p
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:1, delay:1.5}}
                    viewport={{once:true}}
                    className='text-xl'><span className='font-semibold'>Email:</span> ScienoMath@gmail.com</m.p>
                </div>
            </div>
            <m.button
            initial={{opacity:0}}
            animate={{opacity:1}}
            whileHover={{
                y:[0,-5],
                transition:{
                    duration:0
                }
            }}
            className='text-5xl text-buttonorange md:hover:text-buttonorange rounded-full md:text-textblue'>
                <Link href={"#home"}><BsArrowUpCircle /></Link>
            </m.button>
        </section>
    );
}
 
export default Contact;