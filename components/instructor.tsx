'use client'
import image from "@/public/assets/Profile-picture.png"
import Image from "next/image";
import {TbBrandGmail, TbBrandLinkedin, TbPhone} from 'react-icons/tb'
import Link from "next/link";

const Instructor = () => {
    return (
        <section id="instructor" className="min-h-screen bg-white flex flex-col justify-center items-center">
                <h1 className=" text-5xl text-center md:text-6xl font-semibold pb-20 text-textgray underline underline-offset-8 decoration-4 decoration-textblue">Meet Our Instructor</h1>
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <Image alt="instructor image" height={300} width={300} quality={100} src={image} />
                        <h1 className="text-center text-4xl font-semibold pt-10 text-buttonorange">Suhani Aggarwal</h1>
                        <div className="text-3xl flex justify-center items-center pt-5 gap-5 text-textgray">
                            <Link href="mailto:ScienoMath@gmail.com"><TbBrandGmail /></Link>
                            <Link href="tel:+91 93213 53187"><TbBrandLinkedin /></Link>
                            <Link href="tel: +91 93213 53187"><TbPhone /></Link>
                        </div>
                    </div>
                </div>
        </section>
    );
}
 
export default Instructor;