import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/logo(2).png"
import { DM_Serif_Display } from "next/font/google";

const poppins = DM_Serif_Display({weight:["400"], subsets:["latin"]})

const BottomBar = () => {
    return (
        <div className={poppins.className}>
        <div className="fixed bottom-0 left-0 z-50 w-full">
            <div className=" bg-bgwhite text-navbartext rounded-t-lg border-t-2 border-bgbrown">
            <div className="flex justify-center items-center py-3 px-5">
                <div className="flex text-md gap-2 items-center justify-center">
                    <button className="">
                        <a href="#about">About</a>
                    </button>
                    <button className="">
                        <a href="#features">Features</a>
                    </button>                    
                    <button className="">
                        <a href="#testimonials">Testimonials</a>
                    </button>                    
                    <button className="">
                        <a href="#instructor">Instructor</a>
                    </button>                    
                    <button className="">
                        <a href="#contact">Contact</a>
                    </button>                
                </div>
            </div>
        </div>
        </div>
    </div>
    );
}
 
export default BottomBar;