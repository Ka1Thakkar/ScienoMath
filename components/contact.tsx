import logo from '@/public/assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import {BsArrowUpCircle} from 'react-icons/bs'

const Contact = () => {
    return (
        <section id='contact' className="min-h-screen bg-white flex flex-col justify-center items-center">
            <h1 className='text-5xl md:text-6xl font-semibold pb-10 text-textgray underline underline-offset-8 decoration-4 decoration-textblue'>Contact Us</h1>
            <p className='text-2xl md:text-2xl text-bgbrown font-semibold pb-5 md:pb-20 text-center px-2'>Have any queries? Feel free to contact us.</p>
            <div className='md:flex justify-center items-center gap-10 lg:gap-20 xl:gap-40 2xl:gap-52 pb-20'>
                <Image src={logo} height={300} width={300} quality={100} alt='logo' className='opacity-0 md:opacity-100 w-1/12 md:w-3/12' />
                <svg className='opacity-0 md:opacity-100 h-px md:h-full w-[4px]'>
                    <rect className=' fill-buttonorange stroke-2 stroke-buttonorange h-full w-[4px]' />
                </svg>
                <div className='text-center md:text-left pt-10 md:pt-0'>
                    <p className='text-xl'><span className='font-semibold'>Phone:</span> +91 93213 53187</p>
                    <p className='text-xl'><span className='font-semibold'>Email:</span> ScienoMath@gmail.com</p>
                </div>
            </div>
            <button className='text-5xl text-buttonorange md:hover:text-buttonorange rounded-full md:text-textblue'>
                <Link href={"#home"}><BsArrowUpCircle /></Link>
            </button>
        </section>
    );
}
 
export default Contact;