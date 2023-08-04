'use client'
import Lottie from 'lottie-react'
import animationData from '@/public/assets/Animations/animation_lktta0yg.json'
import Link from 'next/link';


const HomeScreen = () => {
    return (
        <section id='home' className=" bg-white min-h-screen flex md:flex-row flex-col-reverse items-center justify-center gap-5 md:gap-10">
            <div className='md:h-full h-2/5 px-10 md:px-0 md:w-2/5 text-center md:text-right'>
                <p className='text-lg md:text-xl xl:text-3xl pb-2'>Here at</p>
                <h1 className='text-5xl lg:text-7xl 2xl:text-8xl font-bold text-textgray'>ScienoMath</h1>
                <p className='text-lg md:text-xl xl:text-3xl pt-2 text-textblue pb-10 font-semibold'>We learn effectively by adding an element of fun.</p>
                <Link href="#about">
                    <button className='bg-buttonorange rounded-xl py-2 px-5'>Learn More {"->"}</button>
                </Link>
            </div>
            <div className='md:h-full w-11/12 md:w-2/5'>
                <Lottie loop autoplay animationData={animationData} />
            </div>
        </section>
    );
}
 
export default HomeScreen;