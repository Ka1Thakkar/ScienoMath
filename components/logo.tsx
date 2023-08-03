import Image from "next/image";
import logo from "@/public/assets/logo(2).png"
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({weight:["400","300"], subsets:["latin"]})

const Logo = () => {
    return (
        <div className={poppins.className}>
        <div className="fixed top-0 left-0 z-50 w-full bg-bgwhite">
            <div className=" bg-bgwhite text-navbartext">
            <div className="flex justify-center items-center py-5 px-10">
                <div className="my-auto">
                    <Link href={"#home"}><Image src={logo} height={40} width={100} alt="Restaurant logo" quality={100} /></Link>
                </div>
            </div>
        </div>
        </div>
    </div>
    );
}
 
export default Logo;