'use client'
import Lottie from 'lottie-react'
import animationData from '@/public/assets/Animations/animation_lkttlecx.json'

const About = () => {
    return (
        <section id='about' className=" bg-gradient-to-b from-bgyellow to-bgred min-h-screen flex items-center flex-col md:flex-row-reverse justify-center gap-20 pt-20">
            <div className='h-2/5 md:h-full md:w-2/5 text-center'>
                <h1 className='text-5xl md:text-6xl font-semibold text-textgray'>About</h1>
                <p className='md:text-lg xl:text-2xl pt-5 px-10 md:px-0'>Welcome to ScienoMath! We offer interactive online classes that provide visuals to enhance learning retention. With small batch sizes of up to 8 students, we offer personalized attention while covering school syllabus and preparing for competitive exams. Join us for a transformative learning experience that empowers you for a successful future. Let's learn, grow, and succeed together!</p>
            </div>
            <div className='w-11/12 md:h-full md:w-2/5'>
                <Lottie animationData={animationData} />
            </div>
        </section>
    );
}
 
export default About;