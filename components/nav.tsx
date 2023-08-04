import Image from "next/image";
import logo from "@/public/assets/logo(2).png"
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({weight:["400","300"], subsets:["latin"]})

const Navbar = () => {
    return (
        <div className={poppins.className}>
        <div className="fixed top-0 left-0 z-50 w-full bg-white">
            <div className=" bg-white text-navbartext">
            <div className="flex justify-between items-center py-5 px-10">
                <div className="my-auto">
                    <Link href={"#home"}><Image src={logo} height={64} width={150} alt="Restaurant logo" quality={100} /></Link>
                </div>
                <div className="flex pt-2 text-lg md:gap-5 items-center text-textgray font-semibold">
                    <button className="border-b-4 border-white transition-all ease-in-out  hover:border-buttonorange">
                        <a href="#about">About</a>
                    </button>
                    <button className="border-b-4 border-white transition-all ease-in-out  hover:border-buttonorange">
                        <a href="#features">Features</a>
                    </button>                    
                    <button className="border-b-4 border-white transition-all ease-in-out  hover:border-buttonorange">
                        <a href="#testimonials">Testimonials</a>
                    </button>                    
                    <button className="border-b-4 border-white transition-all ease-in-out hover:border-buttonorange">
                        <a href="#instructor">Instructor</a>
                    </button>                    
                    <button className="border-b-4 border-white transition-all ease-in-out hover:border-buttonorange">
                        <a href="#contact">Contact Us</a>
                    </button>                
                </div>
            </div>
        </div>
        </div>
    </div>
    );
}
 
export default Navbar;