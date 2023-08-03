import logo from '@/public/assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import {BsArrowUpCircle} from 'react-icons/bs'

const Contact = () => {
    return (
        <section id='contact' className="min-h-screen bg-bgwhite flex flex-col justify-center items-center">
            <h1 className='text-5xl md:text-6xl font-semibold pb-40 text-textgray'>Contact Us</h1>
            <div className='md:flex items-center gap-10 lg:gap-20 xl:gap-40 2xl:gap-52 pb-20'>
                <Image src={logo} height={300} width={300} quality={100} alt='logo' className='opacity-0 md:opacity-100' />
                <svg className='opacity-0 md:opacity-100 h-px md:h-full w-px'>
                    <rect className=' fill-black stroke-2 stroke-black h-full w-px' />
                </svg>
                <div className='text-center md:text-left pt-10 md:pt-0'>
                    <p className='text-xl'><span className='font-semibold'>Phone:</span> +91 93213 53187</p>
                    <p className='text-xl'><span className='font-semibold'>Email:</span> ScienoMath@gmail.com</p>
                </div>
            </div>
            <button className='text-5xl hover:bg-bgyellow rounded-full'>
                <Link href={"#home"}><BsArrowUpCircle /></Link>
            </button>
        </section>
    );
}
 
export default Contact;