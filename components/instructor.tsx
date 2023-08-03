import image from "@/public/assets/Profile-picture.png"
import Image from "next/image";

const Instructor = () => {
    return (
        <section id="instructor" className="min-h-screen bg-gradient-to-b from-bgred to-bgwhite flex flex-col justify-center items-center">
            <h1 className=" text-5xl text-center md:text-6xl font-semibold pb-20 text-bgbrown">Meet Our Instructor</h1>
            <div className=" overflow-x-auto">
                <div>
                    <Image alt="instructor image" height={300} width={300} quality={100} src={image} />
                    <h1 className="text-center text-2xl font-medium pt-10">Suhani Aggarwal</h1>
                </div>
            </div>
        </section>
    );
}
 
export default Instructor;