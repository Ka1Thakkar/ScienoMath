'use client'
import Reviews from "./Reviews";
import animationData from '@/public/assets/Animations/teacher-animation.json'
import Lottie from 'lottie-react'
import {motion as m} from 'framer-motion';

const Testimonial = () => {
    return (
        <section id="testimonials" className="flex flex-col justify-center items-center min-h-screen px-5 sm:px-0">
            <m.h1
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1, delay:0.25}}
            viewport={{once:true}}
            className="text-5xl md:text-6xl text-textgray underline underline-offset-8 decoration-textblue decoration-4 font-bold pb-5 text-center">Testimonials</m.h1>
            <m.h1
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1, delay:0.5}}
            viewport={{once:true}}
            className="text-xl md:text-2xl font-semibold text-bgbrown pb-20 text-center">Don't believe us? Listen to what other parents have to say.</m.h1>
            <Reviews />
        </section>
    );
}
 
export default Testimonial;