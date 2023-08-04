'use client'
import Image from "next/image";
import logo from "@/public/assets/logo(2).png"
import { Poppins } from "next/font/google";
import Link from "next/link";
import {motion as m} from 'framer-motion';

const poppins = Poppins({weight:["400","300"], subsets:["latin"]})

const Navbar = () => {
    return (
        <div className={poppins.className}>
        <div className="fixed top-0 left-0 z-50 w-full bg-white">
            <div className=" bg-white text-navbartext">
            <div className="flex justify-between items-center py-5 px-10">
                <m.div
                initial = {{opacity:0, x:-40}}
                animate = {{opacity:1, x:0}}
                transition={{delay:0, duration:1, type: "Tween"}}
                className="my-auto">
                    <Link href={"#home"}><Image src={logo} height={64} width={150} alt="Restaurant logo" quality={100} /></Link>
                </m.div>
                <div className="flex pt-2 text-lg md:gap-5 items-center text-textgray font-semibold">
                    <m.button
                    initial = {{opacity:0, x:40}}
                    animate = {{opacity:1, x:0}}
                    transition={{delay:0, duration:1, type: "Tween"}}
                    className="border-b-4 border-white transition-all ease-in-out  hover:border-buttonorange">
                        <a href="#about">About</a>
                    </m.button>
                    <m.button
                    initial = {{opacity:0, x:40}}
                    animate = {{opacity:1, x:0}}
                    transition={{delay:0.25, duration:1, type: "Tween"}}
                    className="border-b-4 border-white transition-all ease-in-out  hover:border-buttonorange">
                        <a href="#features">Features</a>
                    </m.button>                    
                    <m.button
                    initial = {{opacity:0, x:40}}
                    animate = {{opacity:1, x:0}}
                    transition={{delay:0.5, duration:1, type: "Tween"}}
                    className="border-b-4 border-white transition-all ease-in-out  hover:border-buttonorange">
                        <a href="#testimonials">Testimonials</a>
                    </m.button>                    
                    {/* <button className="border-b-4 border-white transition-all ease-in-out hover:border-buttonorange">
                        <a href="#instructor">Instructor</a>
                    </button>                     */}
                    <m.button
                    initial = {{opacity:0, x:40}}
                    animate = {{opacity:1, x:0}}
                    transition={{delay:0.75, duration:1, type: "Tween"}}
                    className="border-b-4 border-white transition-all ease-in-out hover:border-buttonorange">
                        <a href="#contact">Contact Us</a>
                    </m.button>                
                </div>
            </div>
        </div>
        </div>
    </div>
    );
}
 
export default Navbar;