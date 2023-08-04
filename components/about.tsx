'use client'
import Lottie from 'lottie-react'
import animationData from '@/public/assets/Animations/animation_lkttlecx.json'
import Link from 'next/link';
import {motion as m} from 'framer-motion';

const About = () => {
    return (
        <section id='about' className=" bg-white min-h-screen flex items-center flex-col md:flex-row-reverse justify-center gap-20">
            <div className='h-2/5 md:h-full md:w-2/5 text-center'>
                <m.h1
                initial={{opacity:0, x:-100}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1, delay:0.25}}
                viewport={{once:true}}
                className='text-5xl md:text-6xl font-semibold text-textgray underline underline-offset-8 decoration-4 decoration-textblue'>About</m.h1>
                <m.p
                initial={{opacity:0, x:-100}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1, delay:0.5}}
                viewport={{once:true}}
                className='md:text-lg xl:text-2xl pt-5 px-10 md:px-0 pb-5'>Welcome to ScienoMath! We offer interactive online classes that provide visuals to enhance learning retention. With small batch sizes of up to 8 students, we offer personalized attention while covering school syllabus and preparing for competitive exams. Join us for a transformative learning experience that empowers you for a successful future. Let's learn, grow, and succeed together!</m.p>
                <Link href={"#features"}>
                    <m.button
                    initial={{opacity:0, x:-100}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:1, delay:0.75}}
                    viewport={{once:true}}
                    className='bg-buttonorange p-2 rounded-xl'>
                        What we offer?
                    </m.button>
                </Link>
            </div>
            <m.div
            initial={{opacity:0, x:100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1, delay:0.25}}
            viewport={{once:true}}
            className='w-11/12 md:h-full md:w-2/5'>
                <Lottie animationData={animationData} />
            </m.div>
        </section>
    );
}
 
export default About;