'use client'
import Lottie from 'lottie-react'
import animationData from '@/public/assets/Animations/animation_lktta0yg.json'
import Link from 'next/link';
import {motion as m} from 'framer-motion'


const HomeScreen = () => {
    return (
        <section id='home' className=" bg-white min-h-screen flex md:flex-row flex-col-reverse items-center justify-center gap-5 md:gap-10">
            <m.div
            className='md:h-full h-2/5 px-10 md:px-0 md:w-2/5 text-center md:text-right'>
                <m.p
                initial = {{opacity:0, x:40}}
                animate = {{opacity:1, x:0}}
                transition={{delay:0, type:"Tween", duration:1}}
                className='text-lg md:text-xl xl:text-3xl pb-2'>Here at</m.p>
                <m.h1
                initial = {{opacity:0, x:40}}
                animate = {{opacity:1, x:0}}
                transition={{delay:0.5, type:"Tween", duration:1}}
                className='text-5xl lg:text-7xl 2xl:text-8xl font-bold text-textgray'>ScienoMath</m.h1>
                <m.p
                initial = {{opacity:0, x:40}}
                animate = {{opacity:1, x:0}}
                transition={{delay:1, type:"Tween", duration:1}}
                className='text-lg md:text-xl xl:text-3xl pt-2 text-textblue pb-10 font-semibold'>We learn effectively by adding an element of fun.</m.p>
                <Link href="#about">
                    <m.button
                    initial = {{opacity:0, x:40}}
                    animate = {{opacity:1, x:0}}
                    transition={{delay:1.5, type:"Tween", duration:1}}
                    className='bg-buttonorange rounded-xl py-2 px-5'>Learn More {"->"}</m.button>
                </Link>
            </m.div>
            <m.div
            initial = {{opacity:0, x:-40}}
            animate = {{opacity:1, x:0}}
            transition={{delay:0, type:"Tween", duration:1}}
            className='md:h-full w-11/12 md:w-2/5'>
                <Lottie loop autoplay animationData={animationData} />
            </m.div>
        </section>
    );
}
 
export default HomeScreen;