import Image from "next/image";
import logo from "@/public/assets/logo(2).png"
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({weight:["400","300"], subsets:["latin"]})

const Navbar = () => {
    return (
        <div className={poppins.className}>
        <div className="fixed top-0 left-0 z-50 w-full bg-bgwhite">
            <div className=" bg-bgwhite text-navbartext">
            <div className="flex justify-between items-center py-5 px-10">
                <div className="my-auto">
                    <Link href={"#home"}><Image src={logo} height={64} width={150} alt="Restaurant logo" quality={100} /></Link>
                </div>
                <div className="flex pt-2 text-lg md:gap-5 items-center font-light">
                    <button className="hover:border-b-2 hover:border-black">
                        <a href="#about">About</a>
                    </button>
                    <button className="hover:border-b-2 hover:border-black">
                        <a href="#features">Features</a>
                    </button>                    
                    <button className="hover:border-b-2 hover:border-black">
                        <a href="#testimonials">Testimonials</a>
                    </button>                    
                    <button className="hover:border-b-2 hover:border-black">
                        <a href="#instructor">Instructor</a>
                    </button>                    
                    <button className="hover:border-b-2 hover:border-black">
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